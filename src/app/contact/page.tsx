import Link from "next/link";

export default function Contact() {
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
      <main className="flex-1 max-w-2xl mx-auto w-full py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Contact & Devis</h1>
        <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet *</label>
              <input type="text" name="nom" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Téléphone *</label>
              <input type="tel" name="telephone" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Adresse (perso)</label>
              <input type="text" name="adresse_perso" className="w-full border rounded px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Adresse du chantier *</label>
              <input type="text" name="adresse_chantier" required className="w-full border rounded px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Type de projet</label>
              <select name="type_projet" className="w-full border rounded px-3 py-2">
                <option value="salle de bain">Salle de bain</option>
                <option value="maison">Maison</option>
                <option value="appartement">Appartement</option>
                <option value="studio">Studio</option>
                <option value="rangement">Rangement</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Votre message</label>
              <textarea name="message" rows={4} className="w-full border rounded px-3 py-2" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Pièces jointes</label>
            <input type="file" name="attachments" multiple className="w-full border rounded px-3 py-2" />
            <p className="text-xs text-gray-500 mt-1">Vous pouvez joindre plusieurs fichiers (plans, photos, documents...)</p>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition">Envoyer la demande</button>
        </form>
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
