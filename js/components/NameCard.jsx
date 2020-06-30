import { h, render, Component } from 'preact';
import { Button } from 'preact-material-components';
import { GRID_SQUARE_HEIGHT, GRID_SQUARE_WIDTH, DEFAULT_COLOR, NAME_CARD_COORD } from '../helper/constants';
import { unitCoordToWindowCoord } from '../helper/helpers';

export default class NameCard extends Component {
  render() {
    const [x, y] = NAME_CARD_COORD;
    const [xPos, yPos] = unitCoordToWindowCoord(x, y);
    return (
      <Button
        className="fixed-square name-card"
        disabled
        style={{left: xPos - GRID_SQUARE_WIDTH / 2, top: yPos - GRID_SQUARE_HEIGHT / 2, backgroundColor: DEFAULT_COLOR }}
      >
      Justin Hong
      </Button>
    );
  }
}
