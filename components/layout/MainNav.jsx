import React, { useContext } from "react";
import Link from "next/link";
import classes from "./MainNav.module.css";

const MainNav = () => {
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
            <Link href={`/favourites`}>{"Favourite Meetups"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
