import React from 'react'
import Cards from './components/Cards'
import myStyleFront from './front.module.css'

export default class DisplayCards extends React.Component{
    // definir estados
    // recibir array of cards 
    constructor(props) {
        super(props);
        this.state = {
            words: ['hola', 'soy ', 'un ', 'mensaje']
        }
    }

    shuffle_Cards(){
       

    }

    render() {
        return ( 
            <div className={myStyleFront.organizar}>

                <div className={myStyleFront.box1}>
                    <label id='palabra' className={myStyleFront.centrar}>3</label>
                </div>

                <div className={myStyleFront.box2}>
                    <Cards words={this.state.words} />
                </div>

                <div className={myStyleFront.box3}>
                    <button type="button" onClick={()=>{this.shuffle_Cards()}}>Comenzar</button>
                </div>
                
            </div>
        );
    }
}

// const DisplayCards = () => {
    
//     function shuffle_Cards(){
//         alert ('presionate boton ')
//     }
//     return ( 
  
//             <div className={myStyleFront.organizar}>

//                 <div className={myStyleFront.box1}>
//                     <label id='palabra' className={myStyleFront.centrar}>3</label>
//                 </div>

//                 <div className={myStyleFront.box2}>
//                     <Cards/>
//                 </div>

//                 <div className={myStyleFront.box3}>
//                     <button type="button" onClick={()=>{shuffle_Cards()}}>Comenzar</button>
//                 </div>
                
//             </div>
//      );
// }
 
// export default DisplayCards;
 
