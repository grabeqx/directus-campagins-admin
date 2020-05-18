import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Primary', () => {
		const options = {
			None: null,
			Primary: 'primary',
			Secondary: 'secondary',
			PrimaryNoBg: 'primaryNoBg',
			SecondaryNoBg: 'secondaryNoBg',
		};

		const value = select('Color', options, null);
		const inputText = text('Text', 'Lorem ipsum');
		const disabled = boolean('Disabled', false);
		return (
			<Button
				secondary={value === 'secondary'}
				primary={value === 'primary'}
				primaryNoBg={value === 'primaryNoBg'}
				secondaryNoBg={value === 'secondaryNoBg'}
				disabled={disabled}>
				{inputText}
			</Button>
		);
	});
