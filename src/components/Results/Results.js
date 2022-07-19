import { useSelector } from 'react-redux'
import css from './Results.module.scss'
import shortid from 'shortid'
import { Button } from '../UI/Button/Button'

export const Results = () => {

	const content = useSelector((state) => state.results.content)
	const video = useSelector((state) => state.results.video)
console.log(content)
	return (
		<div className={css.Results}>
			<div className={css.container}>
				<div className={css.content}>
					<div className={css.left}>
						<header className={css.left__header}>Our Results</header>
						<h2 className={css.left__title}>{content.title}</h2>
						<ul className={css.left__list}>
							{
								content.items.map((item, id) => {

									return (
										<li key={shortid.generate()}>
											<div className={css.left__block}>
												<div className={css.block__image}>
													<img src={require(`../../assets/icons/results__${item.url}.png`)} alt={item.url} />
												</div>
												<div className={css.block__body}>
													<p className={css.body__title}>{item.count}</p>
													<p className={css.body__describe}>{item.describe}</p>
												</div>
											</div>
										</li>
									)
								})
							}
						</ul>
						<div className={css.left__btn}>
							<Button
								name={content.btn.name}
								theme={content.btn.theme}
							/>
						</div>
						
					</div>
					<div className={css.right}>
						<div className={css.image}>
							<img src={require(`../../assets/images/results__${content.url}.jpg`)} alt={content.url} />
						</div>
					</div>
				</div>
			</div>
			<div className={css.substrate}>
				<div className={css.substrate__video}>
					<div className={css.video__container}>
						<span>Take a look at our video</span>
						<h2>{video.title}</h2>
						<ul>
							{
								video.btn.map((item, id) => (
									<li key={shortid.generate()}>
										<Button
											name={item.name}
											theme={item.theme}
										/>
									</li>
								))
							}
						</ul>
						<iframe 
							className={css.video__box} 
							width='1220'
							height='688'
							src="https://www.youtube.com/embed/NXvPBe9ynsc"
							frameborder="0"
							allow="autoplay; encrypted-media"
							allowfullscreen
							autoplay="1"
						>
						</iframe>
						<ul className={css.video__list}>
							{
								video.items.map((item, id) => (
									<li key={shortid.generate()}>
										<div className={css.list__item}>
											<span className={css.item__title}>{item.title}</span>
											<p className={css.item__text}>{item.text}</p>
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}