import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Salle de bain",
    image: "/data/demo1.jpg",
    description: "Rénovation complète d’une salle de bain moderne.",
  },
  {
    id: 2,
    title: "Cuisine",
    image: "/data/demo2.jpg",
    description: "Cuisine contemporaine sur-mesure avec ilot central.",
  },
  {
    id: 3,
    title: "Rangement",
    image: "/data/demo3.jpg",
    description: "Optimisation d’espaces et placards intégrés.",
  },
  {
    id: 4,
    title: "Salon",
    image: "/data/demo1.jpg",
    description: "Transformation d’un salon lumineux.",
  },
  {
    id: 5,
    title: "Chambre",
    image: "/data/demo2.jpg",
    description: "Suite parentale avec dressing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <header className="w-full bg-white dark:bg-gray-900 border-b px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="ABC Renov" className="h-10 w-10 hidden" />
          <span className="text-2xl font-bold text-orange-600">ABC Renov</span>
        </div>
        <nav className="flex gap-4 mt-2 sm:mt-0">
          <Link href="/" className="text-gray-800 dark:text-gray-100 hover:text-orange-600 font-medium">Accueil</Link>
          <Link href="/portfolio" className="text-gray-800 dark:text-gray-100 hover:text-orange-600 font-medium">Portfolio</Link>
          <Link href="/contact" className="text-gray-800 dark:text-gray-100 hover:text-orange-600 font-medium">Contact & Devis</Link>
          <Link href="/admin" className="text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded font-semibold">Se connecter</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="hero text-center py-16 px-4 bg-gradient-to-r from-orange-100 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">Artisan Rénovation</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8">Optimiser votre espace de vie, c'est transformer votre quotidien. Chaque centimètre compte, chaque détail fait la différence. Notre expertise transforme vos contraintes en opportunités d'aménagement innovantes.</p>
        </section>
        <section className="max-w-5xl mx-auto w-full py-12 px-4">
          <h2 className="text-2xl font-bold mb-6">Projets vedettes</h2>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
            <div className="flex gap-6 min-w-[700px]">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md min-w-[220px] max-w-[220px] flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-orange-500 transition">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={220}
                    height={140}
                    className="rounded-t-lg object-cover h-[140px] w-full"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white dark:bg-gray-900 border-t px-6 py-4 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap mt-auto">
        <span>© 2025 ABC Renov. Tous droits réservés.</span>
        <nav className="flex gap-4">
          <Link href="/" className="hover:text-orange-600">Accueil</Link>
          <Link href="/portfolio" className="hover:text-orange-600">Portfolio</Link>
          <Link href="/contact" className="hover:text-orange-600">Contact & Devis</Link>
          <Link href="/admin" className="hover:text-orange-600">Se connecter</Link>
        </nav>
      </footer>
    </div>
  );
}
