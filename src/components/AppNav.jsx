// import styles from "./AppNav.module.css";
// import {  NavLink } from "react-router-dom";
// function AppNav() {
//     return (
//         <nav className={styles.nav}>
//           <ul className={styles.nav.ul} >
//             <li>
//                 <NavLink to ="cities"> Cities </NavLink>
//             </li>
//             <li>
//                 <NavLink to ="/app/countries"> Countries </NavLink>
//             </li>
//           </ul>
//         </nav>
//     );
// }

// export default AppNav
// {/* <Link to = "/applayout" className="cta">Start tracking now</Link> */}
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
