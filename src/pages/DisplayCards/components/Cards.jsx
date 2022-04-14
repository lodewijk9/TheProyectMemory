import myStyleCard from './cardStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Action_plays, Action_incorrect, Action_correct } from '../../../redux/slices/score';  // Actions on the score

const Cards = (props) => {
    const {word, answer, shuffle_Cards} = props;
    const dispatch = useDispatch()
    const { plays, incorrect, correct } = useSelector((state) => state.score)


    const Action=()=>{
        //console.log(word===answer? "CORRECTO":"SIGUE INTENTANDO")
        
        if (word === answer) {
            dispatch(Action_correct())
        }else{
            dispatch(Action_incorrect())
        }
        setTimeout(() =>{ shuffle_Cards()}, 5)
       
        dispatch(Action_plays())

        console.log(plays, ' ', incorrect, ' ', correct)
    }
    
    return ( 
            <button className={myStyleCard.dimension} key={word} onClick={Action}>{word}</button>
     );

}
 
export default Cards;