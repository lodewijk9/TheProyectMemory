import myStyleCard from './cardStyle.module.css'
import { useState } from 'react'

const Cards = (props) => {

    const {words} = props

    const [misNumeros, setmisNumeros] = useState([])

    const [n, setN] = useState([])

    const rnd_Numbers = ()=>{
        setN([])
        setN(Array.from(Array(words.length)).map(x=>parseInt(Math.random()* (words.length - 0) + 0)))
    }



    return ( 
        <div>
            <button className={myStyleCard.dimension}>{words[n[0]]}</button>
            <button className={myStyleCard.dimension}>{words[n[1]]}</button>
            <button className={myStyleCard.dimension}>{words[n[2]]}</button>
            <button className={myStyleCard.dimension}>{words[n[3]]}</button>

            <button onClick={()=>rnd_Numbers()} >rnd</button>

        </div>
     );
}
 
export default Cards;