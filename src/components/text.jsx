import React from "react";

export const Text = ({ fontSize = "22px", fontWeight = "bolder", text }) => {
	return <div style={{ fontSize, fontWeight }}>{text}</div>;
};
