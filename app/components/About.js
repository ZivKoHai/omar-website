import Image from "next/image";
import TypoH2 from "./ui/TypoH2";
import TypoP from "./ui/TypoP";

export default function About() {
  return (
    <section
      id="about"
      className="bg-foreground min-h-[90vh] grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 px-10 my-10 sm:px-20 overflow-hidden"
    >
      <div className="flex flex-col gap-5 justify-center items-start text-background">
        <TypoH2>עומר תעשיות עץ בע&quot;מ</TypoH2>
        <TypoP>
          עומר תעשיות עץ בע&quot;מ הינה חברת תעשיות עץ בע&quot;מ המתמחה בייצור
          ופריסת עץ ופרסומות עץ בכל הגובה והרוחב.
        </TypoP>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center">
            <span className="sm:text-7xl text-5xl font-bold">10+</span>
            <span>שנים של ניסיון</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="sm:text-7xl text-5xl font-bold">100+</span>
            <span>פרוייקטים שלנו</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative w-[500px] h-[500px] rounded-lg overflow-hidden z-20 ">
          <Image
            src="/עומר_תעשיות_עץ_1.png"
            alt="about"
            fill
            className="object-cover rounded-lg brightness-75"
          />
        </div>
      </div>
    </section>
  );
}
