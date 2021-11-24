import React from "react";
import { Page, Navbar, Block, BlockTitle, Link } from "framework7-react";

const CartPage = () => {
	return (
		<Page name="view-cart">
			<Navbar title="Cart"/>
			<BlockTitle>Cart My App</BlockTitle>
			<Block strong>
				<p>
					Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis
					sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt
					vel quod tenetur nostrum, voluptate omnis quasi quidem illum
					consequuntur, a, quisquam.
				</p>
				<p>
					Laudantium neque magnam vitae nemo quam commodi, in cum dolore
					obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati
					dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis,
					ut tenetur alias.
				</p>
			</Block>
		</Page>
	);
};

export default CartPage;
