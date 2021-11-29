import React from "react";
import { Page, Navbar, Block, BlockTitle, Link } from "framework7-react";

const CartItem = () => {
	return (
		<Page name="view-cart">
			<Navbar title="Cart Item 1" backLink="Back" />
			<BlockTitle>Cart Item 1</BlockTitle>
		</Page>
	);
};

export default CartItem;
