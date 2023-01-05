export const scrollToHome = () => {
  document
    .getElementsByClassName("Home")?.[0]
    .scrollIntoView({ behavior: "smooth" });
};

export const scrollToCaseStudy = () => {
  const element = document.getElementsByClassName("Project")[0] as HTMLElement;
  const offset = 100;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const scrollToExperiments = () => {
  const element = document.getElementsByClassName(
    "experiments"
  )[0] as HTMLElement;
  const offset = 300;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
