import { Link, NavLink } from "react-router-dom";
// // import PageNav from "./components/PageNav.jsx"
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav >
      <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
      </PageNav>
      <section>
        <h1>
          You travel the world.
          <br />
          We keep track of your adventures!
        </h1>
        <h2>
          Your footprints in the sand can be logged no matter which corner of
          the world. Let your loved ones know and see your adventures!
        </h2>
        <Link to="login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
