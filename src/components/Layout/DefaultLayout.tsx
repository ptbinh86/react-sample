import SidebarMenu from '../Sidebar/SidebarMenu';
import styles from './DefaultLayout.module.css';

export default function DefaultLayout ({ children, ...props }) {
	return (
		<div className={styles.layoutWrapper} {...props}>
			<SidebarMenu />
			<div className="layout-content">
				{children}
			</div>
		</div>
	)
}
