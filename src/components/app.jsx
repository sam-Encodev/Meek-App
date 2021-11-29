import React, { useState, useEffect } from "react";
import { f7ready, App, Views, View, Toolbar, Link } from "framework7-react";
import { f7params } from "../js/config";
import MannieFresh from "./main";

const Main = () => {
	useEffect(() => {
		f7ready();
	}, [f7ready]);

	return (
		<App {...f7params} themeDark>
			<MannieFresh />
		</App>
	);
};
export default Main;
