import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Wishlist = lazy(() => import("./Wishlist"))
const BookDetails = lazy(() => import("./BookDetails"))
export { Home, Wishlist ,BookDetails}