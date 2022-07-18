import css from './Footer.module.scss'
import { Button } from '../UI/Button/Button'
import { useSelector } from 'react-redux/es/exports'
import shortid from 'shortid'

export const Footer = () => {

	const data = useSelector((state) => state.footer)

	const icons = new Array(6).fill(0)
	

	return (
		<footer className={css.Footer}>
			<div className={css.container}>
				<div className={css.body}>
					<div className={css.logo}>
						<img src={require('../../assets/icons/logo.png')} alt="logo" />
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris.</p>
					</div>
					<div className={css.content}>
						<div className={css.menu}>
							<h3>Menu</h3>
							<ul>
								{
									data.menu.map((item, id) => {
										return (
											<li key={shortid.generate()}>
												{item.name}
											</li>
										)
									})
								}
							</ul>
						</div>
						<div className={css.pages}>
							<h3>Utility Pages</h3>
							<ul>
								{
									data.pages.map((item, id) => {
										return (
											<li key={shortid.generate()}>
												{item.name}
											</li>
										)
									})
								}
							</ul>
						</div>
						
					</div>
					<div className={css.donate}>
						<img src={require('../../assets/icons/footer.png')} alt="donate" />
						<h3>Join us and let’s make a better world, today</h3>
						<ul>
							{
								data.btn.map((item, id) => {
									return (
										<li key={shortid.generate()}>
											<Button
												name={item.name}
												theme={item.theme}
											/>
										</li>
										
									)
								})
							}
						</ul>
						
					</div>
				</div>
				<div className={css.copyright}>
					<p>Copyright © Philanthropy X | Designed by <u>BRIX Templates</u> - Powered by <u>Webflow</u></p>
					<div className={css.socials}>
						{
							icons.map((item, id) => {
								console.log(id)
								return (
									<span key={shortid.generate()}>111</span>
								)
							})
						}
					</div>
				</div>
			</div>
		</footer>
	)
}