import React, { Component } from 'react';

import Button from './Button';
import style from './Wrapper.css';

class Wrapper extends Component {
	render() {
		return (
			<div className={style.wrapper}>
				<Button size={'big'} theme={'primary'} className={style.button} />
				<Button size={'big'} theme={'primary'} disabled={true} className={style.button} />
				<Button size={'big'} theme={'default'} className={style.button} />
				<Button size={'big'} theme={'default'} disabled={true} className={style.button} />

				<Button size={'medium'} theme={'primary'} className={style.button} />
				<Button size={'medium'} theme={'primary'} disabled={true} className={style.button} />
				<Button size={'medium'} theme={'default'} className={style.button} />
				<Button size={'medium'} theme={'default'} disabled={true} className={style.button} />

				<Button size={'small'} theme={'primary'} className={style.button} />
				<Button size={'small'} theme={'primary'} disabled={true} className={style.button} />
				<Button size={'small'} theme={'default'} className={style.button} />
				<Button size={'small'} theme={'default'} disabled={true} className={style.button} />
			</div>
		);
	}
}

export default Wrapper;