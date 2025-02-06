import { md } from "../../lib/markdown";
import "./MarkdownParser.css";

const MarkdownParser = ({ content }) => {
  const renderedContent = md.render(content);

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

export default MarkdownParser;
