"use client";

import { useState } from "react";
import InputMask from "react-input-mask";
import { Recaptcha, ThemeChanger } from "./_components";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState("");

  const onChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <main className={styles.main}>
      <span>Hello world</span>
      <div>
        <ThemeChanger />
      </div>
      <div className={styles.inputContainer}></div>
      <InputMask
        mask="999.999.999-99"
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
      ></InputMask>
      <Recaptcha />
    </main>
  );
}
