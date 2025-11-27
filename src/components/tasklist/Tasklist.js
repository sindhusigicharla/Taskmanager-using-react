import Taskitem from '../taskitem/Taskitem';
import tasklistcss from './Tasklist.css';

function Tasklist(props) {
    return(
        <div className="task-list">
            <ul>
                {props.tasklist.map(task => <li key={task.id}><Taskitem key={task.id}taskitem={task}
                deleteTask={props.deleteTask}
                updateTask={props.updateTask} /></li>)}
                
                
                
            </ul>
            
        </div>
        
    )

}
export default Tasklist;