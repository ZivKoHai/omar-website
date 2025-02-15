import Image from "next/image";

const processSteps = [
  {
    step: "ביקור בבית הלקוח",
    description:
      "אנחנו מגיעים לביתכם כדי להכיר את החלל, להבין את הצרכים שלכם ולבחון אפשרויות עיצוביות בהתאם לסגנון ולמבנה.",
  },
  {
    step: "לקיחת מידות מדויקות",
    description:
      "מודדים בקפדנות כל פינה רלוונטית כדי לוודא שהתכנון יהיה מדויק ויתאים בצורה מושלמת לחלל.",
  },
  {
    step: "מחקר ורעיונות עיצוב",
    description:
      "מתחילים בחיפוש והשראה - בוחנים סגנונות, חומרים ושילובים אפשריים כדי להתאים לכם את הפתרון האידיאלי.",
  },
  {
    step: "הכנת תוכניות מפורטות",
    description:
      "מתרגמים את הרעיונות לתוכניות מסודרות הכוללות מידות, חומרים וסקיצות תלת-ממדיות להמחשה ברורה.",
  },
  {
    step: "יציאה לדרך",
    description:
      "לאחר אישור התוכניות, מתחילים בייצור ובביצוע תוך שמירה על דיוק, איכות ועמידה בזמנים.",
  },
];

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

export default function Process() {
  return (
    <section id="about" className="bg-foreground " dir="rtl">
      <div className="main-wrapper-omar  grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            כך אנחנו הופכים את החלום שלכם למציאות
          </h2>
          <p className="mt-4 text-background">
            בעומר תעשיות עץ בע״מ, אנחנו מלווים אתכם בכל שלב בדרך – מביקור הבית
            הראשוני ועד גמר הביצוע. יחד נחקור רעיונות, נתכנן בקפידה ונקפיד על
            רמת גימור גבוהה. המטרה שלנו היא להפוך את החזון שלכם למציאות מעוצבת
            ואיכותית, שתישאר איתכם לאורך שנים.{" "}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {processSteps.map((step, index) => (
              <div key={step.step}>
                <div className="flex flex-row mb-2 text-background">
                  <div className="ml-6">0{index + 1}</div>
                  <div className="font-medium text-xl text-background">
                    {step.step}
                  </div>
                </div>
                <div className="border-t border-background pt-4">
                  <dd className="mt-2 text-sm text-background">
                    {step.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
