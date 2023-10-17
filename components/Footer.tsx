import React from "react";
import TextInput from "./ui/TextInput";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="pt-24 pb-12 px-16 space-y-12"
      style={{
        backgroundImage: "url(/images/footerbg.svg)",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4  gap-x-12 gap-y-12 w-full">
        <div className="flex-[.6] lg:flex-1 space-y-6 ">
          <h3 className="h4 font-[500]">Join our mailing for update</h3>
          <p className="bodytext-2 text-black/70">
            Receive latest updates from Gime about <br /> new products, special
            offers and events
          </p>
          <TextInput  label="Email" id="-subscription"/>
        </div>

        <div className="flex md:justify-center flex-[.6]  ">
          <div className="space-y-4">
            <h4 className="h5">GIME</h4>
            <ul className="bodytext-2 text-black/70 space-y-2">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About</Link></li>
              <li><Link href='/product/assistant'>Product</Link></li>
              <li><Link href='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex md:justify-center flex-[.6] ">
          <div className="space-y-4">
            <h4 className="h5">SOCIAL</h4>
            <ul className="bodytext-2 text-black/70 space-y-2">
              <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
              <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="flex-[.6]  md:justify-end flex">
          <div className="space-y-4">
            <h4 className="h5">LOCATION</h4>
            <p className="bodytext-2 text-black/70 space-y-2">
              Aleksandra 3V
              <br /> Malang City
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center justify-center">© {new Date().getFullYear()} Gime. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
