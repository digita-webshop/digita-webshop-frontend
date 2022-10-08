import { keyframes } from "@emotion/react";

export const centerStyle = {
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

export const circleStyle = {
  width: "80px",
  height: "80px",
  position: "relative",
};

export const spin = keyframes`
  0%,
  100% {
  transform: scale(0);
}
50% {
  transform: scale(1);
}
`;

export const c1 = {
  width: "100%",
  height: "100%",
  position: "absolute",
  background: "#eb2c2c",
  borderRadius: "50%",
  opacity: "0.6",
  animation: `${spin} 2s infinite ease-in-out`,
};

export const c2 = {
  width: "100%",
  height: "100%",
  position: "absolute",
  background: "#eb2c2c",
  borderRadius: "50%",
  opacity: "0.6",
  animation: `${spin} 2s infinite ease-in-out`,
  animationDelay: "-1s",
};
