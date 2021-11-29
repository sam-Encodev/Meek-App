import React from "react";
import {
	Navbar,
	Page,
	List,
	ListItem,
	Block,
	Card,
	CardHeader,
	CardContent,
	Link,
	Button,
	SwipeoutActions,
	SwipeoutButton,
	BlockTitle,
} from "framework7-react";
import "../css/grid.css";
import "../css/list-view.css";
import "../css/panel.css";
import "../css/card.css";
import { cartlist } from "../js/cart_list";
import SheetPrompt from "../components/sheet";

const HomePage = () => {
	const [state, setstate] = React.useState(false);
	return (
		<Page name="home" className="grid-demo">
			<Navbar large sliding={true} title="Meek" />
			<Block>
				<List mediaList inset>
					{cartlist.map((item, index) => (
						<ListItem
							key={index}
							link={`/product/`}
							title={item.title}
							subtitle="Michael Jackson"
							noChevron={true}
						>
							<img
								slot="media"
								src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
								width="80"
							/>
						</ListItem>
					))}
				</List>
			</Block>


			<Block>
				<Button fill onClick={() => setstate(true)}>
					Open Sheet
				</Button>
			</Block>

			<SheetPrompt close={() => setstate(false)} state={state} />
		</Page>
	);
};

export default HomePage;
