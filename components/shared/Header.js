import Link from "next/link";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tech Notes</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/new-note'>Add New Note</Link>
          </li>
          <li>
            <Link href='/notes'>All Notes</Link>
          </li>
          <li>
            <Link href='/learn-mode'>Learn mode</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
