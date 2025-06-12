"use client"
import Highlight from 'react-highlight'
import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { copyToClipboard } from '@/utils/functions';
interface FileType {
    [key: string]: {
        language: string;
        content: string;
    }
}
const files: FileType = {
    "index.html": {
        language: "html",
        content: `
<!DOCTYPE html>
<html>
  <head><title>Hello</title></head>
  <body><script src="script.js"></script></body>
</html>
    `.trim(),
    },
    "style.css": {
        language: "css",
        content: `
body {
  background: #f5f5f5;
  font-family: Arial;
}
    `.trim(),
    },
    "script.js": {
        language: "javascript",
        content: `
function greet(name) {
  console.log("Hello, " + name);
}
greet("React");
    `.trim(),
    },
};

export default function CodeTabs() {
    const [activeTab, setActiveTab] = useState("index.html");
    // https://api.github.com/repos/yosefarafa103/quran-kareem/contents/src
    useEffect(() => {
        hljs.highlightAll();
    }, [activeTab]);
    const { content, language } = files[activeTab];
    return (
        <div style={{ padding: "2rem", background: "#fff", borderRadius: "8px" }}>
            {/* Tabs */}
            <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                {Object.keys(files).map((file) => (
                    <button
                        key={file}
                        onClick={() => setActiveTab(file)}
                        style={{
                            padding: "0.5rem 1rem",
                            background: activeTab === file ? "#007bff" : "#eee",
                            color: activeTab === file ? "#fff" : "#000",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        {file}
                    </button>
                ))}
            </div>
            <Highlight className={`${language} rounded-lg`}>
                {content}
            </Highlight>
            <button
                onClick={() => copyToClipboard(content)}
            >
                Copy
            </button>
        </div>
    );
}

