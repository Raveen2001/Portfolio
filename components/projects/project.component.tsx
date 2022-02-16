export default function ProjectComponent() {
  return (
    <div
      className="group bg-green-900 flex flex-col w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="bg-secondary flex flex-col justify-center items-center -translate-y-36 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 transition-all duration-500"
        style={{ flex: 3 }}
      >
        <div className="text-2xl">Arima Labs</div>
        <span className="text-sm text-accent">ReactJs/Django</span>
      </div>
      <div
        className="bg-secondary flex justify-center translate-y-36 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 transition-all duration-500"
        style={{ flex: 2 }}
      >
        <a
          className="h-min group outline outline-2 outline-primary m-0 px-4 py-2 hover:bg-accent hover:outline-accent transition-all duration-500"
          href="#"
        >
          <div className="text-1xl text-primary ">View works</div>
        </a>
      </div>
    </div>
  );
}
