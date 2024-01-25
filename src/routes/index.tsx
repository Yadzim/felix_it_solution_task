import { RoutesTypeChildren } from "./types";
import { FaCalendarAlt, FaHome, FaMusic, FaShoppingCart, FaSignInAlt } from "react-icons/fa"
import Dashboard from "pages/dashboards";
import Login from "pages/login";
import CardSpotlight from "pages/card";
import Register from "pages/register";
import BookList from "pages/book_list";


export const public_routes: Array<RoutesTypeChildren> = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    config: {
      key: "unlock",
      icon: FaHome,
      structure: "layout",
      exact: true,
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    config: {
      key: "unlock",
      icon: FaSignInAlt,
      structure: "nonlayout",
      exact: true,
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    config: {
      key: "unlock",
      icon: FaSignInAlt,
      structure: "nonlayout",
      exact: true,
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Card",
    path: "/card",
    component: CardSpotlight,
    config: {
      key: "unlock",
      icon: FaSignInAlt,
      structure: "layout",
      exact: true,
      isMenu: true,
    },
    submenu: [],
  },
  {
    name: "Book",
    path: "/book",
    component: BookList,
    config: {
      key: "unlock",
      icon: FaSignInAlt,
      structure: "layout",
      exact: true,
      isMenu: true,
    },
    submenu: [],
  },

  // {
  //   name: "Not found",
  //   path: "/not_found",
  //   component: undefined,
  //   config: {
  //     key: "unlock",
  //     icon: FaFile,
  //     structure: "layout",
  //     exact: true,
  //     isShowLink: true,
  //   },
  //   submenu: [],
  // },
]

export const prived_routes: Array<RoutesTypeChildren> = [

]