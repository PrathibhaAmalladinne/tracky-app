import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import styles from './CityItem.module.css'

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

function CityItem({city}) {
    // console.log(city);
    const {currentCity,deleteCity} = useCities();
    const {cityName,country, emoji, date, id , position} = city;

    function handleClick(e){
      e.preventDefault();
      deleteCity(id);
    }
    
    return (
        <li >
          <Link
          //  className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`} 
           className={`${styles.cityItem} ${id===currentCity.id ? styles['cityItem--active'] :"" } `}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
           <span className={styles.emoji}>{emoji}</span>
           <h3 className={styles.name}>{cityName}</h3>
           <h3 className={styles.name}>{country}</h3>
           <time className={styles.date}>{formatDate(date)}</time>
           <button className={styles.deleteBtn}
                   onClick={handleClick}
                   >&times;</button>
           </Link>
        </li>
    );
}

export default CityItem;