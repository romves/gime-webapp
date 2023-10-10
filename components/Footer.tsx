import React from "react";

const Footer = () => {
  return (
    <footer
      className="sect-container"
      style={{
        backgroundImage: "url(/images/footerbg.svg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-full">
        <div className="flex-1 space-y-6">
          <h4>Join our mailing for update</h4>
          <p className="bodytext-2 text-black/70">
            Receive latest updates from Gime about <br /> new products, special
            offers and events
          </p>
          {/* <input type="email" /> */}
        </div>

        <div className="flex-[.6] space-y-4">
          <h5>GIME</h5>
          <ul className="bodytext-2 text-black/70 space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex-[.6] space-y-4">
          <h5>SOCIAL</h5>
          <ul className="bodytext-2 text-black/70 space-y-2">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>

        <div className="flex-[.6] space-y-4">
          <h5>LOCATION</h5>
          <p className="bodytext-2 text-black/70 space-y-2">
            Aleksandra 3V
            <br /> Malang City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;