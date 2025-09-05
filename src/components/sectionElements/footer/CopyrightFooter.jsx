import React from "react";
import content from "../../../content/content";

function CopyrightFooter() {
  return (
    <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
      <p className="w-full opacity-75">{content.texts.footer.copyrightLine}</p>
    </div>
  );
}

export default CopyrightFooter;
