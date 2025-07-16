import React from "react";
import LatestProject from "./LatestProject";

const DockyardProjects = () => {
  const project = { title: "Dockyard" };
  return (
    <div>
      <LatestProject project={project} />
    </div>
  );
};

export default DockyardProjects;
