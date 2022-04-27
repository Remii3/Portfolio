const projectsFilter = (projects, selectedCategory) => {
  switch (selectedCategory) {
    case 0:
      return projects;
    case 1:
      return projects.filter((item) => {
        return item.tech === "NEXT";
      });
    case 2:
      return projects.filter((item) => {
        return item.tech === "REACT";
      });
    case 3:
      return projects.filter((item) => {
        return item.tech === "JAVASCRIPT";
      });
    default:
      return projects;
  }
};

export default projectsFilter;
