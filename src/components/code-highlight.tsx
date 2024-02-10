import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeHighlightProps {
  language: string;
  code: string;
}
const customStyles = {
  fontFamily: "Roboto, sans-serif",
};
export default function CodeHighlight({ language, code }: CodeHighlightProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={customStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
}
