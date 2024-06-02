import { useState } from "react";
import { uploadFile } from "../../utils/firebase.config";

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export const useDragAndDrop = () => {
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      setDrag(DRAG_IMAGE_STATES.UPLOADING);
      uploadFile(files[0])
        .then((url) => {
          setDrag(DRAG_IMAGE_STATES.COMPLETE);
        })
        .catch((error) => {
          setDrag(DRAG_IMAGE_STATES.ERROR);
        });
    }
  };

  return {
    drag,
    setDrag,
    handleDrag,
    handleDrop,
  };
}


