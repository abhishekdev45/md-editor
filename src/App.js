import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import {marked }from 'marked';

const App = () => {
  const [code, setCode] = useState(
    '# Markdown Editor\n\n* A list\n\nSome **bold** and _italic_ text\n\n> A quote...\n\nBy [Abhishek Rajbhar](https://abhishekdev45.vercel.app/)'
  );

  const updateCode = (newCode) => {
    setCode(newCode);
  };

  const preview = marked(code);

  return (
    <div className="example">
      <div className="hint">
        The editor is below, you can select different tools to create markdown. On the rightt you can see the live preview.
      </div>
      <div className='main'>
      <div className="editor">
        <MarkdownEditor value={code} height="80vh" onChange={updateCode}  enablePreview={false}/>
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </div>
  );
};

export default App;
