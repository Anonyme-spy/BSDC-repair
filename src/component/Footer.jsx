import {useState} from "react";

export function FooterDrop() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="dropdown flex-row bg-gray-800 text-white text-center mt-5 p-5 bottom-0" id="footer-2">
            <div className="flex justify-between flex-row items-center w-11/12">
                <h1 className="font-normal text-2xl text-white">Contact info</h1>
                <button onClick={ () => {
                        setIsDropdownOpen(!isDropdownOpen)
                }}  type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="footer-2" aria-expanded="false">
                    <span className="sr-only">Open footer menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <footer className={`dropdown-content ${isDropdownOpen ? 'open' : ''} bg-gray-800 text-white text-center bottom-0 md:block`} >
                <div className="container mx-auto">
                    <h3 className="text-lg font-semibold mt-5 text-center">Contact Details</h3>
                    <p className={"text-center text-white mb-5"}>Burton South DerbyShire College <br/> Tel : 01283 494400</p>
                </div>
                <div className="container mx-auto">
                    <h3 className="text-lg font-semibold mt-5 text-center">Town Center Campus</h3>
                    <p className={"text-center mb-5"}>Burton Town Centre Campus, Lichfield Street, Burton on Trent,
                        Staffordshire
                        DE14 3RL</p>
                </div>
                <div className="container mx-auto">
                    <h3 className="text-lg font-semibold mt-5 text-center">Stephen Burke Construction Academy</h3>
                    <p className="text-center mb-5">Construction Academy, 21 Tetron Point, William Nadin Way,
                        Swadlincote,
                        Derbyshire DE11 OBB</p>
                </div>
            </footer>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center mt-5 p-5 bottom-0 " id="footer-1">
            <div className="container mx-auto">
                <h3 className="text-lg font-semibold mt-5 text-center">Contact Details</h3>
                <p className={"text-center mb-5"}>Burton South DerbyShire College <br/> Tel : 01283 494400</p>
            </div>
            <div className="container mx-auto">
                <h3 className="text-lg font-semibold mt-5 text-center">Town Center Campus</h3>
                <p className={"text-center mb-5"}>Burton Town Centre Campus, Lichfield Street, Burton on Trent, Staffordshire
                    DE14 3RL</p>
            </div>
            <div className="container mx-auto">
                <h3 className="text-lg font-semibold mt-5 text-center">Stephen Burke Construction Academy</h3>
                <p className="text-center mb-5">Construction Academy, 21 Tetron Point, William Nadin Way, Swadlincote,
                    Derbyshire DE11 OBB</p>
            </div>
        </footer>
    )
}