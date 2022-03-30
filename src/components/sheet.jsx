import React from "react";
import {
	Page,
	Navbar,
	Block,
	Button,
	Sheet,
	Toolbar,
	Link,
	PageContent,
	BlockTitle,
	List,
	ListItem,
	Row,
	Col,
	Stepper,
} from "framework7-react";
import { Text } from "./text";

const SheetPrompt = ({ state, close }) => {
	return (
		<Sheet
			opened={state}
			onSheetClosed={state}
			style={{ height: "auto" }}
			swipeToClose
			swipeToStep
			backdrop
		>
			<PageContent>
				<div className="display-flex  padding justify-content-space-between align-items-center">
					<Text text="Total:" />
					<Text text="$500" />
				</div>

				<BlockTitle medium className="margin-top margin-bottom">
					Your order:
				</BlockTitle>
				<Block>
					<List noHairlines>
						<ListItem title="Item 1">
						
								<Stepper
									fill
									value={0}
									min={0}
									max={10}
									step={1}
									autorepeat={true}
									
								/>
					

							<Text text="$500" fontSize="15px" fontWeight="500" />
						</ListItem>
						<ListItem title="Item 2">
							<Text text="$180" fontSize="15px" fontWeight="500" />
						</ListItem>
						<ListItem title="Delivery">
							<Text text="$120" fontSize="15px" fontWeight="500" />
						</ListItem>
					</List>

					<Button fill onClick={close}>
						Close Sheet
					</Button>
				</Block>
			</PageContent>
		</Sheet>
	);
};

export default SheetPrompt;
