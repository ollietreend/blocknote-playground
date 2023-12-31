import { useState } from 'react';
import { BlockNoteEditor, Block } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import theme from './editor/theme';
import JsonHighlighter from './components/JsonHighlighter';

function App() {
  // Stores the editor's contents as an array of Block objects.
  const [blocks, setBlocks] = useState<Block[] | null>(null);

  // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) =>
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks),
  });

  // Renders the editor instance using a React component.
  return (
    <div className="container">
      <BlockNoteView editor={editor} theme={theme} />
      <JsonHighlighter data={blocks} />
    </div>
  );
}

export default App;
