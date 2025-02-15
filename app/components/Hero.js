import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[600px] w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-center text-2xl sm:text-4xl z-[3] font-light">
          מעצבים את החלומות שלכם בעץ
        </h1>
      </div>
      <Image
        src="/עומר_תעשיות_עץ.png"
        alt="hero"
        fill
        className="object-cover brightness-50 object-[30%_70%]"
      />
    </section>
  );
}
