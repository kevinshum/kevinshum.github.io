import React from 'react';
import { render } from "react-dom";
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from './cards'

const FLAVOURS = [
	{ label: '💁‍♂️ Read Kevin\'s bio', value: 'bio' },
	{ label: '🗂 Check out his portfolio', value: 'portfolio' },
	{ label: '⛸ Watch him skate', value: 'skating' },
	{ label: '👋 Say hello!', value: 'contact' }
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

var MultiSelectField = createClass({
	displayName: 'asdfasdf',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			crazy: false,
			stayOpen: false,
			value: [],
			rtl: false,
		};
	},
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });

		render( <Card/> , document.getElementById("bio"));
	},

	render () {
		const { crazy, disabled, stayOpen, value } = this.state;
		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<h3 className="section-heading"> What can I show you? </h3>
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Click here to read my bio, check out my portfolio, or say hello!"
          			removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
				/>
			</div>
		);
	}
});
module.exports = MultiSelectField;