import { useState } from "react";

const ShowHide = () =>{
    const [show, setShow] = useState(false);
    const showNow = () =>{
        setShow(true)
    }

    const hideNow = () =>{
        setShow(false);
    }
    return(
        <>
            <div className="count">
                <button onClick={showNow}>Show</button>
                <button onClick={hideNow}>Hide</button>
                {
                    show && <h1>Hello!, React Learner</h1>
                }
            </div>
        </>
    )
};


export default ShowHide