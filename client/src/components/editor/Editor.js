import React, {useState} from "react";

import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

function Editor({value, setValue, modules, formats}) {
    return(
        <div>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />   
        </div>
    );
}

export default Editor;