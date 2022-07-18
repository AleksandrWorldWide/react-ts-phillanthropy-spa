import { useSelector } from 'react-redux'
import { Button } from '../UI/Button/Button'
import css from './Header.module.scss'
import shortid from 'shortid'

export const Header = () => {

	const data = useSelector((state) => state.header)

	return (
		<header className={css.Header}>
			<div className={css.container}>
				<nav className={css.navigation}>
					<div className={css.logo}>
						<img src={require(`../../assets/icons/${data.url}.png`)} alt={data.url} />
					</div>
					<ul className={css.navItems}>
						{
							data.menu.map((item, id)=> {
								return (
									<li key={shortid.generate()}>
										{item.name}
									</li>
								)
							})
						}
					</ul>
				</nav>
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