"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white relative flex min-h-[800px] flex-col justify-center overflow-hidden bg-[center_65%] bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url('/images/logo.png')",
      }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 pt-24 sm:px-6 md:px-8 md:pt-28" />

      <div className="absolute inset-x-0 -bottom-px z-[3] leading-none">
        <svg
          viewBox="0 0 1440 90"
          width="100%"
          height="90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,90 C360,10 1080,10 1440,90 L1440,90 L0,90 Z"
            fill="#FBF9F4"
          />
          <path
            d="M0,86 C360,10 1080,10 1440,86"
            fill="none"
            stroke="#C89238"
            strokeWidth={2}
          />
        </svg>
      </div>
    </section>
  );
}
