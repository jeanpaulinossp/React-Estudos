import React from "react";
import { useEffect } from "react";

const Ex011Head = (props) => {
  useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};

export default Ex011Head;
