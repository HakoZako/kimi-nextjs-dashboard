"use client";
import { usePortfolio } from "@/app/portfolio/usePortfolio";

export default function Thumbnails() {
  const {
    projects,
    selectedProjectIndex,
    setSelectedProjectIndex,
    setMediaIndexInProject,
  } = usePortfolio();

  return (
    <div className="h-24 shrink-0 bg-white dark:bg-gray-900 sticky bottom-0 flex items-center shadow-inner z-10 overflow-x-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200 px-4">
      <div className="flex gap-4 min-w-max">
        {projects.map((project, idx) => {
          const isActive = idx === selectedProjectIndex;
          const thumbUrl = project.medias[0]?.url;
          return (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProjectIndex(idx);
                setMediaIndexInProject(0);
              }}
              className={`relative rounded overflow-hidden border-2 ${isActive ? "border-orange-500 opacity-100" : "border-transparent opacity-60"} transition-all focus:outline-none`}
              style={{ width: 90, height: 60 }}
            >
              {thumbUrl ? (
                thumbUrl.endsWith(".mp4") ? (
                  <video src={thumbUrl} className="object-cover w-full h-full" autoPlay loop muted />
                ) : (
                  <img src={thumbUrl} alt={project.title} className="object-cover w-full h-full" />
                )
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
              <span className="absolute bottom-0 left-0 right-0 text-xs bg-black/60 text-white px-1 truncate">{project.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
