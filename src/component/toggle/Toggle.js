import React, {useState} from "react";
import "./ToggleStyles.css";
// stateless functional component: ko su dung state

// function Toggle(){
//     return <div className="toggle"></div>
// }
    
// // stateful functional component: su dung state
// function Toggle2(){
//     // const [count, setCount] = useState()
//     return <div className="toggle"></div>
    
// }

function Toggle(){
    // 1. enabling state : useState(initialize)
    // 2. initialize state : useState(false)
    // 3. reading state :  
    // 4. update state :
    // const array = useState(false); // [false,function]
    // console.log(array);
    const [on,setOn] = useState(false);
    console.log(on);
    const handleToggle = () => {
        setOn((on) => {
            return !on;
        });
    }
    return (
        <div>
            <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
                <div className={`spinner ${on ? 'active' : ''}`}></div>
            </div>
        </div>
    )
}

export default Toggle;