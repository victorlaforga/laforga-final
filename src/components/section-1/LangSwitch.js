import { navigate } from "gatsby";
import React, { useState } from "react";
export default function LangSwitch({ lang, link }) {
  const [langu, setLangu] = useState(false);

  const Handle = () => {
    setLangu((langu) => !langu);
    !langu ? navigate(`/en${link}`) : navigate(`${link}`);
  };

  if (!lang) {
    return (
      <label className="switch">
        <input defaultChecked={langu} type="checkbox" onChange={Handle} />
        <span className={`slider round ${langu ? "slider-active" : ""}`} />
      </label>
    );
  } else {
    return (
      <label className="switch">
        <input defaultChecked={langu} type="checkbox" onChange={Handle} />
        <span className={`slider round slider-active`} />
      </label>
    );
  }
}
