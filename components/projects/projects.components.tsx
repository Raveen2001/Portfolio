export default function ProjectComponent() {
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
          <div className="bg-secondary">1</div>
          <div className="bg-accent">2</div>
          <div className="bg-secondary">3</div>
          <div className="bg-accent">4</div>
          <div className="bg-secondary">5</div>
          <div className="bg-accent">6</div>
          <div className="bg-secondary">7</div>
          <div className="bg-accent">8</div>
          <div className="bg-secondary">9</div>
        </div>
      </div>
    </section>
  );
}
