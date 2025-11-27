import './Clear.css';
function Clear(props){
    return(
        <div className="clear">
            <button className="clear-item"onClick={()=>props.setClear("COMPLETED")}>CLEAR COMPLETED</button>
            <button className="clear-item"onClick={()=>props.setClear("ALL")}>CLEAR ALL</button>
        </div>
    )
}
export default Clear;