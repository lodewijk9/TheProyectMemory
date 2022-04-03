// sacar 2 txt uno para la palabra y otro para el significado

import { useState } from "react";
import myStyle1 from "../components/style1.module.css"

const NewWord = (props) => {

    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')
    const [words, setWords] = useState([])

    const addNewDefinitions = ()=>{
        const definition = {"word":word,"meaning":meaning}
        const dictionary = [...words, definition]
        setWords(dictionary)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        addNewDefinitions()

        setWord('')
        setMeaning('')
        
        document.getElementById("laWord").focus()
        console.log('Palabra guardada')
    }

    return ( 
        <div className={myStyle1.centrar}>
            
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" onChange={(e)=>setWord(e.target.value)}     value={word}   id="laWord"   placeholder="Palabra"/>
                <input type="text" onChange={(e)=>setMeaning(e.target.value)}  value={meaning}  placeholder="Significado" />
                <button className={myStyle1.color} type="submit">Guardar</button>
            </form>

        </div>
     );
}
 
export default NewWord;