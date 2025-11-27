
import Tasklist from '../tasklist/Tasklist';
import bodycss from './Body.css';
import { useState } from 'react';
import Filters from '../Filters/Filters';
import { useEffect } from 'react';
import Clear from '../clear/Clear';








function Body(){
    const [taskname, setTaskname] = useState("");
    const [filter, setFilter] = useState("ALL");
    const [clear, setClear] = useState("");
    const tasklist = JSON.parse(localStorage.getItem("tasklist"))||[];
    
    const[tasks, setTasks] = useState(tasklist);

    const deleteTask = (id) => {
        const updatedlist = tasks.filter((task)=> task.id !== id);
        localStorage.setItem("tasklist",JSON.stringify(updatedlist));
        setTasks(updatedlist);
    }
    function addTask(){
        const newtask = {
            id:new Date().getTime().toString(),
            name:taskname,
            iscompleted:false
        }
        tasklist.push(newtask);
        localStorage.setItem("tasklist",JSON.stringify(tasklist));
        setTasks(tasklist);
        setTaskname("");


    }

    function updateTask(id){
        const updatedList = tasks.map((task)=>{
            if(task.id===id){
                task.iscompleted = !task.iscompleted;
                return task;
            }
            return task;
        })
        localStorage.setItem("tasklist", JSON.stringify(updatedList));
        setTasks(updatedList);
    }
    function filterTasks(){
        const tasks = JSON.parse(localStorage.getItem("tasklist"))||[];
        if(filter==="ALL"){
            return tasks;
        }
        else if(filter==="ACTIVE"){
            return tasks.filter((task)=> !task.iscompleted);
        }
        else if(filter==="COMPLETED"){
            return tasks.filter((task)=> task.iscompleted);
        }
        else{
            return tasks;
        }
    }

    useEffect(()=>{setTasks(filterTasks())},[filter]);
    console.log(tasks);

    function cleartask(){
        if(clear==="ALL"){
            localStorage.removeItem("tasklist");
            setTasks([]);
    }else if(clear==="COMPLETED"){
        const tasks = JSON.parse(localStorage.getItem("tasklist"))||[];
        const updatedlist = tasks.filter((task)=> !task.iscompleted);
        localStorage.setItem("tasklist",JSON.stringify(updatedlist));
        setTasks(updatedlist);
    }
}    useEffect(()=>{cleartask()},[clear]);


    return(
        <div className = "body">
            <div className="task-input">
                <input type="text" placeholder="Add your task here..." className="input"
                value ={taskname} name="input"
                onChange={(e)=>setTaskname(e.target.value)}/>
                <button className="button"
                onClick={(e)=>addTask(e)}>Add Task</button>
            </div>
            <Tasklist tasklist={tasks} 
            deleteTask = {deleteTask}
            updateTask = {updateTask}
            />
            <div className='actions'>
                <Filters setFilter={setFilter}/>
                <Clear setClear={setClear}/>
            </div>
            

        </div>
    )
}
export default Body;