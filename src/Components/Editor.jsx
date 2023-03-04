import { useState } from 'react';
import '../Styles/Editor.css';
import '../Styles/common.css'

function Editor() {
    const [class_name, setClassName] = useState("fas fa-expand-alt");
    function handleExpand(){
        if (class_name === "fas fa-compress-alt") {
            setClassName("fas fa-expand-alt");
        } else {
            setClassName("fas fa-compress-alt");
        }
    }
    return(
        <div id="bloc-1" className="entry bloc">
            <div className="heading">
                <p className="block-title">Editor</p>
                <p className="expand"><span onClick={handleExpand} className={class_name}></span></p>
            </div>
            <div className="content">
                <textarea name="editor" id="editor" cols="30" rows="10">
                    Enter your problem description here ...
                </textarea>
            </div>
        </div>
    )
}

export default Editor