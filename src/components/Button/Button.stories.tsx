import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
	.add('Primary', () => <Button>Lorem ipsum</Button>)
	.add('Primary disabled', () => <Button disabled>Lorem ipsum</Button>);
