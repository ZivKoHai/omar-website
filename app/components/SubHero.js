import Image from "next/image";
import TypoH1 from "./ui/TypoH1";
import TypoP from "./ui/TypoP";
import Button from "./ui/Button";

export default function SubHero() {
  return (
    <section
      id="subhero"
      className="main-wrapper-omar grid md:grid-cols-2 grid-rows-1 auto-rows-auto min-h-[500px] mt-10 px-10 sm:px-20 gap-10"
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <TypoH1>עבודות עץ מותאמות אישית לבית שלכם</TypoH1>
        <TypoP>
          בעומר תעשיות עץ אנו מציעים שירותי עבודות עץ מותאמים אישית לבית שלכם.
          בין אם אתם מחפשים שירותי עבודות עץ בכלל או פרוייקט מסוים, אנו מציעים
          פתרונות מקצועיים ומותאמים אישית לכל דרישותיכם.
        </TypoP>
        <Button href="https://wa.me/972545829617" className="bg-foreground">
          צור קשר
        </Button>
      </div>
      <div className="columns-2">
        <Image
          src="/עומר_תעשיות_עץ_3.png"
          width={500}
          height={500}
          alt="subhero"
          className="mb-5 rounded-lg"
        />
        <Image
          src="/עומר_תעשיות_עץ_1.png"
          width={500}
          height={500}
          alt="subhero"
          className="mb-5 rounded-lg"
        />
        <Image
          src="/עומר_תעשיות_עץ_2.png"
          width={500}
          height={500}
          alt="subhero"
          className="mb-5 rounded-lg transform translate-y-[20%] sm:translate-y-[50%]"
        />
      </div>
    </section>
  );
}
