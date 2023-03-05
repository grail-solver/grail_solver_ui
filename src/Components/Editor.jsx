/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import '../Styles/Editor.css';
import '../Styles/common.css'
import { ExpandContext } from './ExpandContext';


function Editor() {
    const [class_name, setClassName] = useState("fas fa-expand-alt");
    const [bloc_class_name, setBlocClassName] = useState("entry bloc");
    const { bloc_id, expand, setBlocId, setExpand } = useContext(ExpandContext);

    function handleExpand(){
        if (class_name === "fas fa-compress-alt") {
            setClassName("fas fa-expand-alt");
            setBlocId(0);
            setExpand(false)
        }else {
            setClassName("fas fa-compress-alt");
            setBlocId(1);
            setExpand(true)
        }
    }
    useEffect(() =>{
        if (bloc_id === 1 && expand) {
            setBlocClassName('entry bloc full');
        }else if (bloc_id !==1 && expand) {
            setBlocClassName('entry bloc d-none');
        }else if(bloc_id === 0){
            setBlocClassName("entry bloc")
        }
    }, [bloc_id, expand])

    return(
        <div id="bloc-1" className={bloc_class_name}>
            <div className="heading">
                <p className="block-title">Editor</p>
                <p className="expand"><span onClick={handleExpand} className={class_name}></span></p>
            </div>
            <div className="content">
                <textarea name="editor" id="editor" cols="30" rows="10">
                    Enter the problem description here ...
                </textarea>
            </div>
        </div>
    )
}

export default Editor