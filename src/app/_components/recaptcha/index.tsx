"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function Recaptcha() {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>("");

  const recaptchaRef = useRef(null);

  console.log("===recaptchaValue", recaptchaValue);

  const handleRecaptchaValueChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={(event) => handleRecaptchaValueChange(event)}
      />
    </div>
  );
}
