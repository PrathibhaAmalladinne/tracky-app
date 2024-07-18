import PageNav from "../components/PageNav"
import styles from "./Product.module.css"

function Pricing() {
    return (
        <main className={styles.product}>
            <PageNav />
            <section>
              <div>
                <h2>Simple pricing.<br />Just $9/month.</h2>
                <p>Blah blah is blah for absolute blah.
                    Blah blah is blah for absolute blah.
                    Blah blah is blah for absolute blah.
                    Blah blah is blah for absolute blah.</p>
              </div>
               <img src="./public/img-2.jpg" alt ="overview of a large city with skyscrappers" />
            </section>
        </main>
    )
}

export default Pricing
