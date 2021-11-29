import React from "react";
import {
	Page,
	Navbar,
	Block,
	BlockTitle,
	ListItem,
	List,
	SwipeoutActions,
	SwipeoutButton,
} from "framework7-react";
import { cartlist } from "../js/cart_list";

const WishListPage = () => (
	<Page>
		<Navbar title="WishList" />

	
			<List mediaList>
				{cartlist.map((item, index) => (
					<ListItem
						swipeout
						key={index}
						title={item.title}
						subtitle={item.subtitle}
						noChevron={true}
					>
						<img slot="media" src={item.image} width="80" />

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

	</Page>
);

export default WishListPage;
