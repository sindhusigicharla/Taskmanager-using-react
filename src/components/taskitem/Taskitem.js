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
            <li className='task-i'>
                <input type="checkbox" checked={props.taskitem.iscompleted}
                onChange={(e)=>updateTask(e)} style={{marginRight:'10px'}}/>
                <span style={{textDecoration: props.taskitem.iscompleted ? "line-through" : "none", margin:'10px'}}>{props.taskitem.name}</span>
                <div onClick= {(e)=>deleteTask(e)}
             className="delete-button" style={{marginRight:'10px'}}><DeleteIcon /></div>
                </li> 
            

        </div>
    )
}
export default Taskitem;