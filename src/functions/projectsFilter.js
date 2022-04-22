const projectsFilter = (projects, selectedFilter) => {
  switch (selectedFilter) {
    case "ALL":
      return projects;
    case "NEXT":
      return projects.filter((item) => {
        return item.tech === "NEXT";
      });
    case "REACT":
      return projects.filter((item) => {
        return item.tech === "REACT";
      });
    case "JAVASCRIPT":
      return projects.filter((item) => {
        return item.tech === "JAVASCRIPT";
      });
    default:
      return projects;
  }
};

export default projectsFilter;
