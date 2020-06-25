import { h, Component } from 'preact';
import NameCard from './NameCard';
import ButtonGrid from './ButtonGrid';

export default class App extends Component {
	render() {
		return (
			<div id="app">
        <NameCard />
        <ButtonGrid />
			</div>
		);
	}
}

