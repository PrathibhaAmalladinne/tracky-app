import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
function product() {
  return (
    <main className={styles.product}>
      <PageNav >
      <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
      </PageNav>
      <section>
        <div>
          <h2>About Worlswise.</h2>
          <p>
            Blah blah is blah for absolute blah. Blah blah is blah for absolute
            blah. Blah blah is blah for absolute blah. Blah blah is blah for
            absolute blah. Blah blah is blah for absolute blah. Blah blah is
            blah for absolute blah. Blah blah is blah for absolute blah
          </p>
        </div>
      </section>
    </main>
  );
}

export default product;
