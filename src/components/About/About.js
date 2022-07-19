import { useSelector } from 'react-redux'
import css from './About.module.scss'
import shortid from 'shortid'
import { Button } from '../UI/Button/Button'

export const About = () => {

	const data = useSelector((state) => state.about)

	return (
		<div className={css.About}>
			<div className={css.container}>
				<header>about us</header>
				<div className={css.content}>
					<div className={css.left}>
						<h2 className={css.title}>{data.title}</h2>
						<p className={css.subtitle}>{data.subtitle}</p>
						<div className={css.image__girl}>
							<img src={require('../../assets/images/about_girl.jpg')} alt="girl" />
						</div>
						<div className={css.image__teacher}>
							<img src={require('../../assets/images/about_teacher.jpg')} alt="teacher" />
						</div>
					</div>
					<div className={css.right}>
						<ul className={css.btns}>
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
						<div className={css.image__boys}>
							<img src={require('../../assets/images/about_boys.jpg')} alt="boys" />
						</div>
						<p className={css.right__text}>{data.text}</p>
						<ul className={css.right__list}>
							{
								data.list.map((item, id) => {
									return (
										<li key={shortid.generate()}>
											{item.text}
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}