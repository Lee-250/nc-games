import React, { useState } from "react";

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };
  return (
    <div>
      <button onClick={toggleIsOpen}>{isOpen ? "Close" : "Open"}</button>
      {isOpen ? children : null}
    </div>
  );
};

export default Expandable;
