import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//import { Button, Welcome } from '@storybook/react/demo';

import MyButton from '../src/Button';

//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

//storiesOf('Button', module)
//  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('MyButton', module)
	.add('medium primary button', () => <MyButton size={'medium'} theme={'primary'} />)
	.add('big primary button', () => <MyButton size={'big'} theme={'primary'} />)
	.add('small primary button', () => <MyButton size={'small'} theme={'primary'} />);
