import { h, render, Component } from 'preact';
import { Button } from 'preact-material-components';
import { GRID_SQUARE_HEIGHT, GRID_SQUARE_WIDTH, THEME_COLORS } from '../helper/constants';
import { getCenteredGridSquareCoords, centeredCoordToWindowCoord } from '../helper/helpers';

class GridSquare extends Component {
  constructor() {
    super();
    this.state = { colorID: 0 };
  }

  render({ xPos, yPos }, { colorID }) {
    return (
      <Button
        className="grid-square"
        unelevated
        ripple
        width={GRID_SQUARE_WIDTH}
        height={GRID_SQUARE_HEIGHT}
        style={{left: xPos - GRID_SQUARE_WIDTH / 2, top: yPos - GRID_SQUARE_HEIGHT / 2, backgroundColor: THEME_COLORS[colorID]}}
        onClick={() => this.setState({ colorID: (colorID + 1) % THEME_COLORS.length })}
      />
    );
  }
}

export default class ButtonGrid extends Component {
  render() {
    var gridCoords = getCenteredGridSquareCoords();
    var squares = [];

    for (var i = 0; i < gridCoords.length; i++) {
      const coord = gridCoords[i];
      const wCoord = centeredCoordToWindowCoord(coord[0], coord[1]);
      squares.push(<GridSquare key={`gs-${coord[0]}-${coord[1]}`} xPos={wCoord[0]} yPos={wCoord[1]} />)
    }

    return (
      <div className="button-grid">
        {squares}
      </div>
    );
  }
}

