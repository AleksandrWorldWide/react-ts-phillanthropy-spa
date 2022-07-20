import css from './News.module.scss'
import { Button } from '../UI/Button/Button'
import shortid from 'shortid'
import { useSelector } from 'react-redux'

export const News = () => {

	const data = useSelector((state) => state.news)

	return (
		<div className={css.News}>
			<div className={css.container}>
				<h2>News & Resources</h2>
				<h3>{data.title}</h3>
				<div className={css.content}>
					{
						data.items.map((item, id) => (
							<div className={css.block} key={shortid.generate()}>
								<div className={css.image}>
									<img src={require(`../../assets/images/news/${item.url}.jpg`)} alt={item.url} />
								</div>
								<div className={css.card}>
									<div className={css.header}>
										<div className={css.type}>
											{item.type}
										</div>
										<div className={css.date}>
											{item.date}
										</div>
									</div>
									<h3>{item.title}</h3>
									<span>{item.etc}</span>
								</div>
							</div>
						))
					}
				</div>
				<div className={css.btns}>
					{
						data.btn.map((item, id)=>(
							<Button
								key={shortid.generate()}
								name={item.name}
								theme={item.theme}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}