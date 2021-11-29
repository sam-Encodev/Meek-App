import React from "react";
import { Views, View, Toolbar, Link, Icon, Badge } from "framework7-react";

const MannieFresh = () => {
	return (
		<>
			<Views tabs className="safe-areas">
				<Toolbar tabbar bottom>
					<Link tabLink="#view-house" tabLinkActive>
						<Icon
							ios="f7:house_fill"
							aurora="f7:house_fill"
							md="f7:house"
						></Icon>
					</Link>

					<Link tabLink="#view-cart">
						<Icon ios="f7:cart_fill" aurora="f7:cart_fill" md="f7:cart">
							<Badge color="red">5</Badge>
						</Icon>
					</Link>

					<Link tabLink="#view-heart">
						<Icon
							ios="f7:heart_fill"
							aurora="f7:heart_fill"
							md="f7:heart"
						></Icon>
					</Link>

					<Link tabLink="#view-person">
						<Icon
							ios="f7:person_crop_circle_fill"
							aurora="f7:person_crop_circle_fill"
							md="f7:person_crop_circle"
						></Icon>
					</Link>
				</Toolbar>

				<View
					id="view-house"
					main
					tab
					tabActive
					stackPages
					url="/"
					animate={true}
					iosDynamicNavbar={true}
					browserHistory={true}
				/>
				<View id="view-cart" name="cart" tab url="/cart/" router={true} />
				<View id="view-heart" name="heart" tab url="/heart/" />
				<View id="view-person" name="person" tab url="/person/" />
			</Views>
		</>
	);
};
export default MannieFresh;
