import React, { useState, useEffect } from "react";

const BrowserIcon = (props) => {
  const [icon, setIcon] = useState("");

  useEffect(async () => {
    const importedIcon = await import(
      `../assets/Icons/${props.browser}Logo.svg`
    );
    setIcon(importedIcon.default);
  }, []);

  return (
    <div>
      <img alt="browserIcon" src={icon}></img>
    </div>
  );
};

export default BrowserIcon;
