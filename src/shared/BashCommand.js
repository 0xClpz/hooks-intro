import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";
import React from "react"

export const BashCommand = ({ children }) => (
  <SyntaxHighlighter language="bash" style={docco}>
    {children}
  </SyntaxHighlighter>
);
