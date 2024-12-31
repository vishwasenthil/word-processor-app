import './App.css';

import React, {useState} from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import {io} from "socket.io-client";

import Toolbar from "../toolbar/Toolbar.js";
import Editor from "../editor/Editor.js";

function App() {

  const [value, setValue] = useState("");

  const modules = {
    toolbar: {
      container: "#toolbar"
    }
  };
  const formats = ["bold", "italic", "underline", "list", "bullet", "link"];

  return (
    <div className="App">
      <Toolbar/>
      <Editor value={value} setValue={setValue} modules={modules} formats={formats}/>
      
    </div>
  );
}

export default App;
