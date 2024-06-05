import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-lg3 to-lg4 pt-2 pb-8 w-full">
      <div className="mx-auto my-4 flex justify-center gap-10">
        <a href="mailto:arfadsagency@gmail.com">
           
          <span className="text-xs flex opacity-90 gap-1 items-center justify-start text-slate-100">
          Contact us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>
            arfadsagency@gmail.com
          </span>
        </a>
        {/* <a href="https://www.linkedin.com/in/aswin-raaj">
          <span className="text-xs opacity-90 text-slate-100">Support</span>
        </a> */}
      </div>
      <div>
        <p className="text-center text-slate-100 opacity-90 text-xs">
          © 2024 Copywrite. All rights reserved by ARFADS
        </p>
      </div>
    </div>
  );
};

export default Footer;
