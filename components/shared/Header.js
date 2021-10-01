import Link from "next/link";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tech Notes</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Note</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
