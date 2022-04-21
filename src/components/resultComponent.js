import React from "react";

const ResultComponent = (props) =>{
    
    function listBuild () {
        const lista = props.ingredientes.map((d) => <li key={d}>{d}</li> );
        return(
            <div>
                {lista}
            </div>
        );
    }

    return(
        <div className="contenedorResult">
            <h1>Recomendacion</h1>
            <div className="contenidoResult">
                <div className="col">
                    <div className="row">
                        <div className="col"> <h3>Recomendacion:</h3>
                        <h4>{props.titulo}</h4> </div>
                    </div>
                    <div className="row">
                    <div className="col">
                         <b>Informacion Nutrimental</b>
                         <div className="row">
                             <div className="col">
                                 <p>Calorias: {props.calorias}</p>
                             </div>
                             <div className="col">
                                 <p>Proteina: {props.proteina}</p>
                             </div>
                             <div className="col">
                                 <p>Grasa: {props.grasa} </p>
                             </div>
                             <div className="col">
                                 <p>Carbohidratos: {props.carbs} </p>
                             </div>
                         </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Ingredientes: {listBuild()} </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col btn">
                                <div className="btn" onClick={()=>{props.click('start')}}>Regresar</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultComponent;