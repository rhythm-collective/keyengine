import p5 from "p5";
import React from "react";

const s = (sketch: p5): void => {
  sketch.setup = (): void => {
    const canvas = sketch.createCanvas(710, 400, "webgl");
    canvas.parent("game");
  };

  sketch.draw = (): void => {
    const frameCount: number = sketch.frameCount;
    sketch.background(250);
    sketch.rotateY(frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
      sketch.push();
      for (let i = 0; i < 80; i++) {
        sketch.translate(
          sketch.sin(frameCount * 0.001 + j) * 100,
          sketch.sin(frameCount * 0.001 + j) * 100,
          i * 0.1
        );
        sketch.rotateZ(frameCount * 0.002);
        sketch.push();
        sketch.sphere(8, 6, 4);
        sketch.pop();
      }
      sketch.pop();
    }
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
