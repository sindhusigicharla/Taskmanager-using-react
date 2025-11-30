import './Filters.css';

function Filters(props){
    return(
        <div>
            {/* Desktop / larger screens: button group */}
            <div className="filters">
                <button className="filter-item" onClick={()=>props.setFilter("ALL")}>ALL</button>
                <button className="filter-item" onClick={()=>props.setFilter("ACTIVE")}>ACTIVE</button>
                <button className="filter-item" onClick={()=>props.setFilter("COMPLETED")}>COMPLETED</button>
            </div>

            {/* Mobile-only: compact select dropdown */}
            <div className="filters-mobile">
                <label className="sr-only" htmlFor="mobile-filter">Filter tasks</label>
                <select id="mobile-filter" className="filter-select" value={props.currentFilter || 'ALL'} onChange={(e)=>props.setFilter(e.target.value)}>
                    <option value="ALL">All</option>
                    <option value="ACTIVE">Active</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;