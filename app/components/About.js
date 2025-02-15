import Image from "next/image";
import TypoH2 from "./ui/TypoH2";
import TypoP from "./ui/TypoP";

const features = [
  {
    name: "מצוינות באומנות העץ",
    description:
      "הסדנה שלנו משלבת שנים של ניסיון עם אומנות עץ מיומנת כדי לספק מוצרים שעומדים בסטנדרטים הגבוהים ביותר של איכות ודיוק.",
  },
  {
    name: "חומרים באיכות פרימיום",
    description:
      "אנו משתמשים בעץ מהאיכות הגבוהה ביותר, המבטיח עמידות, אלגנטיות וקיימות בכל פרויקט שאנו מבצעים.",
  },
  {
    name: "פתרונות מותאמים אישית למעצבים",
    description:
      "בשיתוף פעולה עם מעצבים מנוסים, אנו מייצרים פתרונות עץ ייחודיים המותאמים לחזון ולדרישות הלקוח.",
  },
  {
    name: "טכנולוגיה מתקדמת",
    description:
      "באמצעות ציוד חדיש ומתקדם, אנו מציעים חיתוך, עיבוד וגימור מדויקים, המאפשרים להביא לחיים גם את העיצובים המורכבים ביותר.",
  },
  {
    name: "מחויבות לקיימות",
    description:
      "אנו מחויבים לשיטות עבודה ידידותיות לסביבה, תוך עדיפות לשימוש בעץ בר קיימא ותהליכי ייצור ירוקים.",
  },
  {
    name: "מגוון רחב של יישומים",
    description:
      "מייצור רהיטים ואלמנטים לעיצוב פנים ועד לשלטים ודקורציה – מוצרי העץ שלנו מתאימים למגוון צרכים יצירתיים ופונקציונליים.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-foreground " dir="rtl">
      <div className="main-wrapper-omar  grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            עבודות עץ שישארו לזמן
          </h2>
          <p className="mt-4 text-background">
            עומר תעשיות עץ בע&quot;מ הינה חברת תעשיות עץ בע&quot;מ המתמחה בייצור
            ופריסת עץ ופרסומות עץ בכל הגובה והרוחב.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="border-t border-background pt-4"
              >
                <dt className="font-medium text-background">{feature.name}</dt>
                <dd className="mt-2 text-sm text-background">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="/עומר_תעשיות_עץ_3.png"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="/gallery_images/עומר_תעשיות_עץ_גלרייה (2).png"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Side of walnut card tray with card groove and recessed card area."
            src="/עומר_תעשיות_עץ_תמונה_שירותים_4.png"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="/עומר_תעשיות_עץ_2.png"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
}
