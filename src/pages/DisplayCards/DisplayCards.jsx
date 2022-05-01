import React from 'react'
import Cards from './components/Cards'
import myStyleFront from './DisplayC.module.css'
import { connect } from 'react-redux';

class DisplayCards extends React.Component{
    constructor(props) {
        super(props);
            
        this.state = {
            //all_words:[{word:"A", meaning:"A"},{word:"B", meaning:"B"},{word:"C", meaning:"C"},{word:"D", meaning:"D"}], //default values 
            all_words:this.props.definitions.definitions,
            four_rnd_numbers: [0],
            one_rnd_number:0,
            stop:true,
            time:0,
            speed:600e3, // 10min
        }
        
    } 

    generate_four_rnd_numbers(){
        var arr= []
        var range=0
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
        if(this.state.all_words.length>=4){range=4}else{range=this.state.all_words.length}
        for(let i=1; i<=range; i++){
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

    shuffle_Cards(){// to send by props
       // console.log(this.state.all_words)
        this.take_four_rnd_words()
        setTimeout(() =>{
            this.main_card() // esta tomando el valor aleatorio del estado anterior? si pero, ahora no por el setTimeout
        }, 10)  
        
    }

    shuffle_Cards_btn(){
        // console.log(this.state.all_words)
         this.take_four_rnd_words()
         setTimeout(() =>{
             this.main_card() // esta tomando el valor aleatorio del estado anterior? si pero, ahora no por el setTimeout
         }, 10)  
         
         setTimeout(() =>{
         if(this.state.stop===true){
            this.setState({speed:5000})
            this.setState({stop:false})
         }else{
            this.setState({speed:600e3})  // stop = 1000
            this.setState({stop:true})                 
         }
        }, 10)
        
        setTimeout(() =>{
            this.componentDidMount()
        },20)
     }


    componentDidMount(){
        //this is the timer + shuffle cards automatically
        var vel =1000;
        const a =setInterval(()=>{
                if(this.state.stop===false){
                    this.setState(()=>{
                        const time = this.state.time + 1
                        return{time}
                    })
                    if ((1000*this.state.time) % this.state.speed === 0){this.shuffle_Cards()}// cada N segundos (speed) => shuffle_Cards
                }else{ clearInterval(a)}
            }, vel)
    
    }

    changeSpeed(e){
        console.log("changeSpeed: ", e.target.id)
        const speed = parseInt(e.target.id)*1000
        this.setState({speed: speed})
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
                       return <Cards key={i} word={this.state.all_words[i]["word"]} answer={this.state.all_words[this.state.one_rnd_number]["word"]} shuffle_Cards={this.shuffle_Cards.bind(this)}/>
                    })                   
                    }
                </div>

                <div className={myStyleFront.box3}>
                    <br /><br />
                    <h2>Speed</h2>
                    <label htmlFor='Regular' id='15' onClick={(e)=>{this.changeSpeed(e)}}><input type="radio" name="rate" id='Regular' value='Regular'/>Regular</label> <br />
                    <label htmlFor='Medium' id='10' onClick={(e)=>{this.changeSpeed(e)}}><input type="radio" name="rate" id='Medium' value='Medium'/>Medium</label> <br />
                    <label htmlFor='High'   id='5'onClick={(e)=>{this.changeSpeed(e)}}><input type="radio" name="rate" id='High' value='High'/>High</label> <br />
                </div>

                <div className={myStyleFront.box4}>
                    <h3>{this.state.time}s</h3>

                    <div className={myStyleFront.Container_Score}>
                        <div id='correct' className={myStyleFront.Correct_plays}>{`${this.props.score.correct}/${this.props.score.plays}`}</div>
                        <div id='incorrect' className={myStyleFront.Incorrect_plays}>{`${this.props.score.incorrect}/${this.props.score.plays}`}</div>
                    </div>
                    
                    <div className={myStyleFront.Container_Score}>
                        <div id='correct'>Correct</div>
                        <div id='incorrect' >Incorrect</div>
                    </div>

                    <button 
                            className={this.state.stop?myStyleFront.btn_dimension_start: myStyleFront.btn_dimension_stop} 
                            type="button" 
                            onClick={()=>{this.shuffle_Cards_btn()}}>{this.state.stop?'START':'STOP'}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        definitions: state.all_words,
        score: state.score,
    }
}

export default connect(mapStateToProps)(DisplayCards)