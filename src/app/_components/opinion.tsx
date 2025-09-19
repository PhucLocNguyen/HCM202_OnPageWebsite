"use client";

import { ReactLenis } from "lenis/react";
import type { JSX } from "react";

export default function OpinionSection(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white min-h-screen w-full bg-slate-950 flex items-center justify-center sticky top-0 px-4 py-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center gap-8 lg:gap-12">
              <blockquote className="lg:w-[58.33%] text-lg sm:text-xl lg:text-xl 2xl:text-xl font-medium text-left leading-relaxed tracking-wide">
                <p className="mb-6">
                  📌 Giai đoạn thử thách – 
                  <span className="text-green-500 font-semibold"> kiên định con đường cứu nước (1930–1934)</span>
                </p>
                <p className="mb-6">
                  Năm 1930, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản, 
                  thành lập Đảng Cộng sản Việt Nam và soạn thảo Cương lĩnh chính trị đầu tiên.
                </p>
                <p className="mb-6">
                  Tuy nhiên, tư tưởng đặt nhiệm vụ giải phóng dân tộc lên hàng đầu của Người 
                  bị một số người trong Quốc tế Cộng sản và nội bộ Đảng hiểu sai là 
                  “hữu khuynh”, “dân tộc chủ nghĩa” do ảnh hưởng tư tưởng giáo điều, tả khuynh.
                </p>
                <p>
                  ⚡ Dù bị hiểu lầm, Hồ Chí Minh vẫn kiên định con đường cách mạng dân tộc, 
                  dân chủ, chờ thời cơ trở lại lãnh đạo.
                </p>
              </blockquote>
              <div className="relative w-full lg:w-[41.67%] h-72">
                {/* Top-left image */}
                <img
                  src="/assets/image/hoi-nghi-1.jpg"
                  alt="Image 1"
                  className="absolute top-0 left-0 w-80 h-52 object-cover rounded-lg shadow-md border-2 border-white rotate-[-8deg]"
                />
                {/* Top-right image */}
                <img
                  src="/assets/image/hieu-lam.jpg"
                  alt="Image 2"
                  className="absolute top-0 right-0 w-48 h-64 object-cover rounded-lg shadow-md border-2 border-white rotate-[8deg]"
                />
                {/* Bottom-center image */}
                <img
                  src="/assets/image/naq-1.jpg"
                  alt="Image 3"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-36 object-cover rounded-lg shadow-md border-2 border-white rotate-[-3deg]"
                />
              </div>
            </div>
          </section>
        </div>

        <section className="text-white w-full bg-slate-950">
          <div className="flex flex-col lg:flex-row px-4 lg:px-16 max-w-7xl mx-auto">
            <div className="lg:sticky lg:top-0 lg:h-screen grid place-content-center w-full lg:w-1/2 py-8 lg:py-0">
              <p className="text-lg sm:text-xl lg:text-xl px-0 lg:px-8 font-medium text-left tracking-tight leading-relaxed">
                <span className="font-bold">📍 Giai đoạn tìm đường trở lại – chuẩn bị lực lượng (1934–1938)</span>
                <br />
                - Sau khi thoát khỏi nhà tù của thực dân Anh ở Hồng Kông, Hồ Chí Minh sang Liên Xô học tại Trường Quốc tế Lênin và làm nghiên cứu sinh tại Viện nghiên cứu các vấn đề dân tộc và thuộc địa của Quốc tế Cộng sản.
                <br />
                - Trong thời gian này, Người vẫn bị hiểu lầm về quan điểm cách mạng, bị đứng ngoài hoạt động thực tiễn.
                <br />
                - Khi Chiến tranh thế giới thứ hai bùng nổ, Người nhận thấy thời cơ giải phóng dân tộc đang đến gần.
                <br />
                - Tháng 6-1938, Người gửi thư xin được trở lại hoạt động: “Xin đồng chí giúp đỡ tôi thay đổi tình cảnh đau buồn này... Đừng để tôi sống quá lâu trong tình trạng không hoạt động và giống như là sống ở bên cạnh, ở bên ngoài của Đảng”.
                <br />
                - Cuối năm 1938, Người rời Liên Xô sang Trung Quốc, chuẩn bị về nước.
              </p>
            </div>

            <div className="grid gap-8 w-full lg:w-1/2 py-8 lg:py-0">
              {[
                {
                  bg: "bg-red-500",
                  rotate: "rotate-6",
                  title: "⛓️ Thoát khỏi nhà tù Hồng Kông",
                  image: "prison-hong-kong.jpg",
                },
                {
                  bg: "bg-green-400",
                  rotate: "-rotate-6",
                  title: "📚 Học tại Trường Quốc tế Lênin (Liên Xô)",
                  image: "naq-4.jpg",
                },
                {
                  bg: "bg-orange-400",
                  rotate: "rotate-5",
                  title: "📝 Nghiên cứu tại Viện Dân tộc và Thuộc địa",
                  image: "naq-3.webp",
                },
                {
                  bg: "bg-blue-400",
                  rotate: "-rotate-5",
                  title: "💌 Gửi thư xin trở lại hoạt động (6/1938)",
                  image: "letter.jpg",
                },
                {
                  bg: "bg-purple-400",
                  rotate: "rotate-6",
                  title: "✈️ Chuẩn bị trở về nước (cuối 1938)",
                  image: "return.jpg",
                },
                // ... Thêm các phần tử khác tương tự
              ].map((item, index) => (
                <figure
                  key={index}
                  className="lg:sticky lg:top-0 lg:h-screen grid place-content-center"
                >
                  <article
                    className={`${item.bg} h-auto sm:h-[400px] w-full sm:w-[40rem] rounded-lg ${item.rotate} p-4 flex flex-col items-center gap-4`}
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-center flex items-center gap-2 whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </h2>
                    <img
                      src={`/assets/image/${item.image}`}
                      alt={item.title}
                      className="h-[200px] sm:h-[300px] w-full sm:w-[550px] rounded-lg object-cover"
                    />
                  </article>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
