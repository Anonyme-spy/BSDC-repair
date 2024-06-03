import { AboutUs } from "../component/AboutUs.jsx";

export default function About() {
    return (
        <>
            <div className="container mx-auto flex flex-col text-center items-center justify-center">
                <h1 className="text-2xl font-bold text-center mt-10">About BSDC</h1>
                <p className="text-center mt-5">BSDC is a College that offer repairing service</p>
            </div>
          <AboutUs />
        </>
    )
}