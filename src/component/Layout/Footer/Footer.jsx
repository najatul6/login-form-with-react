import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w[1440px] ">
            <footer className="flex mx-auto flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                   &copy; 2023 Najatul islam
                </p>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            to="/"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                        >
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link
                            to="/form"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                        >
                            LogIn/SignIn
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;