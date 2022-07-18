import css from './Button.module.scss'

export const Button = ({name ,theme}) => {

	const cls = [
		css.Button,
		css[theme]
	]
	
	return (
		<button className={cls.join(' ')}>
			{name}
		</button>
	)
}