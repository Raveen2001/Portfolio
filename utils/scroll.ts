export const scrollToHome = () => {
  document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToHomeWithoutAnimation = () => {
  document.getElementById("Home")?.scrollIntoView();
};

export const scrollToWorks = () => {
  const element = document.getElementById("Works") as HTMLElement;
  element.scrollIntoView({ behavior: "smooth" });
};

export const scrollToProjects = () => {
  const element = document.getElementById("Projects") as HTMLElement;
  element.scrollIntoView({ behavior: "smooth" });
};

export const scrollToExperiments = () => {
  const element = document.getElementById("Experiments") as HTMLElement;
  element.scrollIntoView({ behavior: "smooth" });
};

//! This is not working since the overflow is on the App component
//! for this to work the overflow should be on the html
// const scrollToElement = (element: HTMLElement, offset: number) => {
//   const bodyRect = document.body.getBoundingClientRect().top;
//   const elementRect = element.getBoundingClientRect().top;
//   const elementPosition = elementRect - bodyRect;
//   const offsetPosition = elementPosition - offset;

//   console.log(bodyRect, elementRect, elementPosition, offsetPosition);
//   window.scrollTo({
//     top: offsetPosition,
//     behavior: "smooth",
//   });
// };
