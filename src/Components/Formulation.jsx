/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import '../Styles/Formulation.css';
import '../Styles/common.css'
import { ExpandContext } from './ExpandContext';

function Formulation() {

    const [class_name, setClassName] = useState("fas fa-expand-alt");
    const [bloc_class_name, setBlocClassName] = useState("processing bloc");
    const { bloc_id, expand, setBlocId, setExpand } = useContext(ExpandContext);

    function handleExpand(){
        if (class_name === "fas fa-compress-alt") {
            setClassName("fas fa-expand-alt");
            setBlocId(0);
            setExpand(false)
        }else {
            setClassName("fas fa-compress-alt");
            setBlocId(2);
            setExpand(true)
        }
    }
    useEffect(()=>{
        if (bloc_id === 2 && expand) {
            setBlocClassName('processing bloc full');
        }else if (bloc_id !==2 && expand) {
            setBlocClassName('processing bloc d-none');
        }else if(bloc_id === 0){
            setBlocClassName("processing bloc")
        }
    }, [bloc_id, expand])

    return(
        <div id="bloc-2" className={bloc_class_name}>
            <div className="heading">
                <p className="block-title">Formulation</p>
                <p className="expand"><span onClick={handleExpand} className={class_name}></span></p>
            </div>
            <div className="content">
                <div id='formulation-content'>
                </div>
            </div>
        </div>
    )
}

export default Formulation