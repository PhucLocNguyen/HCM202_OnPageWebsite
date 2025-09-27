// thanks to oliver: https://www.youtube.com/@olivierlarose1

"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { JSX, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "🔁 Trở lại gần biên giới Việt – Trung (cuối 1940)",
    description:
      "Hồ Chí Minh liên lạc với Trung ương Đảng Cộng sản Đông Dương, trực tiếp chỉ đạo phong trào cách mạng trong nước.",
    link: "/assets/image/return.jpg",
    color: "#5196fd",
  },
  {
    title: "📚 Mở lớp huấn luyện & viết 'Con đường giải phóng'",
    description:
      "Người mở lớp huấn luyện cán bộ, viết tác phẩm Con đường giải phóng (1-1941), nêu rõ phương pháp cách mạng giành chính quyền.",
    link: "/assets/image/huan-luyen-can-bo.jpg",
    color: "#8f89ff",
  },
  {
    title: "📍 Hội nghị Trung ương 8 tại Pác Bó (5/1941)",
    description:
      "Hồ Chí Minh chủ trì hội nghị, đưa ra chủ trương đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất.",
    link: "/assets/image/hoi-nghi-6.jpg",
    color: "#4caf50",
  },
  {
    title: "🤝 Thành lập Mặt trận Việt Minh",
    description:
      "Tập hợp, đoàn kết toàn dân trên cơ sở nòng cốt liên minh công nông, chuẩn bị khởi nghĩa vũ trang giành chính quyền.",
    link: "/assets/image/viet-minh.jpg",
    color: "#ed649e",
  },
];

export default function DevelopmentSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className=" relative text-white min-h-[40vh] w-full bg-slate-950 grid place-content-center px-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
            Giai đoạn trở về trực tiếp lãnh đạo – khẳng định tư tưởng (1939–1941)
          </h1>
        </section>

        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0 px-4 py-8 lg:py-16"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-auto w-full sm:w-[80%] lg:w-[60%] rounded-md p-4 sm:p-6 lg:p-8 origin-top"
      >
        <p className="text-3xl sm:text-3xl text-center font-semibold text-black mb-4">
          {title}
        </p>

        <div className="flex flex-col lg:flex-row h-full gap-4 lg:gap-6">
          <div className="w-full lg:w-[50%] relative flex flex-col justify-between">
            <p className="text-base sm:text-2xl">{description}</p>
          </div>

          <div className="relative lg:w-[360px] md:w-[320px] sm:w-[300px] aspect-[5/3] rounded-lg overflow-hidden ms-3">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={url || "/placeholder.svg"}
                alt={title}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
