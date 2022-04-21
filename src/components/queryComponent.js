import React from "react";
import InputComponent from "./inputComponent";


const QueryC = (props)=>{
    return(
        <div className="contenedorQuery">
            <div className="contenidoQuery">
                <h2>Ingrese contenido de macronutriente deseado</h2>
                <InputComponent handle={props.handle} setter={props.setter} trip={props.trip} />
            </div>
        </div>
    )
}

export default QueryC;