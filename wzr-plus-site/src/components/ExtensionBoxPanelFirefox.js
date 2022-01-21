import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import BrowserIcon from "./BrowserIcon";

const ExtensionBoxPanelFirefox = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  function downloadWzrFirefox() {
    window.open(
      "https://github.com/KajetanWarmbier/wzrPlusFirefoxVersion/raw/main/web-ext-artifacts/wzr_plus-1.2-fx.xpi"
    );
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      className="flex w-[20rem] md:scale-125 rounded-2xl shadow-xl justify-center px-7 bg-black bg-opacity-25 cursor-pointer ease-in-out duration-500 hover:translate-x-5 lg:xl:hover:-translate-y-5 lg:xl:hover:translate-x-0"
      onClick={openModal}
    >
      <div className="flex items-center py-2 md:py-3">
        <h1 className="text-[2rem] font-semibold pr-5 text-white">WZR+ dla</h1>
        <BrowserIcon browser={props.browser} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex text-[2rem] font-bold leading-6 text-gray-900 justify-center"
                >
                  <h1 className="text-blueDark">WZR</h1>
                  <h1 className="text-blueLight mr-2">+</h1>
                  <h1 className="text-gray-800">dla Firefox</h1>
                </Dialog.Title>
                <div className="mt-5">
                  <h1 className="text-center text-[24px] text-gray-700">
                    Czy chcesz pobrać WZR+ dla przeglądarki Firefox?
                  </h1>
                </div>

                <div className="flex justify-evenly mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-medium font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none"
                    onClick={closeModal}
                  >
                    Anuluj
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-medium font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none"
                    onClick={downloadWzrFirefox}
                  >
                    Pobierz
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ExtensionBoxPanelFirefox;
