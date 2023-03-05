import { useState } from 'react';
import '../Styles/ActionButton.css';

function ActionButton(props) {
    const [btn_content, setBtnContent] = useState("Submit");
    function handleClick(){
        if (btn_content === "Submit") {
            let text = document.getElementById("editor").value;
            const apiUrl = process.env.API_URL;
            fetch(`${apiUrl}/solve`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({"data": text})})
            .then((response) =>{
                return response.json()
            })
            .then((data) => {
                if(data.error ===""){
                    document.getElementById('solution-content').innerText = data.solution
                    document.getElementById('formulation-content').innerText = data.formulation
                    setBtnContent("Reset");
                }else{
                    props.setErrorMessage(data.error)
                }
            })
            .catch((e) =>{
                props.setErrorMessage("An error has occurred... Try again")
            })

        }else{
            document.getElementById("editor").value = "Enter your problem description here ...";
            document.getElementById('solution-content').innerText = ""
            document.getElementById('formulation-content').innerText = ""
            props.setErrorMessage("")
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
