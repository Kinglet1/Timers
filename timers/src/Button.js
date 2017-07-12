import React, { Component } from 'react';
import style from './Button.css';
import classNames from 'class-names';

const classes = classNames.bind(style);

class Wrapper extends Component {
	setAdditionalClassNames() {
		let classNames = [];

		switch (this.props.size) {
			case 'big':
				classNames.push(style._size_big);
				break;
			case 'medium':
				classNames.push(style._size_medium);
				break;
			case 'small':
				classNames.push(style._size_small);
				break;
		}

		switch (this.props.theme) {
			case 'default':
				classNames.push(style._theme_default);
				break;
			case 'primary':
				classNames.push(style._theme_primary);
				break;
		}

		if (this.props.disabled) {
			classNames.push(style._disabled_yes);
		}

		return classNames;
	}

	render() {
		return (
			<div className={classes(style.button, this.setAdditionalClassNames(), this.props.className)}>
				<span className={style.__text}>Button</span>
			</div>
		);
	}
}

export default Wrapper;