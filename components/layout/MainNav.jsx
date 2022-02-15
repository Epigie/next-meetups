import React, { useContext } from "react";
import Link from "next/link";
// import FavoritesContext from "../../store/favouritesContext";
import classes from "./MainNav.module.css";

const MainNav = () => {
  // const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Epigie Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href={`/`}>All Meetups</Link>
          </li>
          <li>
            <Link href={`/new-meetup`}>Add New Meetup</Link>
          </li>
          <li>
            <Link href={`/favourites`}>
              Favourite Meetups
              {/* <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span> */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
