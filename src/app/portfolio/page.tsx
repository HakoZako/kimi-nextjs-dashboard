import Viewer from "@/components/portfolio/Viewer";
import Thumbnails from "@/components/portfolio/Thumbnails";

export default function PortfolioPage() {
  // header = 4.5rem (72px), footer = 3rem (48px), donc 100svh-120px
  return (
    <div className="flex flex-col overflow-hidden h-[calc(100svh-4.5rem-3rem)] min-h-[320px]">
      <div className="flex-1 flex flex-col max-h-[calc(100svh-4.5rem-3rem)]">
        <Viewer />
        <Thumbnails />
      </div>
    </div>
  );
}
