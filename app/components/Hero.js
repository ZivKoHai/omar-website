import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[600px] w-full relative">
      <Image
        src="/עומר_תעשיות_עץ.png"
        alt="hero"
        fill
        className="object-cover brightness-50 object-[30%_70%]"
      />
    </section>
  );
}
