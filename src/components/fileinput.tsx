import React from "react";
import PropTypes from "prop-types";
import "./game.css";

const FileInput: React.FC<FileInputProps> = ({
  acceptedTypes = "*",
  label,
  id,
  onFilesUpdated
}) => {
  return (
    <div className="FileInput">
      <label htmlFor={id}>{label}</label>
      <input
        type="file"
        id={id}
        name={id}
        accept={acceptedTypes}
        onChange={onFilesUpdated}
      ></input>
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
