import Viewer from "@/components/portfolio/Viewer";
import Thumbnails from "@/components/portfolio/Thumbnails";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px-56px)]"> {/* header/footer heights à ajuster */}
      <Viewer />
      <Thumbnails />
    </div>
  );
}
