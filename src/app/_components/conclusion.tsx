/* eslint-disable */

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ProgressSlider,
  SliderBtnGroup,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progress-slider";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Home } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const items = [
  {
    icon: <Home />,
    title: "🌟 Phong thái và trí tuệ",
    desc: "Nguyễn Ái Quốc là người trí tuệ, lịch thiệp, điềm đạm, có phong thái của một nhà văn hóa lớn; có bản lĩnh kiên cường, ứng xử tinh tế, giản dị mà nhân văn, tạo ấn tượng sâu sắc với mọi người như Mandenxtam miêu tả.",
    sliderName: "Phong thái",
    src: "/assets/image/hcm-12.png",
  },
  {
    icon: <Home />,
    title: "📚 Tư tưởng vượt thời đại",
    desc: "Nguyễn Ái Quốc sớm tiếp thu và vận dụng chủ nghĩa Mác – Lênin vào giải phóng dân tộc, gắn giải phóng dân tộc với giải phóng giai cấp và con người, mở ra con đường mới cho các dân tộc thuộc địa — điều này thể hiện lý tưởng tiến bộ mang tính toàn cầu, biểu hiện của một nền “văn hóa tương lai”.",
    sliderName: "Tư tưởng",
    src: "/assets/image/hcm-11.jpg",
  },
  {
    icon: <Home />,
    title: "🤝 Tình hữu ái quốc tế",
    desc: "Nguyễn Ái Quốc luôn đề cao đoàn kết, hòa bình và công lý; đấu tranh không vì trả thù mà vì một thế giới bình đẳng, tự do, giúp đỡ các dân tộc bị áp bức.",
    sliderName: "Quốc tế",
    src: "/assets/image/hcm-13.jpg",
  },
];

export default function ConclusionSection() {
  const isMobile = useMediaQuery("(min-width: 640px)");
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlider, setActiveSlider] = useState(items[0].sliderName);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveSlider(items[0].sliderName);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="h-[75vh]">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br text-white from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-medium tracking-tight text-transparent"
          >
            Nhận xét
          </motion.h1>
          <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10 mb-16">
            <p className=" text-white dark:text-neutral-300 text-sm md:text-2xl pt-10">
              Năm 1923, nhà thơ, nhà báo nổi tiếng người Xô Viết O.Mandenxtam gặp Nguyễn Ái Quốc lúc này 33 tuổi ở Moskva, O.Mandenxtam đã đánh giá Nguyễn Ái Quốc là một người phương Đông lịch sự, là biểu hiện cho một nền văn hóa của tương lai: “Từ Nguyễn Ái Quốc tỏa ra một thứ văn hóa, không phải văn hóa châu Âu, mà có lẽ là một nền văn hóa của tương lai. Từ trong giọng nói đầm ấm, thanh cao của Người, chúng ta như nghe thấy ngày mai, như thấy viễn cảnh trời yên biển lặng của tình hữu ái bao la toàn thế giới mênh mang như nước đại dương”.
            </p>
          </div>
        </LampContainer>
      </div>
      <div
        ref={sectionRef}
        className="w-full h-full md:lg:pt-10 lg:pt-10 pt-14 bg-slate-950 overflow-hidden pb-10"
      >        
        <div>
          <ProgressSlider
            vertical={isMobile}
            fastDuration={300}
            duration={4000}
            activeSlider={activeSlider}
            className="flex flex-col md:flex-row h-full"
          >
            {/* Content Section */}          
            <SliderBtnGroup className="relative w-full md:w-1/2 z-10 flex flex-col h-[75vh] md:h-full bg-slate-950/95 backdrop-blur-md overflow-y-auto">
              {items.map((item, index) => (
                <SliderBtn
                  key={index}
                  value={item?.sliderName}
                  className="text-left p-4 md:p-6 border-b border-slate-800 flex-none h-[25%] md:h-1/4 relative group hover:bg-slate-900/50 transition-colors"
                  progressBarClass="left-0 top-0 bg-white w-1 md:w-2 h-full before:h-full before:w-2 md:before:w-3 before:bg-white"
                >
                  {/* Dark overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/50 pointer-events-none" />

                  <div className="relative z-10">
                    <h2 className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded bg-white text-black mb-3 md:mb-4 text-sm md:text-xl font-bold">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base text-slate-200 line-clamp-3 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </SliderBtn>
              ))}
            </SliderBtnGroup>

            {/* Image Section */}
            <SliderContent className="hidden w-full md:w-3/6 lg:flex md:flex flex-col h-[40vh] md:h-[70vh] pe-5">
              {items.map((item, index) => (
                <SliderWrapper
                  className="h-full w-full"
                  key={index}
                  value={item?.sliderName}
                >
                  <div className="h-full w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      className="h-full w-full object-cover"
                      src={item?.src || "/placeholder.svg"}
                      width={500}
                      height={500}
                      alt={item.sliderName}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>
          </ProgressSlider>
        </div>

        {/* Mobile Navigation Indicator */}
        <div className="hidden md:hidden fixed bottom-4 left-1/2 -translate-x-1/2  gap-2 z-20">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeSlider === item.sliderName ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
