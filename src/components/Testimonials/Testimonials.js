import css from './Testimonials.module.scss'
import { Button } from '../UI/Button/Button'
import shortid from 'shortid'
import { useSelector } from 'react-redux'

export const Testimonials = () => {

	const data = useSelector((state) => state.testimonials)
	const man = data.man

	return (
		<div className={css.Testimonials}>
			<div className={css.container}>
				<div className={css.left}>
					<div className={css.image}>
						<img src={require('../../assets/images/testimonials/girls.jpg')} alt="" />
					</div>
					<div className={css.describe}>
						<p>{man.describe}</p>
						<h3>{man.name}</h3>
						<h4>{man.sitizen}</h4>
					</div>
				</div>
				<div className={css.right}>
					<h2>Testimonials</h2>
					<h3>{data.title}</h3>
					<p>{data.subtitle}</p>
					<ul>
						{
							data.items.map((item, id) => (
								<li key={shortid.generate()}>
									{item.name}
								</li>
							))
						}
					</ul>
					<Button
						name={data.btn.name}
						theme={data.btn.theme}
					/>
				</div>
			</div>
		</div>
	)
}