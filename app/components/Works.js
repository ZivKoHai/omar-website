import Tab from "./ui/Tab";
import TypoH2 from "./ui/TypoH2";

export default function Works() {
  return (
    <section id="works" className="px-10 my-10 sm:px-20 min-h-[500px]">
      <TypoH2>העבודות שלנו</TypoH2>
      <div>
        <Tab />
      </div>
    </section>
  );
}