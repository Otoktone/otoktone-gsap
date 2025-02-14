import React from "react";

/**
 * Splits a text into individual characters and wraps them in <span> elements.
 * @param text The text to split into letters.
 * @param className The CSS class to apply to each letter (default is 'letter').
 * @returns An array of <span> elements containing the separated letters.
 */
export const splitText = (text: string, className: string = "letter") =>
  text
    ? text.split("").map((char, index) => (
        <span key={index} className={className}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    : null;
