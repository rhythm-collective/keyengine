import p5 from "p5";
import React from "react";

const radius = 200;
const s = function(sketch: p5): void {
  sketch.setup = (): void => {
    const canvas = sketch.createCanvas(710, 400, "webgl");
    canvas.parent("game");
  };

  sketch.draw = (): void => {
    sketch.noStroke();
    sketch.background(0);
    const dirY = (sketch.mouseY / sketch.height - 0.5) * 4;
    const dirX = (sketch.mouseX / sketch.width - 0.5) * 4;
    sketch.directionalLight(204, 204, 204, dirX, dirY, 1);
    sketch.translate(-1.5 * radius, 0, 0);
    sketch.sphere(radius);
    sketch.translate(3 * radius, 0, 0);
    sketch.sphere(radius);
  };
};

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inFocus: false, myp5: new p5(s) };
  }

  public render(): React.ReactNode {
    return <div id="game" />;
  }
}

export default GameControl;
