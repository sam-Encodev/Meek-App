import React from "react";
import {
	Page,
	Block,
	BlockTitle,
	Link,
	Navbar,
	Row,
	Col,
	List,
	ListItem,
	Button,
} from "framework7-react";
import { cartlist } from "../js/cart_list";

const CartPage = ({ f7router }) => {
	return (
		<Page name="view-cart">
			<Navbar title="Cart" />
			<List mediaList>
				{cartlist.map((item, index) => (
					<ListItem
						key={index}
						link={`/product/`}
						title={item.title}
						after={item.after}
						subtitle={item.subtitle}
						text={item.text}
					>
						<img slot="media" src={item.image} width="80" />
					</ListItem>
				))}
			</List>

			{/* <Block>
				<Link
					onClick={() => f7router.navigate("/cart/item1/")}
					ignoreCache={true}
				>
					Item 1
				</Link>
			</Block>

			<Block>
				<Link
					onClick={() => f7router.navigate("/cart/item2/")}
					ignoreCache={true}
				>
					Item 2
				</Link>
			</Block> */}
		</Page>
	);
};

export default CartPage;
