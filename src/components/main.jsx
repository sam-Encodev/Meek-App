import React, { useState, useEffect } from "react";
import { f7ready, App, Views, View, Toolbar, Link } from "framework7-react";
import { f7params } from "../js/config";


const MannieFresh = () => {
	return (
        <>
		<Views tabs className="safe-areas">
			<Toolbar tabbar bottom>
				<Link
					tabLink="#view-house"
					tabLinkActive
					iconIos="f7:house_fill"
					iconAurora="f7:house_fill"
					iconMd="f7:house"
				/>

				<Link
					tabLink="#view-cart"
					iconIos="f7:cart_fill"
					iconAurora="f7:cart_fill"
					iconMd="f7:cart"
				/>

				<Link
					tabLink="#view-heart"
					iconIos="f7:heart_fill"
					iconAurora="f7:heart_fill"
					iconMd="f7:heart"
				/>

				<Link
					tabLink="#view-person"
					iconIos="f7:person_crop_circle_fill"
					iconAurora="f7:person_crop_circle_fill"
					iconMd="f7:person_crop_circle"
				/>
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
export default MannieFresh