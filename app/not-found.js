import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-[80vh] place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-foreground">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
            אין פה עצים
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-foreground sm:text-xl/8">
            לא יכלנו למצוא את העמוד שאתה מחפש.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background shadow-xs hover:bg-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              חזרה לעמוד הבית
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
