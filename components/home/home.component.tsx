import ParticlesBg from "./particle.component";

export default function HomeComponent() {
  return (
    <section className="h-screen">
      <ParticlesBg />

      <div className="flex flex-col justify-center items-center  h-screen">
        <div className="flex flex-row">
          <div className="text-5xl text-secondary mr-3">Hello, I'm</div>
          <div className="text-accent text-5xl">Raveen</div>
        </div>
        <div className="text-white text-5xl mt-3">
          I'm a full-stack developer
        </div>
        <div className="mb-20"></div>
        <a
          className="group outline outline-2 outline-secondary px-4 py-2 hover:bg-accent hover:outline-accent transition-all duration-500"
          href="#"
        >
          <div className="flex justify-center items-center">
            <div className="text-2xl text-secondary">View works</div>
            <div className="text-2xl text-secondary ml-4 group-hover:rotate-90 transition-all duration-500">
              ---
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
