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
      "עומר עיצב ובנה לנו ארון מעוכל מיוחד במינו לסלון. העבודה שלו הייתה מדויקת ומקצועית, והתוצאה פשוט מדהימה. הארון משתלב בצורה מושלמת בחלל ומוסיף המון אופי לבית. ממליצה בחום!",
    rating: 5,
    image: "/gallery_images/עומר_תעשיות_עץ_גלרייה (20).png",
  },
  {
    name: "דוד כהן",
    city: "רמת גן",
    description:
      "עומר עיצב וביצע עבורנו מטבח מודרני מדהים. תשומת הלב לפרטים והמקצועיות שלו היו יוצאות דופן. המטבח לא רק יפה, אלא גם פונקציונלי בדיוק כפי שרצינו.",
    rating: 5,
    image: "/gallery_images/עומר_תעשיות_עץ_גלרייה (3).png",
  },
  {
    name: "רחל לוי",
    city: "הרצליה",
    description:
      "הזמנתי ארונות קיר לחדר השינה, והתוצאה עלתה על כל ציפיותיי. עומר הקשיב לכל הדרישות שלנו והציע פתרונות חכמים לניצול המקום. העבודה הייתה מקצועית והמחיר הוגן.",
    rating: 5,
    image: "/עומר_תעשיות_עץ_תמונה_שירותים_4.png",
  },
  {
    name: "יוסי אברהם",
    city: "פתח תקווה",
    description:
      "עומר ביצע עבורנו פרויקט של ספריית קיר בסלון. היצירתיות והמקצועיות שלו ניכרות בכל פרט. הוא הצליח לשלב בין הפונקציונליות והאסתטיקה בצורה מושלמת.",
    rating: 5,
    image: "/gallery_images/עומר_תעשיות_עץ_גלרייה (2).png",
  },
  {
    name: "שרה גולדשטיין",
    city: "תל אביב",
    description:
      "שדרגנו את חדר העבודה עם רהיטים מותאמים אישית מעומר. התהליך היה מקצועי מתחילתו ועד סופו, והתוצאה פשוט מדהימה. ממליצה בחום!",
    rating: 5,
    image: "/gallery_images/עומר_תעשיות_עץ_גלרייה (43).png",
  },
  {
    name: "משה דיין",
    city: "רעננה",
    description:
      "עומר תכנן ובנה לנו יחידת טלוויזיה מיוחדת במינה. הוא הבין בדיוק את הסגנון שרצינו והביא רעיונות משלו שהשתלבו נהדר. מקצוען אמיתי עם לב של אמן.",
    rating: 5,
    image: "/gallery_images/עומר_תעשיות_עץ_גלרייה (44).png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="main-wrapper-omar min-h-[500px] w-full relative sm:px-20 px-10 py-20 flex flex-col gap-10 overflow-hidden"
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
