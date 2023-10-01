import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import monokai from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';

SyntaxHighlighter.registerLanguage('json', json);

const customStyle = {
  padding: '1.5rem',
};

function JsonHighlighter({ data }) {
  return (
    <SyntaxHighlighter
      language="json"
      style={monokai}
      customStyle={customStyle}
    >
      {JSON.stringify(data, null, 2)}
    </SyntaxHighlighter>
  );
}

export default JsonHighlighter;
