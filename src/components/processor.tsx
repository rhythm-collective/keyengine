import React, { useState } from "react";
import PropTypes from "prop-types";
import "./game.css";
import FileInput from "./fileinput";
import f from "../modules/processor";
import { log } from "util";

interface ContentList {
  list: string[];
}

const ContentList: React.FC<ContentList> = ({ list }) => {
  const listItems = list.map(item => <li key={item}>{item}</li>);
  return <ul>{listItems}</ul>;
};

ContentList.propTypes = {
  list: PropTypes.array
};

const Processor: React.FC = () => {
  const [fileList, setFileList] = useState(["Default"]);

  const handleAndProcessFiles = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    log(e.currentTarget.value);
    f();
    setFileList(["got here", "a few times"]);
  };

  return (
    <div className="Game">
      <FileInput
        id="process"
        label="Do some facy shit!"
        onFilesUpdated={handleAndProcessFiles}
      />
      <ContentList list={fileList} />
    </div>
  );
};

export default Processor;
