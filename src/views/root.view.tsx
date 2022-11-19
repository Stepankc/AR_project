import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./root.module.scss";
import Record from "../utils/record";

export const RootView: FunctionComponent = () => {
  const ref = useRef<HTMLVideoElement>();

  useEffect(() => {
    Record.startService(ref.current!);
  }, []);

  return (
    <video
      className={styles.ar__video}
      autoPlay={true}
      preload="none"
      ref={ref}
    />
  );
};
