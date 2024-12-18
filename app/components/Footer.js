import Logo from "./Logo";
import TypoH3 from "./ui/TypoH3";

export default function Footer() {
  const links = [
    {
      name: "שירותים",
      href: "#services",
    },
    {
      name: "פרוייקטים",
      href: "#works",
    },
    {
      name: "אודות",
      href: "#about",
    },
    {
      name: "צור קשר",
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      name: "פייסבוק",
      href: "https://www.facebook.com/profile.php?id=100090111111111",
    },
    {
      name: "אינסטגרם",
      href: "https://www.instagram.com/profile.php?id=100090111111111",
    },
    {
      name: "טוויטר",
      href: "https://www.twitter.com/profile.php?id=100090111111111",
    },
  ];

  return (
    <footer className="bg-foreground text-background min-h-[300px] px-20 py-10 flex flex-col sm:flex-row gap-10 sm:gap-0 items-start justify-around ">
      <Logo fill="var(--background)" size="150" />
      <div className="flex flex-col gap-10 ">
        <TypoH3>לינקים</TypoH3>
        <ol className="flex flex-col gap-2 ">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-10 ">
        <TypoH3>סושיאל</TypoH3>
        <ol className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ol>
      </div>
    </footer>
  );
}
