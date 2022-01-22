import React, { useState } from 'react';

const ToDo = (props) => {
    const [add, setAdd] = useState("");
    let [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, add]);
        setAdd({ add: "", isComplete: false });
    }

    const changeHandler = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value });
    }

    const toggleTask = (taskIndex) => {
        let [...allTasks] = tasks;
        allTasks[taskIndex].isComplete = !allTasks[taskIndex].isComplete;
        setTasks(allTasks);
    }

    const deleteTask = (oneTask) => {
        let newList = tasks.filter((add, i) => {
            return i != oneTask;
        })
        setTasks(newList);
    }

    return (
        <div>
            <div>
                <h2>Tasks:</h2>
                <form onSubmit={addTask}>
                    <label>Add a Task</label>
                    <br />
                    <input onChange={changeHandler} type="text" name="add"></input>
                </form>
                <button type="submit">Add</button>
            </div>
            <br />
            <br />
            <div>
                {
                    tasks.map((oneTask, i) => {
                        return (
                            <div key={i} style={{ textDecoration: oneTask.isComplete ? "line-through" : "" }}>
                                <p>{oneTask.add}</p>
                                <p><input onClick={() => toggleTask(i)} type="checkbox" name="" id="" /></p>
                                <p>{oneTask.isComplete == true ? "Completed! Great work" : "Not yet"}</p>
                                <p><button onClick={() => deleteTask(i)} className="btn btn-danger">Delete Task</button></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default ToDo;