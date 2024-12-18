import ColorIcon from "./ui/ColorIcon";
import MeasureMentIcon from "./ui/MeasureMentIcon";
import PenIcon from "./ui/PenIcon";
import WoodTexture from "./ui/WoodTexture";

import TypoH2 from "./ui/TypoH2";

export default function WhyUs() {
  const whyUsContext = [
    {
      icon: <ColorIcon />,
      title: "צבעים מותאמים אישית",
    },
    {
      icon: <MeasureMentIcon />,
      title: "התאמה לכל חלק בבית",
    },
    {
      icon: <PenIcon />,
      title: "תכנון מדויק כל פרויקט",
    },
    { icon: <WoodTexture />, title: "עץ לבקשת הלקוח" },
  ];

  return (
    <section id="whyus" className="px-20 py-10 flex flex-col gap-10">
      <TypoH2>למה שווה לכם לעשות ריהוט איתנו?</TypoH2>
      <div className="flex flex-row gap-10 justify-evenly items-baseline flex-wrap">
        {whyUsContext.map((item, index) => (
          <div
            className="flex flex-col gap-5 items-center text-center"
            style={{ "--delay-time-svg": `${index * 0.2}s` }}
            key={item.title}
          >
            {item.icon}
            <span className="text-2xl font-bold">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
