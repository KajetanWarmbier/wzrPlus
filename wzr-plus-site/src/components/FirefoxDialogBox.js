import React from "react";

const FirefoxDialogBox = () => {
  return (
    <div className="absolute">
      <div className="flex m-auto w-[25rem] h-[6rem] items-center bg-panelColor rounded-2xl">
        <div className="grid grid-rows-2 m-auto">
          <h1 className="align-middle m-2 font-semibold">
            Czy chcesz pobrać WZR+ dla Firefox?
          </h1>
          <div className="grid grid-cols-2">
            <button className="bg-[#cf142b] rounded-2xl font-medium mr-2">
              Anuluj
            </button>
            <button className="bg-[#00FF00] rounded-2xl font-medium">
              Pobierz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirefoxDialogBox;
