import filtercss from './Filters.css';
function Filters(props){
    return(
        <div className="filters">
            <button className="filter-item" onClick={()=>props.setFilter("ALL")}>ALL</button>
            <button className="filter-item" onClick={()=>props.setFilter("ACTIVE")}>ACTIVE</button>
            <button className="filter-item" onClick={()=>props.setFilter("COMPLETED")}>COMPLETED</button>
        </div>
    )
}
export default Filters;