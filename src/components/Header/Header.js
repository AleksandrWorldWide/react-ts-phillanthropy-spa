import { useSelector } from 'react-redux'
import { Button } from '../UI/Button/Button'
import css from './Header.module.scss'
import shortid from 'shortid'
import { Link } from "react-router-dom";

export const Header = () => {

	const data = useSelector((state) => state.header)

	return (
		<header className={css.Header}>
			<div className={css.container}>
				<div className={css.navigation}>
					<div className={css.logo}>
						<img src={require(`../../assets/icons/${data.url}.png`)} alt={data.url} />
					</div>
					<nav className={css.navItems}>
						{
							data.menu.map((item, id)=> {
								return (
									<Link to={item.link} key={shortid.generate()}>
										{item.name}
									</Link>
								)
							})
						}
					</nav>
				</div>
				<div className={css.donate}>
					<div className={css.basket}>
						<img src={require('../../assets/icons/basket.png')} alt='basket'/>
					</div>
					<Button
						name={data.btn.name}
						theme={data.btn.theme}
					/>
				</div>
			</div>
		</header>
	)
}