import layout from "../assets/ui/layout.json";
import p5 from "p5";
import uuid from "uuid/v4";

let contextCurrentRoot = -1;

interface Node {
  label: string;
  id: number;
}

type Tree<Node> = {
  value: Node;
  children: Tree<Node>[];
};

let cacheRoots: Array<Tree<Node>>;
let currentNode: Tree<Node>;

export const Context = (): Tree<Node> => {
  return cacheRoots[contextCurrentRoot];
};

export const SetContext = (contextId: number): void => {
  contextCurrentRoot = contextId;
};

export type window = {
  label: string;
  fill: number;
} & Node;

export const Window = (label: string, fill: number): void => {
  const newWindow: window = {
    label: label,
    fill: fill,
    id: uuid()
  };

  currentNode = Context();
  currentNode.value = newWindow;
};
