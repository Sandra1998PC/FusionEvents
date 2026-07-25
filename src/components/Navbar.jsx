import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="cursor-pointer">
                        <h1 className="text-3xl font-bold tracking-wide">
                            <span className="text-cyan-400 drop-shadow-[0_0_12px_#00C2FF]">
                                Fusion
                            </span>
                            <span className="text-violet-500 drop-shadow-[0_0_12px_#7C3AED]">
                                Events
                            </span>
                        </h1>
                    </div>
  
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10 text-slate-200 font-medium">
                        {[
                            "Home",
                            "Events",
                            "Categories",
                            "About",
                            "Contact",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="relative transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] 
                                    after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-6 py-2.5 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition duration-300 hover:shadow-[0_0_20px_#00C2FF]"
                        onClick={()=> navigate('/login')}>
                            Login
                        </button>

                        <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(0,194,255,0.5)]"
                        onClick={() => navigate('/register')}>
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-cyan-400"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-slate-950/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-5 space-y-5">
                    {[
                        "Home",
                        "Events",
                        "Categories",
                        "About",
                        "Contact",
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block text-slate-300 hover:text-cyan-400 transition"
                        >
                            {item}
                        </a>
                    ))}

                    <div className="flex flex-col gap-3 pt-3">
                        <button className="py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
                        onClick={()=> navigate('/login')}>
                            Login
                        </button>

                        <button className="py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white" onClick={() => navigate('/register')}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;