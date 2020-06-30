import { h, render, Component } from 'preact';
import { Button } from 'preact-material-components';
import {
  GRID_SQUARE_HEIGHT,
  GRID_SQUARE_WIDTH,
  DEFAULT_COLOR,
  LINK_COORDS,
  LINK_COLORS,
  LINK_ICONS,
  LINK_URLS,
} from '../helper/constants';
import { unitCoordToWindowCoord } from '../helper/helpers';

export default class LinkSquare extends Component {
  render({ linkID }) {
    const [x, y] = LINK_COORDS[linkID];
    const [xPos, yPos] = unitCoordToWindowCoord(x, y);
    return (
      <Button
        className="fixed-square link-square"
        unelevated
        ripple
        href={LINK_URLS[linkID]}
        style={{left: xPos - GRID_SQUARE_WIDTH / 2, top: yPos - GRID_SQUARE_HEIGHT / 2, backgroundColor: LINK_COLORS[linkID] }}
      >
        {LINK_ICONS[linkID]()}
      </Button>
    );
  }
}
