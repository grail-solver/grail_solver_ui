import { useState } from 'react';
import '../Styles/Formulation.css';
import '../Styles/common.css'

function Formulation() {

    const [class_name, setClassName] = useState("fas fa-expand-alt");
    function handleExpand(){
        if (class_name === "fas fa-compress-alt") {
            setClassName("fas fa-expand-alt");
        } else {
            setClassName("fas fa-compress-alt");
        }
    }
    return(
        <div id="bloc-2" className="processing bloc">
            <div className="heading">
                <p className="block-title">Formulation</p>
                <p className="expand"><span onClick={handleExpand} className={class_name}></span></p>
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}

export default Formulation