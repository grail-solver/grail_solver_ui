import { useState } from 'react';
import '../Styles/ActionButton.css';

function ActionButton(props) {
    const [btn_content, setBtnContent] = useState("Submit");
    function handleClick(){
        if (btn_content === "Submit") {
            let text = document.getElementById("editor").value;
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(apiUrl)
            fetch(`${apiUrl}/solver/resolve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"problem": text})})
            .then((response) =>{
                return response.json()
            })
            .then((data) => {
                if(data.message === "OK"){
                    display_solutions(data.solutions, data.opt)
                    display_problem_formulation(data.model_data)
                    setBtnContent("Reset");
                }else if(data.message !== undefined){
                    props.setErrorMessage(data.message)
                }
                else{
                    props.setErrorMessage(data.detail)
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

    function display_solutions(solutions, opt){
        let to_display = ""
        let var_name = ""
        let value = ""
        if(opt.length === 0){
            for(let i=0; i < solutions.length; i++){
                to_display += "<strong>Solution "+(i+1)+"</strong><br>";
                for(const elmt of solutions[i]){
                    var_name = elmt['var_name']
                    value = elmt['value']
                    to_display += "Variable: "+var_name+"&nbsp;&nbsp;&nbsp; Valeur: "+value+"<br>";
                }
                to_display += "<hr>";
            }
        }else{
            to_display += "<strong>Solution optimale</strong><br>";
            for(let i=0; i < solutions.length; i++){
                if(i=== solutions.length -1 )
                    to_display += "<br>Objective value: "+solutions[i]["objective_value"];
                else{
                    to_display += "Variable: "+solutions[i]["var_name"]+"&nbsp;&nbsp;&nbsp; Valeur: "+solutions[i]["value"];
                }
            }
        }
        
        document.getElementById('solution-content').innerHTML = to_display

    }

    function display_problem_formulation(data) {
        let to_display = "<strong>Variables:</strong><br>"
        let variables = data.v
        let ct = data.ct
        to_display += "<strong>Variables</strong><br>";
        for(const element of variables){
            let var_name = element['var_name']
            let var_domain = element['var_domain']
            to_display += "Variable: "+var_name+"&nbsp;&nbsp;&nbsp; Domaine: "+var_domain[0]+" - "+var_domain[1]+"<br>";
        }
        to_display += "<hr>";
        to_display += "<strong>Contraintes:</strong><br>"
        for(let i=0; i < ct.length; i++){
            to_display += "C_"+(i+1)+": "+ct[i]+"<br>";
        }
        document.getElementById('formulation-content').innerHTML = to_display
        
    }

     return (
        <div className="buttons-container">
            <button className="submit-problem" onClick={handleClick}>{btn_content}</button>
        </div>
  );
}

export default ActionButton;
