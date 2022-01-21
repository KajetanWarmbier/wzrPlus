import React from "react";
import BrowserIcon from "./BrowserIcon";

const ExtensionBoxPanel = (props) => {
  const clickHandler = () => {
    window.open(props.link, "_self");
  };

  return (
    <div
      className="flex w-[20rem] md:scale-125 rounded-2xl shadow-xl justify-center px-7 bg-black bg-opacity-25 cursor-pointer ease-in-out duration-500 hover:translate-x-5 lg:xl:hover:-translate-y-5 lg:xl:hover:translate-x-0"
      onClick={clickHandler}
    >
      <div className="flex items-center py-2 md:py-3">
        <h1 className="text-[2rem] font-semibold pr-5 text-white">WZR+ dla</h1>
        <BrowserIcon browser={props.browser} />
      </div>
    </div>
  );
};

export default ExtensionBoxPanel;
