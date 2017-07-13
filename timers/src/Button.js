import React, { Component } from 'react';
import style from './Button.css';
import classNames from 'class-names';

const classes = classNames.bind(style);


class Wrapper extends Component {


	render() {
		const { size, theme, className } = this.props;

		return (
			<div className={classes(
				style.button,
				style[size && `_size_${size}`],
				style[theme && `_theme_${theme}`],
				className)}>
				<span className={style.__text}>Button</span>
			</div>
		);
	}
}

export default Wrapper;
