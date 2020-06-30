import { h, Component } from 'preact';
import { debounce } from '../helper/helpers';
import NameCard from './NameCard';
import ButtonGrid from './ButtonGrid';
import LinkSquare from './LinkSquare';

export default class App extends Component {
  debouncedResizeHandler() {
    return debounce(_ => this.forceUpdate(), 5);
  }

  componentDidMount() {
    window.addEventListener("resize", this.debouncedResizeHandler());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedResizeHandler());
  }

	render() {
		return (
			<div id="app">
        <NameCard />
        <LinkSquare linkID={0}/>
        <LinkSquare linkID={1}/>
        <ButtonGrid />
			</div>
		);
	}
}

