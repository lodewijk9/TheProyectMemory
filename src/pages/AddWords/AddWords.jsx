import React from "react";
import NewWord from "./components/NewWord";
import myStyle2 from  './style2.module.css'
// This is the parent component

export default class AddWords extends React.Component {

    render() {
        return ( 
            <div className={myStyle2.dimensions}>
                <h1 className={myStyle2.centrar}>AddWords+</h1>
                {<NewWord/>}
            </div>
            
        );
    }
}
