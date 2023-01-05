import gsap from "gsap";

export const gsapOpenContactModal = () => {
  gsap.to(".Topbar", { y: -100 });
  gsap.to(".Home", { opacity: 0 });

  gsap.fromTo(".Contact", { display: "none" }, { display: "flex" }).duration(0);
  gsap.context(() => {
    gsap.fromTo(".left", { y: "200%" }, { y: 0 }).delay(0.2);
    gsap.fromTo(".right", { y: "-200%" }, { y: 0 }).delay(0.2);
  }, ".Contact");

  gsap.to(".App", { overflow: "hidden" }).duration(0);
  gsap.to(".Project", { display: "none" }).duration(0);
};

export const gsapCloseContactModal = () => {
  gsap.fromTo(".Contact", { display: "flex" }, { display: "none" });
  gsap.context(() => {
    gsap.fromTo(".left", { y: 0 }, { y: "200%" });
    gsap.fromTo(".right", { y: 0 }, { y: "-200%" });
  }, ".Contact");

  gsap.to(".Topbar", { y: 0 }).delay(0.2);
  gsap.to(".Home", { opacity: 1 }).delay(0.2);
  gsap.to(".Project", { display: "flex" }).duration(0);
};
