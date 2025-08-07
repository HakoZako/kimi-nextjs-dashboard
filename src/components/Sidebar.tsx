"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HomeIcon, Cog6ToothIcon, UserGroupIcon, RectangleStackIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Thèmes", href: "/themes", icon: Cog6ToothIcon },
  { name: "Portfolio", href: "/portfolio", icon: RectangleStackIcon },
  { name: "Clients", href: "/clients", icon: UserGroupIcon },
  { name: "Prestations", href: "/prestations", icon: DocumentTextIcon },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean, setSidebarOpen: (open: boolean) => void }) {
  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white border-r">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Fermer la barre latérale</span>
                    <XMarkIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-col h-0 flex-1">
                  <div className="flex flex-shrink-0 items-center px-4 py-6">
                    <span className="font-bold text-xl text-orange-600">Kimi Admin</span>
                  </div>
                  <nav className="mt-5 flex-1 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                        <item.icon className="mr-4 h-6 w-6 text-orange-500 group-hover:text-orange-700" aria-hidden="true" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true" />
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 px-6 font-bold text-xl text-orange-600">Kimi Admin</div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                <item.icon className="mr-4 h-6 w-6 text-orange-500 group-hover:text-orange-700" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
