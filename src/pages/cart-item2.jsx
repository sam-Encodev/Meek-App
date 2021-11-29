import React from "react";
import { Page, Navbar, Block, BlockTitle, Link } from "framework7-react";

const CartItem2 = () => {
	return (
		<Page name="view-cart">
			<Navbar title="Cart Item 2" backLink={true} />
			<BlockTitle>Cart Item 2</BlockTitle>
		</Page>
	);
};

export default CartItem2;
