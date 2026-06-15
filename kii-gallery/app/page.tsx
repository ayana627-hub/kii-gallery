export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#FCFAF5] text-[#5D4B3E]"
      style={{
        backgroundImage: "url('/halfbirthday.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="min-h-screen bg-[#FCFAF5]/40 backdrop-blur-[1px] px-6 py-10 flex flex-col justify-end">

        <div className="absolute top-8 left-8 text-left">
          <div className="text-5xl leading-none">
            Kii
          </div>
          <div className="mt-1 text-[9px] tracking-[0.25em] uppercase">
            tomodachi<br />cameraman
          </div>
        </div>

        <div className="mb-8 text-right">
          <h1 className="text-5xl tracking-wide font-light">
            half birthday
          </h1>
          <p className="mt-3 text-sm tracking-[0.25em] leading-relaxed">
            capturing little moments,<br />
            keeping them forever
          </p>
        </div>

        <section className="rounded-[28px] bg-[#FCFAF5]/80 backdrop-blur-md border border-white/50 shadow-xl p-6 mb-6">
          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-4 border-b border-[#5D4B3E]/15 pb-4">
              <span className="text-2xl">♡</span>
              <span>やまださま</span>
            </div>

            <div className="flex items-center gap-4 border-b border-[#5D4B3E]/15 pb-4">
              <span className="text-2xl">⌖</span>
              <span>海の中道海浜公園</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl">▣</span>
              <span>98 photos</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <a
          href="/gallery"
          className="bg-[#EBD47A]/85 backdrop-blur-md rounded-2xl py-4 shadow-lg border border-white/50 text-base text-center"
          >
            思い出を開く
            </a>

          <button className="bg-[#EBD47A]/85 backdrop-blur-md rounded-2xl py-4 shadow-lg border border-white/50 text-base">
            まとめて保存
          </button>

          <button className="bg-[#FCFAF5]/80 backdrop-blur-md rounded-2xl py-4 shadow-md border border-[#5D4B3E]/10 text-base">
            家族にシェア
          </button>

          <button className="bg-[#FCFAF5]/80 backdrop-blur-md rounded-2xl py-4 shadow-md border border-[#5D4B3E]/10 text-base">
            お気に入り
          </button>
        </div>

      </div>
    </main>
  );
}