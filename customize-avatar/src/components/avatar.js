import React from "react";
import "./avatar.css";

const Avatar = (props) => {
  let styles = {};
  if (props.type === "rounded") {
    if (props.size === "s") {
      styles = {
        borderRadius: "10%",
        width: "30px",
        height: "30px",
      };
    } else if (props.size === "m") {
      styles = {
        borderRadius: "10%",
        width: "60px",
        height: "60px",
      };
    } else if (props.size === "l") {
      styles = {
        borderRadius: "10%",
        width: "120px",
        height: "120px",
      };
    } else if (props.size === "xl") {
      styles = {
        borderRadius: "10%",
        width: "200px",
        height: "200px",
      };
    }
  } else if (props.type === "circle") {
    if (props.size === "s") {
      styles = {
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      };
    } else if (props.size === "m") {
      styles = {
        borderRadius: "50%",
        width: "60px",
        height: "60px",
      };
    } else if (props.size === "l") {
      styles = {
        borderRadius: "50%",
        width: "120px",
        height: "120px",
      };
    } else if (props.size === "xl") {
      styles = {
        borderRadius: "50%",
        width: "200px",
        height: "200px",
      };
    }
  } else if (props.type === "square") {
    if (props.size === "s") {
      styles = {
        width: "30px",
        height: "30px",
      };
    } else if (props.size === "m") {
      styles = {
        width: "60px",
        height: "60px",
      };
    } else if (props.size === "l") {
      styles = {
        width: "120px",
        height: "120px",
      };
    } else if (props.size === "xl") {
      styles = {
        width: "200px",
        height: "200px",
      };
    }
  }
  return (
    <div className="container">
      <div className="card">
        <img src={props.src} alt={props.type} style={styles} />
        <h4>
          Size is : {props.size} with {styles.width.slice(0, -2)} x
          {styles.width.slice(0, -2)}
        </h4>
        <h4>Type: {props.type}</h4>
      </div>
    </div>
  );
};

export default Avatar;
