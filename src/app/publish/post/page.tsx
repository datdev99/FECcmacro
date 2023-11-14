"use client"

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';

const length = 14;
const factor = 20;

const fontSizes = new Array(length).fill(0).map((el, index) => (index + 1) * factor + 'px');

const Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizes;
Quill.register(Size, true);

const Editor = (props:any) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html:any) => {
        setEditorHtml(html);
    }
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      console.log("editorHtml");
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <ReactQuill
              style={{
                  height: '400px',
                  width: '1200px',
                  backgroundColor: 'white',
              }}
              onChange={handleChange}
              value={editorHtml}
              modules={Editor.modules}
              formats={Editor.formats}
              placeholder={props.placeholder}
            />
            <button type="submit">Click</button>
          </form>
        </>
    );
}

Editor.modules = {
  toolbar: {
    container: [
      [ { 'header': [ 1, 2, 3, false ] }, { 'font': [] } ],
      [ { 'size': [] } ],
      [ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
      [ { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' },
        { 'indent': '+1' } ],
      [ 'link', 'image', 'video','icon' ]
    ]
  },
    clipboard: {
        matchVisual: false,
    }
}

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video','icon'
]

export default Editor;