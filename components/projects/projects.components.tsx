import ProjectComponent from "./project.component";

export default function ProjectsComponent() {
  return (
    <section className="bg-primary" style={{}}>
      <div className="flex flex-col items-center pt-10">
        <div className="flex items-center justify-center text-5xl text-secondary">
          Projects
        </div>
        <hr
          className="bg-secondary mt-4"
          style={{ width: "6rem", height: "0.3rem" }}
        ></hr>

        <div
          className="grid grid-cols-3 grid-rows-3 gap-0 h-screen mt-10"
          style={{ height: "100vh", width: "70vw" }}
        >
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
        </div>
      </div>
    </section>
  );
}
