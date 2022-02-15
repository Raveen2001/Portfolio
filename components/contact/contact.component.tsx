export default function ContactComponent() {
  return (
    <section className="bg-primary" style={{ height: "70vh" }}>
      <div className="flex flex-col items-center pt-10">
        <div className="flex items-center justify-center text-5xl text-secondary">
          Contact
        </div>
        <hr
          className="bg-secondary mt-4"
          style={{ width: "6rem", height: "0.3rem" }}
        ></hr>

        <form className="mt-10">
          <input
            className="outline-none px-2 py-5 bg-primaryDark text-secondary"
            type={"text"}
            placeholder={"Name"}
            name="name"
            style={{ width: "40vw", height: "5vh" }}
          />
          <br />
          <input
            className="outline-none px-2 py-5 mt-2 bg-primaryDark text-secondary"
            type={"email"}
            placeholder={"Enter e-mail"}
            name="name"
            style={{ width: "40vw", height: "5vh" }}
          />
          <br />
          <textarea
            className="outline-none px-2 py-2 mt-2 bg-primaryDark text-secondary"
            style={{ width: "40vw" }}
            placeholder={"Enter message"}
            rows={5}
          ></textarea>
          <br />
          <div className="flex justify-end">
            <input
              type={"submit"}
              className="mt-2 outline outline-2 outline-secondary text-secondary px-4 py-2 hover:bg-accent hover:outline-accent transition-all duration-500"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
