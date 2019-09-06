import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./game.css";
import Button from "react-bootstrap/Button";

const FileInput: React.FC<FileInputProps> = ({
  acceptedTypes = "*",
  label,
  id,
  onFilesUpdated
}) => {
  const inputFile = useRef(null);
  const onButtonClick = (): void => {
    inputFile.current.click();
  };

  return (
    <div className="FileInput">
      <input
        type="file"
        id={id}
        name={id}
        ref={inputFile}
        accept={acceptedTypes}
        onChange={onFilesUpdated}
        hidden
      />
      <Button variant="secondary" onClick={onButtonClick}>
        Browse
      </Button>
    </div>
  );
};

export interface FileInputProps {
  acceptedTypes?: string;
  label: string;
  id: string;
  onFilesUpdated: any;
}

FileInput.propTypes = {
  acceptedTypes: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onFilesUpdated: PropTypes.func.isRequired
};

export default FileInput;
