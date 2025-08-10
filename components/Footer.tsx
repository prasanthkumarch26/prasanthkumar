import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-[#8892b0] flex flex-col justify-center items-center text-center pt-[100px] pb-20">
      <p>Built and Designed by Prasanth Kumar</p>
      <div className="flex flex-row items-center gap-2">
        <p>All rights Reserved.</p>
        <div className="flex flex-row items-center gap-1">
          <Copyright size={15} />
          <p>2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
