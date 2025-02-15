import ColorIcon from "./ui/ColorIcon";
import MeasureMentIcon from "./ui/MeasureMentIcon";
import PenIcon from "./ui/PenIcon";
import WoodTexture from "./ui/WoodTexture";

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

export default function WhyUs() {
  const whyUsContext = [
    {
      icon: <ColorIcon color="var(--foreground)" />,
      title: "צבעים מותאמים אישית",
      description:
        "אנחנו מציעים מגוון רחב של צבעים וגימורים בהתאמה אישית, כך שכל פרויקט יתאים בדיוק לטעמכם ולסגנון העיצובי שלכם.",
    },
    {
      icon: <MeasureMentIcon color="var(--foreground)" />,
      title: "התאמה לכל חלק בבית",
      description:
        "כל רהיט ופריט עיצובי מותאם אישית למבנה החלל ולצרכים שלכם, על מנת ליצור שילוב מושלם עם סביבת הבית.",
    },
    {
      icon: <PenIcon color="var(--foreground)" />,
      title: "תכנון מדויק לכל פרויקט",
      description:
        "אנו מקפידים על תכנון יסודי ומדויק הכולל מידות, חומרים וגימורים, כדי להבטיח שהתוצאה תהיה מושלמת ואיכותית.",
    },
    {
      icon: <WoodTexture color="var(--foreground)" />,
      title: "עץ לבקשת הלקוח",
      description:
        "אנו משתמשים בחומרי גלם איכותיים ומספקים פתרונות עץ בהתאמה אישית לכל פרויקט, לפי בחירת הלקוח.",
    },
    {
      icon: <h4 className="text-6xl font-bold text-foreground">40</h4>,
      title: "עד 40 ימי עבודה לכל פרויקט",
      description:
        "אנו מספקים פתרונות מהירים ואיכותיים, כך שכל פרויקט יושלם בזמן ובצורה מושלמת.",
    },
  ];

  const videosSources = [
    "/videos/omar-video-1.webm",
    "/videos/omar-video-2.webm",
    "/videos/omar-video-3.webm",
    "/videos/omar-video-4.webm",
  ];

  return (
    <div className="bg-background ">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="h-fit sm:h-[300vh]">
          <div className="sticky top-[96px]">
            <dl className="mt-16 grid grid-cols-1 gap-x-6 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
              {whyUsContext.map((whyusItem) => (
                <div
                  key={whyusItem.title}
                  className="border-t border-foreground pt-4 min-h-fit py-5 flex flex-row gap-5"
                >
                  <div className="size-16 flex items-center justify-center">
                    {whyusItem.icon}
                  </div>
                  <div>
                    <dd className="mt-2 text-xl font-medium text-foreground">
                      {whyusItem.title}
                    </dd>
                    <dd className="mt-2 text-sm font-medium text-foreground">
                      {whyusItem.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-10 ">
          {videosSources.map((videoSource, index) => (
            <video
              key={index}
              src={videoSource}
              autoPlay
              muted
              loop
              preload="auto"
              poster="/video-poster.png"
              className="w-full sm:w-2/3 rounded-lg aspect-[9/16]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
