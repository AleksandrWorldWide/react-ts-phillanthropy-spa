import css from './Main.module.scss'
import { useSelector } from 'react-redux/es/exports'
import shortid from 'shortid'
import { Button } from '../UI/Button/Button'
import { Footer } from '../Footer/Footer'

export const Main = () => {

	const data = useSelector((state) => state.main)

	return (
		<>
			<main className={css.Main}>
				<div className={css.content}>
					<div className={css.body}>
						<h1 className={css.title}>{data.title}</h1>
						<p className={css.subtitle}>{data.subtitle}</p>
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
					<div className={css.image}>
						<img src={require(`../../assets/images/${data.url}.jpg`)} alt={data.url} />
					</div>
				</div>
					
				<div className={css.footer}>
						<ul className={css.list}>
							{
								data.items.map((item, id) => {

									return (
										<li key={shortid.generate()}>
											<div className={css.block}>
												<div className={css.block__title}>
													<p >{item.count}</p>
													<p className={css.block__title_orange}>{item.etc}</p>
												</div>
												<p className={css.block__describe}>{item.describe}</p>
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
			</main>
			<Footer/>
		</>
	)
}