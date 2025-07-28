import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[#1F2937] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main heading with typing animation */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[#F9FAFB] mb-4">
            <span className="typing-animation inline-block">Coding soon</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
