import { useState } from 'react';
import '../Styles/Solution.css';
import '../Styles/common.css'

function Solution() {

    const [class_name, setClassName] = useState("fas fa-expand-alt");
    function handleExpand(){
        if (class_name === "fas fa-compress-alt") {
            setClassName("fas fa-expand-alt");
        } else {
            setClassName("fas fa-compress-alt");
        }
    }
    return(
        <div id="bloc-2" className="solution bloc">
            <div className="heading">
                <p className="block-title">Solution</p>
                <p className="expand"><span onClick={handleExpand} className={class_name}></span></p>
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}

export default Solution