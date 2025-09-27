"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContentToGenerateQuizGemini } from "@/api/messages";

type QuizItem = {
  question: string;
  options: string[];
  answer: string; // chỉ lưu "A" | "B" | ...
};

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const [quizData, setQuizData] = useState<QuizItem[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSelect = (opt: string) => {
    const letter = opt[0];
    setSelected((prev) => ({ ...prev, [current]: letter }));
  };

  const handleNext = () => {
    if (current < quizData.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
    }
  };

  const score = quizData.filter((q, i) => selected[i] === q.answer).length;

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const result = await sendContentToGenerateQuizGemini();
        const parsed: QuizItem[] = JSON.parse(result);
        setQuizData(parsed);
      } catch (err) {
        console.error("❌ Lỗi khi load quiz:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, []);

  if (loading) {
    return <p className="text-center">Đang tải câu hỏi...</p>;
  }

  if (!quizData.length) {
    return <p className="text-center text-red-500">Không có dữ liệu quiz</p>;
  }

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Quiz: Chủ nghĩa Mác-Lênin & Giai cấp công nhân
      </h2>

      {!finished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.32 }}
            className="p-4 border rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">
                {current + 1}. {quizData[current].question}
              </h3>
              <div className="text-sm text-gray-500">
                {current + 1}/{quizData.length}
              </div>
            </div>

            <div className="grid gap-3">
              {quizData[current].options.map((opt, idx) => {
                const letter = opt.trim()[0];
                const isSelected = selected[current] === letter;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    aria-pressed={isSelected}
                    className={`text-left px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-50 hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    <span className="font-medium mr-2">{letter}.</span>
                    <span>{opt.slice(opt.indexOf(".") + 1).trim()}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {selected[current]
                  ? `Đã chọn: ${selected[current]}`
                  : "Chưa chọn"}
              </div>
              <button
                onClick={handleNext}
                disabled={!selected[current]}
                className={`px-5 py-2 rounded-lg font-semibold transition ${
                  selected[current]
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
                type="button"
              >
                {current === quizData.length - 1 ? "Nộp bài" : "Tiếp tục"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.28 }}
          className="p-4 border rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-center mb-4">
            Kết quả của bạn
          </h3>
          <p className="text-lg font-semibold text-center mb-6">
            ✅ Bạn trả lời đúng {score}/{quizData.length} câu
          </p>

          <div className="space-y-4">
            {quizData.map((q, i) => {
              const user = selected[i];
              const isCorrect = user === q.answer;
              const userText = user
                ? q.options.find((o) => o.trim()[0] === user)
                : null;
              const correctText = q.options.find(
                (o) => o.trim()[0] === q.answer
              );
              return (
                <div key={i} className="p-3 rounded-lg border bg-gray-50">
                  <p className="font-medium">
                    {i + 1}. {q.question}
                  </p>
                  <p
                    className={`mt-1 ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect
                      ? `✔️ Bạn: ${user} — ${userText
                          ?.slice(userText.indexOf(".") + 1)
                          .trim()}`
                      : `❌ Bạn: ${user || "Chưa chọn"} — ${
                          userText
                            ? userText.slice(userText.indexOf(".") + 1).trim()
                            : ""
                        }. Đáp án: ${q.answer} — ${correctText
                          ?.slice(correctText.indexOf(".") + 1)
                          .trim()}`}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </section>
  );
}
