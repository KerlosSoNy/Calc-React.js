import { useState } from "react"
import './app.css'

export default function Calc(){
    let [result , setResult] = useState("")
    let [showScreen ,setShowScreen]= useState("")

    const getResult = ()=>{
        setResult(eval(showScreen))
    }

    const checkScreen = (value)=>{
    if(showScreen === ""){
        if( value >= 1 && value <= 9 || value === "."){
            if(value === ".")
            {
                setShowScreen(showScreen+ '0.')
            }else{
                setShowScreen(showScreen+ value)
            }
        }
    }else{
            setShowScreen(showScreen+ value)
    }
    }

    const checkSigns = (value)=>{
        if(value === "+" || value === "-" || value === "*" || value === "/" || value === "."){
            if(showScreen.at(-1)!== "+" && showScreen.at(-1)!== "-" && showScreen.at(-1)!== "*" && showScreen.at(-1)!== "/" && showScreen.at(-1)!== "."){
                checkScreen(value)
            }
        }else{
            checkScreen(value)
        }
    }
    return(
        <>
            <div className="container-fluid p-5 w-100 d-flex justify-content-center">
                <div className="Calc">
                    <div className="Screens">
                        <input type="text" disabled placeholder={showScreen} className="showScreen"/>
                        <input type="text" disabled placeholder={`= ${result || ""}`} className="showResult"/>
                    </div>
                    <div className="Buttons">
                        <div>
                            <button onClick={()=>setShowScreen([])} className="bg-warning">AC</button>
                            <button onClick={()=>checkSigns("/")}>/</button>
                            <button onClick={()=>checkSigns("*")}>*</button>
                            <button onClick={()=>setShowScreen(showScreen.slice(0,-1))}>&#8592;</button>
                        </div>
                        <div>
                            <button onClick={()=>checkSigns("7")}>7</button>
                            <button onClick={()=>checkSigns("8")}>8</button>
                            <button onClick={()=>checkSigns("9")}>9</button>
                            <button onClick={()=>checkSigns("-")}>-</button>
                        </div>
                        <div>
                            <button onClick={()=>checkSigns("4")}>4</button>
                            <button onClick={()=>checkSigns("5")}>5</button>
                            <button onClick={()=>checkSigns("6")}>6</button>
                            <button onClick={()=>checkSigns("+")}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>checkSigns("1")}>1</button>
                            <button onClick={()=>checkSigns("2")}>2</button>
                            <button onClick={()=>checkSigns("3")}>3</button>
                            <button onClick={()=>checkSigns(".")}>.</button>
                        </div>
                        <div className="Zero">
                            <button onClick={()=>checkSigns("0")} className="first">0</button>
                            <button onClick={()=>getResult(showScreen)}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}