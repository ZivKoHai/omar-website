import Quote from "./ui/Quote";
import TypoH2 from "./ui/TypoH2";
import Image from "next/image";
import TypoH3 from "./ui/TypoH3";
import TypoP from "./ui/TypoP";

import EmblaCarousel from "./emblaCarousel";

const testimonialsContext = [
  {
    name: "מירים",
    city: "תל אביב",
    description:
      "עומר בנה לנו ארון מעוכל שיתאים לנו בדיוק לקיר בסלון וזה ממש מוסיף לבית",
    rating: 5,
    image: "/עומר_תעשיות_עץ_1.png",
  },
  {
    name: "חני",
    city: "ירושליים",
    description:
      "הפריסה שעומר עשה לנו הייתה מושלמת והיא נראית כמו שהיא מוצעת באתר",
    rating: 5,
    image: "/עומר_תעשיות_עץ_2.png",
  },
  {
    name: "אליאס",
    city: "תל אביב",
    description:
      "הפריסה שעומר עשה לנו הייתה מושלמת והיא נראית כמו שהיא מוצעת באתר",
    rating: 5,
    image: "/עומר_תעשיות_עץ_3.png",
  },
  {
    name: "חני",
    city: "ירושליים",
    description:
      "הפריסה שעומר עשה לנו הייתה מושלמת והיא נראית כמו שהיא מוצעת באתר",
    rating: 5,
    image: "/עומר_תעשיות_עץ_2.png",
  },
  {
    name: "אליאס",
    city: "תל אביב",
    description:
      "הפריסה שעומר עשה לנו הייתה מושלמת והיא נראית כמו שהיא מוצעת באתר",
    rating: 5,
    image: "/עומר_תעשיות_עץ_3.png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-[500px] w-full relative sm:px-20 px-10 py-20 flex flex-col gap-10 overflow-hidden"
    >
      <TypoH2>מה אומרים עלינו</TypoH2>
      <EmblaCarousel>
        {testimonialsContext.map((item, index) => (
          <div key={index} className="embla__slide">
            <div className="relative aspect-square w-[300px]  rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg brightness-75"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Quote />
              <TypoH3>{item.name}</TypoH3>
              <TypoP>{item.description}</TypoP>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </section>
  );
}
