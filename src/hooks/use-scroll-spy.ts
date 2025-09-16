import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useScrollSpy(ids: string[], offset = 64) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentId = "";

            ids.forEach((id) => {
                const element = document.querySelector(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom > offset) {
                        currentId = id; // Phần tử đang trong viewport
                    }
                }
            });

            setActiveId(currentId.replace("#", ""));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Chạy ngay khi mount để sync trạng thái
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
}

