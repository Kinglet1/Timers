import React, { Component } from 'react';
import Button from './Button';

class ButtonView extends Component {
	render() {
		return (
			<div>
				<Button size={'big'} theme={'primary'} />
				<Button size={'big'} theme={'primary'} disabled={true} />
				<Button size={'big'} theme={'default'} />
				<Button size={'big'} theme={'default'} disabled={true} />

				<Button size={'medium'} theme={'primary'} />
				<Button size={'medium'} theme={'primary'} disabled={true} />
				<Button size={'medium'} theme={'default'} />
				<Button size={'medium'} theme={'default'} disabled={true} />

				<Button size={'small'} theme={'primary'} />
				<Button size={'small'} theme={'primary'} disabled={true} />
				<Button size={'small'} theme={'default'} />
				<Button size={'small'} theme={'default'} disabled={true} />
			</div>
		);
	}
}

export default ButtonView;