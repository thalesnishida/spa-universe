import { Route } from "./router.js";

const route = new Route;

route.add("/","/pages/home.html")
route.add("/universe","/pages/universe.html")
route.add("/explorer","/pages/explorer.html")


route.handle();

window.onpopstate = () => route.handle();
window.route = () => route.route();