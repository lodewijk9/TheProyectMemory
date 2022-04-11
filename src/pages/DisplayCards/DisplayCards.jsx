import React from 'react'
import Cards from './components/Cards'
import myStyleFront from './DisplayC.module.css'

export default class DisplayCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            all_words:[{word:"A", meaning:"A"},{word:"B", meaning:"B"},{word:"C", meaning:"C"},{word:"D", meaning:"D"}], //default values
            four_rnd_numbers: [0,1,2,3],
            one_rnd_number:0,
        }
        
    } 

    generate_four_rnd_numbers(){
        var arr= []
        const generate_one_rnd_number = ()=>{
            var rnd = Math.floor(Math.random() *((this.state.all_words.length)-0)+0)
            const isRepeated = (ele)=>{return ele === rnd}
            if (arr.some(isRepeated)){
                //console.log('ya esta')
                generate_one_rnd_number();
            }else{
                arr.push(rnd)
            }    
        }
        for(let i=1; i<=4; i++){
            generate_one_rnd_number()
        }
        return arr
    }
    take_four_rnd_words(){
        // generate 4 rnd numbers and set the state
        var arr = this.generate_four_rnd_numbers();
        this.setState(()=>{
            const four_rnd_numbers = [...arr]
            return {four_rnd_numbers}
        })  
    }

    value_main_card(){
        var rnd = Math.floor(Math.random()*((this.state.four_rnd_numbers.length)-0)+0)// index
        var take_number_of_4_numbers = this.state.four_rnd_numbers[rnd]
          // console.log('valor: ', take_number_of_4_numbers)
        return take_number_of_4_numbers
    }

    main_card(){
        var rnd_number = this.value_main_card()
        //console.log('rnd: ',rnd_number)
        this.setState(()=>{
            const one_rnd_number = rnd_number
            return{one_rnd_number}
        })
    }

    shuffle_Cards(){
       // console.log(this.state.all_words)
        this.take_four_rnd_words()
        setTimeout(() =>{
            this.main_card() // esta tomando el valor aleatorio del estado anterior? si pero, ahora no por el setTimeout
        }, 100)
        
    }
    
    render() {
        return ( 
            <div className={myStyleFront.organizar}>

                <div className={myStyleFront.box1}>
                    <label id='palabra' className={myStyleFront.centrar}>{this.state.all_words[this.state.one_rnd_number]['meaning']}</label>
                </div>

                <div className={myStyleFront.box2}>
                    {
                    this.state.four_rnd_numbers.map(i=>{
                       return <Cards key={i} word={this.state.all_words[i]["word"]} answer={this.state.all_words[this.state.one_rnd_number]["word"]} />
                    })                   
                    }
                </div>

                <div className={myStyleFront.box3}>
                    <button type="button" onClick={()=>{this.shuffle_Cards()}}>Comenzar</button>
                </div>
                
            </div>
        );
    }
}
