export default function Footer() {
  return (
    <footer className="w-full bg-white border-t px-6 py-4 text-sm text-gray-500 flex items-center justify-between gap-4 flex-wrap">
      <span>© 2025 Kimi – Back office</span>
      <div className="flex gap-2">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
        >
          Voir le site
        </a>
        <a
          href="/portfolio"
          className="inline-flex items-center px-3 py-1.5 rounded bg-gray-200 text-gray-800 font-medium hover:bg-orange-100 hover:text-orange-700 transition"
        >
          Galerie d’images
        </a>
        <a
          href="/themes"
          className="inline-flex items-center px-3 py-1.5 rounded bg-gray-200 text-gray-800 font-medium hover:bg-orange-100 hover:text-orange-700 transition"
        >
          Thèmes
        </a>
      </div>
      <span className="hidden sm:inline">Propulsé par Next.js, Tailwind, HeadlessUI</span>
    </footer>
  );
}
