import ContactIcon from "./contact_icon.component";

export default function FooterComponent() {
  return (
    <footer className="bg-primaryDark" style={{}}>
      <div className="flex flex-col items-center justify-center pt-5 px-2 pb-2">
        <div className="flex justify-center items-center">
          <ContactIcon />
          <ContactIcon />
          <ContactIcon />
        </div>
        <div className="text-secondary text-lg">
          Built by <span className="text-accent">Raveen</span>
        </div>
        <div className="text-secondary text-sm">2022</div>
        <div className="flex justify-end w-full">
          <div className="text-secondary text-xs">
            Design inspired from{"  "}
            <a
              className="text-accent"
              href="www.findMatthew.com"
              target={"_blank"}
            >
              findMattthew.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
