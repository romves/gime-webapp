import React from "react";

const Maps = () => {
  return (
    <div className="sect-container">
      <iframe
        title="company-address"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.9291398929124!2d112.6138438330748!3d-7.954113514222278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882798ee8f48d%3A0x119af7bd320d6d73!2sGedung%20Utama%20Fakultas%20Ilmu%20Komputer!5e0!3m2!1sen!2sid!4v1697158890144!5m2!1sen!2sid"
        loading="lazy"
        className="mx-auto object-cover h-[50vh] w-full rounded-xl"
      ></iframe>
    </div>
  );
};

export default Maps;
