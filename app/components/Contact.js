import Button from "./ui/Button";
import TypoH2 from "./ui/TypoH2";
import TypoP from "./ui/TypoP";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[500px] bg-[url('/עומר_תעשיות_עץ.png')] bg-cover bg-center  relative sm:px-20 px-10 py-20 flex flex-row gap-10 overflow-hidden  justify-start items-center"
    >
      <div className="flex flex-col gap-10 bg-foreground text-background p-10 rounded-lg">
        <TypoH2>צור קשר</TypoH2>
        <TypoP>כל שאלה או דעתכם מועסקת בחום ובהצלחה. נשמח לשמוע ממכם.</TypoP>
        <Button
          id="contact-button"
          href="https://wa.me/972545829617"
          variant="secondary"
        >
          צור קשר
        </Button>
      </div>
    </section>
  );
}
