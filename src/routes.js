import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Secret from "./components/Secret";
import Wod from "./components/Wod";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/wod",
        component: Wod,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
];
