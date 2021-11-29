import React from "react";
import { Page, Navbar,  BlockTitle } from "framework7-react";

const Product = () => {
	return (
		<Page name="view-cart">
			<Navbar title="Product" backLink={true} />
			<BlockTitle>Product</BlockTitle>
		</Page>
	);
};

export default Product;
