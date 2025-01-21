import React from "react";

import { sosiale_medier } from "../../config";

const Footer = () => {
  return (
    <footer className="bg-[#333030] text-white bottom-0 mt-auto py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Studenter for Palestina Trondheim.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a
            href={sosiale_medier[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#AA5656] py-2 px-4 text-center md:text-left block md:inline-block md:text-base"
          >
            {sosiale_medier[0].name}
          </a>
          <a
            href={sosiale_medier[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#AA5656] py-2 px-4 text-center md:text-left block md:inline-block md:text-base"
          >
            {sosiale_medier[1].name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
