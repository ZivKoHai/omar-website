export default function Button({
  children,
  href,
  className,
  variant = "primary",
  id,
}) {
  const baseStyles =
    "px-4 py-2 rounded-md hover:translate-y-1 transition-all duration-300 w-full text-center";
  const variantStyles = {
    primary: "bg-foreground text-background",
    secondary: "bg-background text-foreground border border-foreground",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      id={id}
    >
      {children}
    </a>
  );
}
