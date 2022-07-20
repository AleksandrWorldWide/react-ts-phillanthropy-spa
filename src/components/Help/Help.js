import css from './Help.module.scss'
import { useSelector } from 'react-redux/es/exports'
import shortid from 'shortid'
import { Button } from '../UI/Button/Button'

export const Help = () => {

	const data = useSelector((state)=> state.help)

	return (
		<div className={css.Help}>
			<div className={css.container}>
				<h3>How we help?</h3>
				<div className={css.header}>
					<h2>{data.title}</h2>
					<Button
						name={data.btn.name}
						theme={data.btn.theme}
					/>
				</div>
				<div className={css.content}>
					{
						data.cards.map((item, id)=> {
							return(
								<div className={css.block}>
									<div className={css.icon}>
										<img src={require(`../../assets/icons/help/${item.icon}.png`)} alt={item.icon} />
									</div>
									<h4>{item.title}</h4>
									<p>{item.subtitle}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}