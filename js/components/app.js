import { h, Component } from 'preact';
import { debounce } from '../helper/helpers';
import NameCard from './NameCard';
import ButtonGrid from './ButtonGrid';
import LinkSquare from './LinkSquare';

export default class App extends Component {
  constructor() {
    super();
    this.state = { secret: 0 };
  }

  incrementSecret = () => this.setState({ secret: this.state.secret + 1});

  debouncedResizeHandler() {
    return debounce(_ => this.forceUpdate(), 20);
  }

  componentDidMount() {
    window.addEventListener("resize", this.debouncedResizeHandler());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedResizeHandler()); }

	render({}, { secret }) {
		return (
			<div id="app">
        <NameCard secret={secret} />
        <LinkSquare linkID={0} />
        <LinkSquare linkID={1} />
        <ButtonGrid secret={secret} incrementSecret={this.incrementSecret.bind(this)} />
			</div>
		);
	}
}

