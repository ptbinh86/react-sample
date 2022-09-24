import { NavLink } from 'react-router-dom';
import styles from './SidebarMenu.module.css';

export default function SidebarMenu () {
	return (
		<ul className={styles.sidebarMenu}>
			<li className={styles.menuItem}>
				<NavLink to="/" className={styles.menuLink}>Dashboard</NavLink>
			</li>
			<li className={styles.menuItem}>
				<NavLink to="/projects/" className={styles.menuLink}>Projects</NavLink>
			</li>
		</ul>
	)
}
