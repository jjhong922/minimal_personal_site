import * as JQuery from "jquery";
const $ = JQuery.default;
import { GRID_SQUARE_PADDING, GRID_SQUARE_HEIGHT, GRID_SQUARE_WIDTH } from './constants';

export const getCenteredGridSquareCoords = () => {
  const height = $(window).height();
  const width = $(window).width();
  const originY = height / 2;
  const originX = width / 2;

  var coords = [];

  var i;
  var j;
  for (i = 0; i < originX / (GRID_SQUARE_WIDTH + GRID_SQUARE_PADDING) + 1; i++) {
    for (j = 0; j < originY / (GRID_SQUARE_HEIGHT + GRID_SQUARE_PADDING) + 1; j++) {
      coords.push([(GRID_SQUARE_WIDTH + GRID_SQUARE_PADDING) * i, (GRID_SQUARE_HEIGHT + GRID_SQUARE_PADDING) * j])
      if (i != 0) {
        coords.push([(GRID_SQUARE_WIDTH + GRID_SQUARE_PADDING) * -i, (GRID_SQUARE_HEIGHT + GRID_SQUARE_PADDING) * j])
      }
      if (j != 0) {
        coords.push([(GRID_SQUARE_WIDTH + GRID_SQUARE_PADDING) * i, (GRID_SQUARE_HEIGHT + GRID_SQUARE_PADDING) * -j])
      }
      if (i != 0 && j != 0) {
        coords.push([(GRID_SQUARE_WIDTH + GRID_SQUARE_PADDING) * -i, (GRID_SQUARE_HEIGHT + GRID_SQUARE_PADDING) * -j])
      }
    }
  }

  return coords
}

export const windowCoordToCenteredCoord = (xPos, yPos) => {
  const height = $(window).height();
  const width = $(window).width();
  const originY = height / 2;
  const originX = width / 2;
  return [xPos - originX, yPos - originY];
}

export const centeredCoordToWindowCoord = (xPos, yPos) => {
  const height = $(window).height();
  const width = $(window).width();
  const originY = height / 2;
  const originX = width / 2;
  console.log(xPos, yPos);
  return [xPos + originX, yPos + originY];
}
