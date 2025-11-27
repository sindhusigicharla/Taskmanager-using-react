import taskitemcss from './Taskitem.css';
import DeleteIcon from '@mui/icons-material/Delete';
function Taskitem(props) {
    function deleteTask(){
        props.deleteTask(props.taskitem.id);
    }   

    function updateTask(){
        props.updateTask(props.taskitem.id);
    }

    
    
    return(
        <div className='task-item'>
            <li>
                <input type="checkbox" checked={props.taskitem.iscompleted}
                onChange={(e)=>updateTask(e)}/>
                <span style={{textDecoration: props.taskitem.iscompleted ? "line-through" : "none"}}>{props.taskitem.name}</span>
                </li> 
            <div onClick= {(e)=>deleteTask(e)}
             className="delete-button"><DeleteIcon /></div>

        </div>
    )
}
export default Taskitem;