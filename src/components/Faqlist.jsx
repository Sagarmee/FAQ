import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Faqlist = ({ question, answer, index }) => {
  const [toggle, setToggle] = useState(false);

  const handleAccordian = () => {
    setToggle(true);
  };

  const handleCloseAccordian = () => {
    setToggle(false);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            border: "2px solid white",
            width: "100%",
            padding: "10px",
            margin: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: toggle ? "gray" : "transparent",
            color: toggle ? "white" : "white",
          }}
          onClick={() => (toggle ? handleCloseAccordian() : handleAccordian())}
        >
          <h6>{question}</h6>
          {toggle ? (
            <span>
              <FaArrowDown />
            </span>
          ) : (
            <span>
              <FaArrowRight />
            </span>
          )}
        </div>
        <div style={{ margin: "-10px -5px 0px 5px" }}>
          {toggle && (
            <div
              style={{
                border: "2px solid white",
                borderTop: "none",
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: "16px" }}>{answer}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faqlist;
