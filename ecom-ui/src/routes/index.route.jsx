import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import AboutUs from "views/AboutUs/AboutUs.jsx";
import BlogPosts from "views/BlogPosts/BlogPosts.jsx";
import ContactUs from "views/ContactUs/ContactUs.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import ShopingCart from "views/ShopingCart/ShopingCart.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/blog-posts", name: "BlogPost", component: BlogPosts },
  { path: "/contact-us", name: "ContactUs", component: ContactUs },
  { path: "/error", name: "Error", component: ErrorPage },
  { path: "/product", name: "Product", component: ProductPage },
  { path: "/shoping-cart", name: "ShopingCart", component: ShopingCart },
  { path: "/profile", name: "Profile", component: ProfilePage },
  { path: "/signup", name: "SignUp", component: SignupPage },
  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
