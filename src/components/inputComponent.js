import React, {useRef} from "react";

const InputComponent = (props) => {
    const textInput = useRef(null)

    function handleClick(id) {
        props.handle(id);
  }

    return(
        <div>
            <input ref={textInput} onChange={() => props.setter(textInput.current.value)}>
            </input>
            <div className="col">
                <input
                className="ayuda-no-se"
                type="button"
                value="Proteina"
                onClick={() => { handleClick(1); props.trip('about');}}/>
                <input
                className="ayuda-no-se"
                type="button"
                value="Calorias"
                onClick={() => { handleClick(2); props.trip('about');}}/>
            </div>
            <div className="col">
            <input
                className="ayuda-no-se"
                type="button"
                value="Grasa"
                onClick={() => { handleClick(3); props.trip('about');}}/>
                <input
                className="ayuda-no-se"
                type="button"
                value="Carbohidratos"
                onClick={() => { handleClick(4); props.trip('about');}}/>
            </div>
        </div>
    )
}

export default InputComponent;