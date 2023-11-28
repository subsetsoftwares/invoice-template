import React from "react";
import "./PrintButton.css";

interface PrintButtonProps {}

export const PrintButton: React.FC<PrintButtonProps> = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-button-container">
      <button onClick={handlePrint}>Print Page</button>
    </div>
  );
};
