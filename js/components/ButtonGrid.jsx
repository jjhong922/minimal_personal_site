import { h, render, Component } from 'preact';
import { Button } from 'preact-material-components';
import { GRID_SQUARE_HEIGHT, GRID_SQUARE_WIDTH, THEME_COLORS, DEFAULT_COLOR, NAME_CARD_COORD, LINK_COORDS } from '../helper/constants';
import { getRandomInt, getCenteredGridSquareCoords, centeredCoordToWindowCoord, centeredCoordToUnitCoord, unitCoordToWindowCoord } from '../helper/helpers';
import { db } from '../firebase';

class GridSquare extends Component {
  constructor({ x, y }) {
    super();
    this.docRef = db.collection("grid-squares").doc(`gs-${x}-${y}`);
  }

  render({ x, y, colorID, numClicked, offline, offlineHandler, secret, incrementSecret }) {
    const bgColor = THEME_COLORS[colorID];
    const [xPos, yPos] = unitCoordToWindowCoord(x, y);
    const delay = getRandomInt(5);
    return (
      <Button
        className={`fixed-square grid-square delay-${delay}`}
        unelevated
        ripple
        width={GRID_SQUARE_WIDTH}
        height={GRID_SQUARE_HEIGHT}
        style={{
          left: xPos - GRID_SQUARE_WIDTH / 2,
            top: yPos - GRID_SQUARE_HEIGHT / 2,
            backgroundColor: bgColor
        }}
        onClick={() => {
          if (!offline) {
            this.docRef.set({ colorID: (colorID + 1) % THEME_COLORS.length, numClicked: numClicked + 1 });
          } else {
            offlineHandler(`gs-${x}-${y}`, (colorID + 1) % THEME_COLORS.length, numClicked + 1);
          }
          if (secret == 0 && x == 0 && y == -3) { console.log("weLcome to my hiDDen pUzzLe! gooD LUck!"); incrementSecret(); }
          if (secret == 1 && x == -2 && y == -2) { console.log("have yoU figUReD it oUt yet?"); incrementSecret(); }
          if (secret == 2 && x == -1 && y == -4) { console.log("oR DiD yoU jUst get LUcky?"); incrementSecret(); }
          if (secret == 3 && x == -1 && y == -5) { console.log("oh weLL, Dis is D enD. finD yoUR RewarD heRe!"); incrementSecret(); }
        }}
      />
    );
  }
}

export default class ButtonGrid extends Component {
  constructor() {
    super();
    this.state = {
      offline: false,
      loaded: false,
    }
    this.gsMap = new Map();
    db.collection("grid-squares").onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        this.gsMap.set(change.doc.id, change.doc.data());
      });
      this.setState({ loaded: true });
    },
    error => {
      this.setState({ offline: true, loaded: true });
    });
  }

  offlineHandler(squareID, colorID, numClicked) {
    this.gsMap.set(squareID, { colorID, numClicked });
    this.forceUpdate();
  }

  render({ secret, incrementSecret }, { offline, loaded }) {
    if (!loaded) return null;
    let gridCoords = getCenteredGridSquareCoords();
    let squares = [];
    for (let i = 0; i < gridCoords.length; i++) {
      const coord = gridCoords[i];
      const [x, y] = centeredCoordToUnitCoord(coord[0], coord[1]);
      let blocking = false;
      if (
        x >= NAME_CARD_COORD[0]
        && x <= NAME_CARD_COORD[0] + 6
        && y >= NAME_CARD_COORD[1]
        && y <= NAME_CARD_COORD[1] + 1
      ) {
        blocking = true;
      }
      for (let j = 0; j < LINK_COORDS.length; j++) {
        const [linkX, linkY] = LINK_COORDS[j];
        if (x >= linkX && x <= linkX + 1 && y >= linkY && y <= linkY + 1) blocking = true;
      }
      if (blocking) continue;

      let squareID = `gs-${x}-${y}`;
      let colorID = 0;
      let numClicked = 0;
      if (this.gsMap.has(squareID)) {
        colorID = this.gsMap.get(squareID).colorID;
        numClicked = this.gsMap.get(squareID).numClicked;
      };
      squares.push(<GridSquare
        key={squareID}
        x={x}
        y={y}
        colorID={colorID}
        numClicked={numClicked}
        offline={offline}
        offlineHandler={this.offlineHandler.bind(this)}
        secret={secret}
        incrementSecret={incrementSecret}
      />);
    }

    return (
      <div className="button-grid">
        {squares}
      </div>
    );
  }
}

