export const scrollToHome = () => {
  document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToWorks = () => {
  const element = document.getElementById("Works") as HTMLElement;
  scrollToElement(element, 30);
};

export const scrollToProjects = () => {
  const element = document.getElementById("Projects") as HTMLElement;
  scrollToElement(element, 100);
};

export const scrollToExperiments = () => {
  const element = document.getElementById("Experiments") as HTMLElement;
  scrollToElement(element, 300);
};

const scrollToElement = (element: HTMLElement, offset: number) => {
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
