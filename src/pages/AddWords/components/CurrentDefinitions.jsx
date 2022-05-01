

const CurrentDefinitions = (props) => {
    
    const { value, word, meaning, deleteDefinition }=props;

    return ( 
            <option value={value} onDoubleClick={()=> deleteDefinition(value)}>{`${word} =  ${meaning}`}</option>
     );
}
 
export default CurrentDefinitions;