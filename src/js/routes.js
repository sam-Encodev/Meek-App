import HomePage from "../pages/home.jsx";
import CartPage from "../pages/cart.jsx";
import WishListPage from "../pages/wishlist.jsx";
import ProfilePage from "../pages/profile.jsx";
import NotFoundPage from "../pages/404.jsx";

var routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/cart/",
		component: CartPage,
	},
	{
		path: "/heart/",
		component: WishListPage,
	},
	{
		path: "/person/",
		component: ProfilePage,
	},
	{
		path: "(.*)",
		component: NotFoundPage,
	},
];

export default routes;
