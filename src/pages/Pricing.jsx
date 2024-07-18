import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav>
      <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
      </PageNav>
      <section >
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Blah blah is blah for absolute blah. Blah blah is blah for absolute
            blah. Blah blah is blah for absolute blah. Blah blah is blah for
            absolute blah.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
