import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DropzoneUpload = ({ onDrop, accept = "*", multiple = false, dropzoneClass = "" }) => {
  const handleDrop = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple
  });

  return (
    <div {...getRootProps()} className={`border-2 border-dashed p-4 cursor-pointer ${dropzoneClass}`}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};
