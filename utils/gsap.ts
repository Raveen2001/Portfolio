import gsap from "gsap";
import { scrollToHomeWithoutAnimation } from "./scroll";

export const openModalFor = (id: string) => {
  gsap.to("#body", { overflow: "hidden" });
  gsap.to("#Topbar", { y: "-100%" });

  gsap.fromTo(`#${id}`, { display: "none" }, { display: "flex" }).duration(0);
  gsap.context(() => {
    gsap.fromTo("#left", { y: "200%" }, { y: 0 }).delay(0.2);
    gsap.fromTo("#right", { y: "-200%" }, { y: 0 }).delay(0.2);
    gsap.fromTo("#main", { x: "-200%" }, { x: "0%" }).delay(0.2);
  }, `#${id}`);

  // gsap.to(".App", { overflow: "hidden" }).duration(0);
  gsap.to("#Home", { opacity: 0 });
  gsap.to("#Works", { opacity: 0 });
  gsap.to("#Projects", { opacity: 0 });
  gsap.to("#Footer", { opacity: 0 });
};

export const closeModalFor = (id: string) => {
  gsap.fromTo(`#${id}`, { display: "flex" }, { display: "none" });
  gsap.context(() => {
    gsap.fromTo("#left", { y: 0 }, { y: "200%" });
    gsap.fromTo("#right", { y: 0 }, { y: "-200%" });
    gsap.fromTo("#main", { x: "0%" }, { x: "-200%" });
  }, `#${id}`);

  gsap.to("#Topbar", { y: 0 }).delay(0.2);
  gsap.to("#Home", { opacity: 1 }).delay(0.2);
  gsap.to("#Works", { opacity: 1 }).delay(0.2);

  gsap.to("#Projects", { opacity: 1 }).delay(0.2);
  gsap.to("#Footer", { opacity: 1 }).delay(0.2);
};

export const openSidebar = () => {
  scrollToHomeWithoutAnimation();
  gsap.to("#Topbar", { y: "-100%" });
  gsap.fromTo("#Sidebar", { translateX: "-100%" }, { translateX: "0%" });

  gsap.context(() => {
    gsap
      .fromTo("#main", { translateX: "-100%" }, { translateX: "0%" })
      .delay(0.2);

    gsap.fromTo("#container", { opacity: 0 }, { opacity: 1 }).delay(1);
  }, "#Sidebar");

  gsap.to("#Home", { opacity: 0 });
  gsap.to("#Works", { opacity: 0 });
  gsap.to("#Projects", { opacity: 0 });
  gsap.to("#Footer", { opacity: 0 });
  gsap.to("html", { overflowY: "hidden" });
};

export const closeSidebar = () => {
  gsap.to("html", { overflowY: "visible" }).duration(0);
  gsap
    .fromTo("#Sidebar", { translateX: "0%" }, { translateX: "-100%" })
    .delay(0.2);

  gsap.context(() => {
    gsap.fromTo("#main", { translateX: "0%" }, { translateX: "-100%" });

    gsap.fromTo("#container", { opacity: 0 }, { opacity: 1 });
  }, "#Sidebar");

  gsap.to("#Topbar", { y: 0 });
  gsap.to("#Home", { opacity: 1 });
  gsap.to("#Works", { opacity: 1 });
  gsap.to("#Projects", { opacity: 1 });
  gsap.to("#Footer", { opacity: 1 });
};
