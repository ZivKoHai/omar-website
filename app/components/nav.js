import Logo from "./Logo";

export default function Nav() {
  const Links = [
    { name: "שירותים", href: "#services" },
    { name: "עבודות", href: "#works" },
    { name: "עלינו", href: "#about" },
    { name: "לקוחות ", href: "#testimonials" },
    { name: "גלריה", href: "#gallery" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <nav className="h-16 bg-color-1 flex  items-center px-7 my-4 bg-transparent sticky top-0 z-50">
      <Logo className="ml-auto" />

      {/* <!-- Toggle Button for Mobile --> */}
      <input type="checkbox" id="sidebar-active" className="hidden" />
      <label
        htmlFor="sidebar-active"
        className="open-sidebar-button p-5 md:hidden cursor-pointer"
      >
        {/* <!-- Hamburger Icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-text-color h-8 w-8"
          viewBox="0 -960 960 960"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      {/* <!-- Navigation Links --> */}
      <div className="links-container h-full w-full flex flex-row items-center sm:justify-end">
        {/* <!-- Close Button for Mobile --> */}
        <label
          htmlFor="sidebar-active"
          className="close-sidebar-button p-5 md:hidden cursor-pointer"
        >
          {/* <!-- Close Icon --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-text-color h-8 w-8"
            viewBox="0 -960 960 960"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        {/* <!-- Navigation Links --> */}
        {Links.map((link, index) => (
          <a
            key={index}
            className="px-5 flex h-20 items-center text-text-color no-underline hover:bg-accent-color hover:text-color-1"
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
