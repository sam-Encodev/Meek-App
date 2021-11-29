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
    Panel,
    View
} from "framework7-react";

const WaitPan = () => {
	return (
		<div className="panel panel-right panel-cover">
			<div className="view">
				<div className="page">...</div>
			</div>
		</div>

		// <Panel resizable right cover>
		// 	<View>
		// 		<Page>
		// 			<Block>Left panel content</Block>
		// 		</Page>
		// 	</View>
		// </Panel>
	);
};

export default WaitPan;
