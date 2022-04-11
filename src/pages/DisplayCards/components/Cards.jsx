import myStyleCard from './cardStyle.module.css'


const Cards = (props) => {
    const {word, answer} = props;

    const print=()=>{
        console.log(word===answer? "CORRECTO":"SIGUE INTENTANDO")
    }
    
    return ( 
            <button className={myStyleCard.dimension} key={word} onClick={print}>{word}</button>
     );
}
 
export default Cards;