// sacar 2 txt uno para la palabra y otro para el significado

import { useState, useEffect } from "react";
import myStyle1 from "../components/New_Word.module.css"
import { useDispatch, useSelector } from "react-redux";
import { new_definition } from '../../../redux/slices/all_words'

const NewWord = (props) => {
    const { definitions }  = useSelector((state) => state.all_words || [] ) // destructure definition from store and then from all_words
    const dispatch = useDispatch() // execute the reducers on the slices

    const [rerender, setRerender] = useState(false); // forzar render
    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')

    const addNewDefinitions = ()=>{
        const definition = {"word":word,"meaning":meaning}
        dispatch(new_definition(definition))
        setRerender(!rerender)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addNewDefinitions()
        setWord('')
        setMeaning('')

        //alert('Definition saved successfully')

        document.getElementById('laWord').focus()
    }

    
    useEffect(()=>{
        console.log(definitions)
    },[rerender]) // Forzar renderizado
    
    return ( 
        <div className={myStyle1.centrar}>
            
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" onChange={(e)=>setWord(e.target.value)}     value={word}   id="laWord"   placeholder="Word"/>
                <input type="text" onChange={(e)=>setMeaning(e.target.value)}  value={meaning}  placeholder="Meaning" />
                <button className={myStyle1.color} type="submit">SAVE</button>
            </form>

        </div>
     );
}

 
export default NewWord;