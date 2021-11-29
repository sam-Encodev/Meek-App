import HomePage from "../pages/home.jsx";
import NotFoundPage from "../pages/404.jsx";

var routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/cart/",
		asyncComponent: () => import("../pages/cart.jsx"),
		routes: [
			{
				path: "item1/",
				asyncComponent: () => import("../pages/cart-item.jsx"),
			},
			{
				path: "item2/",
				asyncComponent: () => import("../pages/cart-item2.jsx"),
			},
		],
	},
	{
		path: "/product/",
		asyncComponent: () => import("../pages/product.jsx"),
	},
	{
		path: "/heart/",
		asyncComponent: () => import("../pages/wishlist.jsx"),
	},
	{
		path: "/person/",
		asyncComponent: () => import("../pages/profile.jsx"),
	},

	{
		path: "(.*)",
		component: NotFoundPage,
	},
];

export default routes;
