import React from "react";
import NewWord from "./components/NewWord";
import myStyle2 from  './Add_words.module.css'
import Current_Def_style from './components/CurrentDefinition.module.css'

import CurrentDefinitions from "../AddWords/components/CurrentDefinitions";
// This is the parent component

import { delete_definition } from '../../redux/slices/all_words'
import { connect } from 'react-redux';

class AddWords extends React.Component {

    constructor(props) {
        super(props);
        this.deleteDefinition = this.deleteDefinition.bind(this)
        this.state = {
            definitions: this.props.definitions.definitions
        }
    }
    // ---Re-renderizado al recibir props del store redux---
    componentWillReceiveProps(nextProps) {
        if (this.props.definitions.definitions !== nextProps.definitions.definitions) {
            this.setState({
                definitions: nextProps.definitions.definitions,
            });
        }
    }

    deleteDefinition(index){
        this.props.delete_definition(index)
    }

    render() {
        return ( 
            <div className={myStyle2.dimensions}>
                <h1 className={myStyle2.centrar}>AddWords+</h1>
                {<NewWord/>}
                
                <div className={Current_Def_style.divContent}>
                    <select className="form-select" multiple aria-label="multiple select example" >
                        {
                        this.state.definitions.map((definition, index) =>{
                                return <CurrentDefinitions key={index} value={index} word={definition.word} meaning={definition.meaning} deleteDefinition={this.deleteDefinition} />
                        })
                        }
                    </select>
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
const mapDispatchToProps = (dispatch) =>{
    return {
        delete_definition: (index) => dispatch(delete_definition(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWords)