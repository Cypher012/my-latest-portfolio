"use client";

const sections = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

export default function NavDots() {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map((id) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label={`Navigate to ${id} section`}
          className="w-2 h-2 rounded-full bg-slate-300 hover:bg-blue-500 hover:scale-150 transition-all duration-300 cursor-pointer"
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        />
      ))}
    </nav>
  );
}
