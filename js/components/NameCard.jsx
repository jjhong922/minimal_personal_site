import { h, render, Component } from 'preact';
import { Button } from 'preact-material-components';
import { GRID_SQUARE_HEIGHT, GRID_SQUARE_WIDTH, DEFAULT_COLOR, NAME_CARD_COORD } from '../helper/constants';
import { unitCoordToWindowCoord } from '../helper/helpers';

export default class NameCard extends Component {
  render({ secret }) {
    const [x, y] = NAME_CARD_COORD;
    const [xPos, yPos] = unitCoordToWindowCoord(x, y);
    return (
      <Button
        className="fixed-square name-card"
        style={{left: xPos - GRID_SQUARE_WIDTH / 2, top: yPos - GRID_SQUARE_HEIGHT / 2, backgroundColor: DEFAULT_COLOR }}
        onClick={() => {
          if (secret == 4) {
            window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
          }
        }}
      >
      Justin Hong
      </Button>
    );
  }
}
