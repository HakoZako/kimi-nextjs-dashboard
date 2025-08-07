"use client";
import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/app/portfolio/usePortfolio";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Viewer() {
  const {
    projects,
    selectedProjectIndex,
    mediaIndexInProject,
    setMediaIndexInProject,
  } = usePortfolio();
  const project = projects[selectedProjectIndex];
  const medias = project.medias;
  const media = medias[mediaIndexInProject];

  const [slideshow, setSlideshow] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slideshow) {
      intervalRef.current = setInterval(() => {
        setMediaIndexInProject((prev) => (prev + 1) % medias.length);
      }, 4000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slideshow, medias.length, setMediaIndexInProject]);

  const handlePrev = () => {
    setMediaIndexInProject((prev) => (prev === 0 ? medias.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setMediaIndexInProject((prev) => (prev === medias.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 relative select-none">
      <div className="flex items-center justify-center w-full h-full py-6">
        <button onClick={handlePrev} className="p-3 rounded-full bg-white/80 hover:bg-orange-100 shadow mx-2">
          <ArrowLeftIcon className="h-8 w-8 text-orange-600" />
        </button>
        <div className="flex-1 flex items-center justify-center max-w-3xl max-h-[60vh]">
          {media.type === "video" ? (
            <video
              src={media.url}
              autoPlay
              loop
              muted
              className="rounded-lg w-full h-full object-contain bg-black"
              style={{ maxHeight: 400 }}
            />
          ) : (
            <img
              src={media.url}
              alt={project.title}
              className="rounded-lg w-full h-full object-contain bg-white"
              style={{ maxHeight: 400 }}
            />
          )}
        </div>
        <button onClick={handleNext} className="p-3 rounded-full bg-white/80 hover:bg-orange-100 shadow mx-2">
          <ArrowRightIcon className="h-8 w-8 text-orange-600" />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={() => setSlideshow((p) => !p)}
          className={`px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition`}
        >
          {slideshow ? "Pause" : "Play"} Diaporama
        </button>
        <span className="text-gray-700 dark:text-gray-200 text-lg font-semibold">{project.title}</span>
      </div>
    </div>
  );
}
