import ExtensionBoxPanel from "./ExtensionBoxPanel";
import ExtensionBoxPanelFirefox from "./ExtensionBoxPanelFirefox";

const PanelsBox = () => {
  const pagesInfo = [
    {
      browser: "chrome",
      link: "https://chrome.google.com/webstore/detail/wzr-plus/mjnjfjfmceobbbobnokiccoefideicfc?authuser=1&gclid=Cj0KCQiA2ZCOBhDiARIsAMRfv9KucLx5Ex-jh2-5yXK-j0jWciqxxRaksdSutD_ATrN4keUeu27LcK8aAqHoEALw_wcB",
    },
    {
      browser: "firefox",
    },
    {
      browser: "edge",
      link: "https://microsoftedge.microsoft.com/addons/detail/wzr-plus/mbdbjbbkljkcpmfnijebdipmdbgiibgi",
    },
  ];

  return (
    <div className="flex">
      <div className="m-auto mt-[1rem] mb-[1rem] 2xl:mt-[3rem]">
        <div className="grid  gap-10 grid-cols-1 grid-rows-3 md:gap-14 lg:grid-cols3 lg-grid-rows-1 lg:gap-20 xl:grid-cols-3 xl:grid-rows-1 xl:gap-36 2xl:grid-cols-3 2xl-grid-rows1 2xl:gap-40">
          <ExtensionBoxPanel
            browser={pagesInfo[0].browser}
            link={pagesInfo[0].link}
          />
          <ExtensionBoxPanelFirefox browser={pagesInfo[1].browser} />
          <ExtensionBoxPanel
            browser={pagesInfo[2].browser}
            link={pagesInfo[2].link}
          />
        </div>
      </div>
    </div>
  );
};

export default PanelsBox;
