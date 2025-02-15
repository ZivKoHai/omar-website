import Image from "next/image";
import TypoH2 from "./ui/TypoH2";

export default function Services() {
  const services = [
    {
      name: "עיצוב ארונות מטבח",
      src: "עומר_תעשיות_עץ_תמונה_שירותים_1.png",
      alt: "עיצוב ארונות מטבח",
    },
    {
      name: "חדרי אמבטיה",
      src: "עומר_תעשיות_עץ_תמונה_שירותים_2.png",
      alt: "חדרי אמבטיה",
    },
    {
      name: "ריהוט לחדרים ולמשרדים",
      src: "עומר_תעשיות_עץ_תמונה_שירותים_3.png",
      alt: "ריהוט לחדרים ולמשרדים",
    },
    {
      name: "חדרי שינה",
      src: "עומר_תעשיות_עץ_תמונה_שירותים_4.png",
      alt: "חדרי שינה",
    },
  ];

  return (
    <section
      id="services"
      className="main-wrapper-omar px-4 my-10  min-h-[500px]"
    >
      <TypoH2>שירותים</TypoH2>
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-4 gap-10 mt-10">
        {services.map((service) => (
          <div
            className="rounded-lg min-h-[400px] relative hover:scale-105 transition-all duration-300"
            key={service.name}
          >
            <Image
              src={`/${service.src}`}
              alt={service.alt}
              fill
              className="object-cover rounded-lg brightness-50"
            />
            <h3 className="absolute bottom-5 right-5 text-white text-2xl font-bold">
              {service.name.split(" ").map((word, index) => (
                <span
                  key={word}
                  className="service-word"
                  style={{ "--delay-time": `${index * 0.1}s` }}
                >
                  {word}{" "}
                </span>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
