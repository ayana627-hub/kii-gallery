"use client";

import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const visibleImages = showOnlyFavorites ? favorites : images;

  const toggleFavorite = (image: string) => {
    setFavorites((prev) =>
      prev.includes(image)
        ? prev.filter((item) => item !== image)
        : [...prev, image]
    );
  };

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 360 : -360,
      behavior: "smooth",
    });
  };

  const nextImage = () => {
    if (selectedIndex === null || visibleImages.length === 0) return;

    setSelectedIndex((selectedIndex + 1) % visibleImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null || visibleImages.length === 0) return;

    setSelectedIndex(
      (selectedIndex - 1 + visibleImages.length) % visibleImages.length
    );
  };

  return (
    <main className="min-h-screen bg-[#FCFAF5] p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl text-[#5D4B3E]">
            Kii Gallery
          </h1>

          <p className="mt-2 text-[#8A7A68]">
            ♥ お気に入り {favorites.length}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="rounded-full bg-white px-4 py-2 text-[#5D4B3E] shadow"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="rounded-full bg-white px-4 py-2 text-[#5D4B3E] shadow"
          >
            →
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          setShowOnlyFavorites(!showOnlyFavorites);
          setSelectedIndex(null);
        }}
        className="mb-6 rounded-full bg-[#EBD47A]/90 px-6 py-3 text-[#5D4B3E] shadow-lg"
      >
        {showOnlyFavorites
          ? "すべての写真を見る"
          : "お気に入りだけ見る"}
      </button>

      {visibleImages.length === 0 ? (
        <div className="rounded-[32px] bg-white/80 p-8 text-center text-[#5D4B3E] shadow">
          まだお気に入りがありません♡
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x pb-4"
        >
          {visibleImages.map((image, index) => (
            <div
              key={image}
              className="relative shrink-0 snap-center"
            >
              <img
                src={image}
                onClick={() => setSelectedIndex(index)}
                className="w-[75vw] md:w-[340px] aspect-[3/4] object-cover rounded-[32px] shadow-xl cursor-pointer hover:scale-[1.02] transition"
              />

              <button
                onClick={() => toggleFavorite(image)}
                className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-[#5D4B3E] shadow-lg"
              >
                {favorites.includes(image) ? "♥" : "♡"}
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedIndex !== null && visibleImages.length > 0 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            ‹
          </button>

          <div className="flex flex-col items-center gap-5">
            <img
              src={visibleImages[selectedIndex]}
              className="max-h-[78vh] rounded-3xl shadow-2xl"
            />

            <div className="flex gap-4">
              <button
                onClick={() =>
                  toggleFavorite(visibleImages[selectedIndex])
                }
                className="rounded-full bg-white/90 px-6 py-3 text-[#5D4B3E] shadow-lg"
              >
                {favorites.includes(
                  visibleImages[selectedIndex]
                )
                  ? "♥ お気に入り"
                  : "♡ お気に入り"}
              </button>

              <a
                href={visibleImages[selectedIndex]}
                download
                className="rounded-full bg-[#EBD47A]/90 px-6 py-3 text-[#5D4B3E] shadow-lg"
              >
                ↓ 保存
              </a>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}