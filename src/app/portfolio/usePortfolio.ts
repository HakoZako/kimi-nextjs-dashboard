import { useState } from "react";
import portfolioData from "@/public/data/portfolio.json";

export function usePortfolio() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [mediaIndexInProject, setMediaIndexInProject] = useState(0);
  const projects = portfolioData;

  return {
    projects,
    selectedProjectIndex,
    setSelectedProjectIndex,
    mediaIndexInProject,
    setMediaIndexInProject,
  };
}
