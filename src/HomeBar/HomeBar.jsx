import styles from './HomeBar.module.css'
import TopBar from "../TopBar/TopBar.jsx";
import Home from "../Home/home.jsx";

function HomeBar() {
    return (
        <div className={styles.back}>
            <TopBar/>
            <Home/>
        </div>
    )
}

export default HomeBar;