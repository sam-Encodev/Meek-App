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
	SwipeoutButton,
	SwipeoutActions,
} from "framework7-react";
import { cartlist } from "../js/cart_list";

const CartPage = ({ f7router }) => {
	return (
		<Page name="view-cart">
			<Navbar title="Cart" />
			<List mediaList>
				{cartlist.map((item, index) => (
					<ListItem
						swipeout
						key={index}
						link={`/product/`}
						title={item.title}
						after={item.after}
						subtitle={item.subtitle}
						noChevron={true}
					>
						<img slot="media" src={item.image} width="80" />

						<SwipeoutActions left>
							<SwipeoutButton color="orange">Mark</SwipeoutButton>
						</SwipeoutActions>
						<SwipeoutActions right>
							<SwipeoutButton
								delete
								overswipe
								confirmText="Are you sure you want to delete this item?"
							>
								Delete
							</SwipeoutButton>
						</SwipeoutActions>
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
