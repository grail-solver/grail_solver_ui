import { useState } from 'react';
import '../Styles/ActionButton.css';

function ActionButton() {
    const [btn_content, setBtnContent] = useState("Submit");
    function handleClick(){
        if (btn_content === "Submit") {
            let text = document.getElementById("editor").value;
            console.log(text);
            setBtnContent("Reset");
        } else {
            document.getElementById("editor").value = "Enter your problem description here ...";
            setBtnContent("Submit");
        }
    }
     return (
        <div className="buttons-container">
            <button className="submit-problem" onClick={handleClick}>{btn_content}</button>
        </div>
  );
}

export default ActionButton;
