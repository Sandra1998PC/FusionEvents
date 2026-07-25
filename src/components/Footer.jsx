import {
  // Facebook,
//   Instagram,
  // Twitter,
  // Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Grid */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* About */}

          <div>

            <h2 className="text-3xl font-bold mb-6">

              <span className="text-cyan-400">Fusion</span>

              <span className="text-violet-500">Events</span>

            </h2>

            <p className="text-slate-400 leading-8">
              FusionEvents is a modern event management platform
              that helps people discover, create and manage
              unforgettable events with ease.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "About",
                "Contact",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">

                <IoMail className="text-cyan-400" size={18} />

                support@fusionevents.com

              </div>

              <p>Kochi, Kerala</p>

              <p>+91 98765 43210</p>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              {[
                FaFacebookSquare ,
                RiInstagramFill ,
                FaTwitterSquare ,
                FaLinkedin,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.4)] transition duration-300"
                >

                  <Icon size={20} />

                </a>

              ))}

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-slate-400 mb-6">
              Subscribe to receive updates on upcoming events,
              exclusive offers and announcements.
            </p>

            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-4 pl-5 pr-14 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
              />

              <button className="absolute right-2 top-2 w-22 text-white h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-600 flex items-center justify-center hover:scale-105 transition">

                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-center md:text-left">

              © {new Date().getFullYear()} FusionEvents.
              All Rights Reserved.

            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition"
              >
                Terms
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition"
              >
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;