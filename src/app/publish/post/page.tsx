// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});

export default function Home() {
  const [content, setContent] = useState("");

  const handleEditorChange = (value:any) => {
    setContent(value);
  };

  return (
    <div>
      <h1>Nextjs 13 with tinymce editor</h1>
      <TinyMCE value={content} onChange={handleEditorChange} />
      <p>Content: {content}</p>
    </div>
  );
}
