import React from "react";
import Avatar from "./avatar";
import "./avatar.css";

const Avatar2 = (props) => {
  const sizes = [
    { size: "s", width: "30px", height: "30px" },
    { size: "m", width: "60px", height: "60px" },
    { size: "l", width: "120px", height: "120px" },
    { size: "xl", width: "200px", height: "200px" },
  ];

  const shapes = ["circle", "square", "rounded"];

  return (
    <div className="all-container">
      {shapes.map((item, i) => (
        <div>
          {sizes.map((el, i) => {
            const mystyles = {
              width: `${el.width}`,
              height: `${el.height}`,
              type: `${item}`,
            };
            return (
              <div className="card">
                <img src={props.src} className={item} style={mystyles} />
                <h4>
                  {" "}
                  Size is : {el.size} with {el.width.slice(0, -2)} x
                  {el.width.slice(0, -2)}
                </h4>
                <h4>Type: {item}</h4>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Avatar2;
