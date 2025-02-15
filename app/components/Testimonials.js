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
      className="main-wrapper-omar min-h-[500px] w-full relative px-4 py-20 flex flex-col gap-10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-8 items-end">
        {/* Right side - Testimonial */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="text-right space-y-4">
            <Quote className="text-2xl mb-4"></Quote>
            <TypoH3 className="mt-4">{testimonialsContext[0].name}</TypoH3>
            <TypoP className="text-gray-600">
              תודה רבה על הכל, אתם עובדים עם כל הלב והנשמה, סופר מקצוענים
              והתוצאה נראית לעין. יצא מטורףף באמת.
            </TypoP>
          </div>
        </div>
        <div className="w-full md:basis-1/2 relative h-[300px] md:h-[400px]">
          <Image
            src="/עומר_תעשיות_עץ_תמונה_שירותים_1.png"
            alt="testimonial"
            fill
            className="w-full h-full object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
