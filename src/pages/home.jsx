import React from "react";
import { Page, Navbar, Block } from "framework7-react";

const HomePage = () => (
	<Page name="home">
		<Navbar large sliding={true} title="Meek" />
		<Block strong>
			<p>Hello</p>
		</Block>
	</Page>
);

export default HomePage;
