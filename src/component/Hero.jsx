export default function Hero() {
  return (<div className="hero rounded m-4 place-self-center">
      <header className="container flex justify-between text-white pb-3 pt-3">
        <div className=" w-1/2 pl-5">
          <h1 className="text-2xl font-bold text-center mt-10 ">
            Welcome to BSDC
          </h1>
          <p className="text-center mt-7">
            We are a College that offer repairing service
          </p>
        </div>
        <div className=" flex pr-5">
          <img
            src={"/placeholder.png"}
            alt={"placeholder"}
            className="img-1 w-2/3 border-b-amber-950 border-2 border-black rounded-lg"
          />
          <img
            src={"/placeholder.png"}
            alt={"placeholder"}
            className="img-2 w-2/3 border-b-amber-950 border-2 border-black rounded-lg "
          />
        </div>
      </header>
    </div>);
}
