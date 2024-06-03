import { Link } from "react-router-dom";

export default function ContentService() {
  return (
    <div className="container text-black text-center sm:p-5">
      <h1 className="text-4xl font-bold mt-10">A free service for Burton
        and South Derbyshire
        College students</h1>
      <p className="text-xl mt-5" id={'se'}>We offer a free service to all students, We fix computers, laptops, gadgets, consoles,
watches, anything tech!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"><Link to={'/services'}>Services</Link></button>
    </div>
  );
}