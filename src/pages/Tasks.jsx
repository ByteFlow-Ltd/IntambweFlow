import React, { useState, useEffect } from 'react'; 
import { Plus, Trash2, CheckCircle2, Circle, Target, Zap, ListChecks, Calendar } from 'lucide-react'; 
import '../styles/Tasks.css'; 

const Tasks = () => { 
  // 1. Gusoma amakuru akigera kuri page 
  const [tasks, setTasks] = useState(() => { 
    try { 
      const saved = localStorage.getItem('intambwe_tasks_flow'); 
      return saved ? JSON.parse(saved) : []; 
    } catch (error) { 
      console.error("Error reading tasks:", error); 
      return []; 
    } 
  }); 
  const [input, setInput] = useState(''); 

  // 2. Kubika amakuru muri LocalStorage buri gihe 'tasks' ihindutse 
  useEffect(() => { 
    localStorage.setItem('intambwe_tasks_flow', JSON.stringify(tasks)); 
  }, [tasks]); 

  const addTask = (e) => { 
    e.preventDefault(); 
    if (!input.trim()) return; 
    const newTask = { 
      id: Date.now(), 
      text: input, 
      done: false, 
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }; 
    setTasks(prevTasks => [newTask, ...prevTasks]); 
    setInput(''); 
  }; 

  const toggleTask = (id) => { 
    setTasks(prevTasks => prevTasks.map(t => t.id === id ? { ...t, done: !t.done } : t) ); 
  }; 

  const deleteTask = (id) => { 
    setTasks(prevTasks => prevTasks.filter(t => t.id !== id)); 
  }; 

  const doneCount = tasks.filter(t => t.done).length; 
  const progress = tasks.length > 0 ? Math.round((doneCount / tasks.length) * 100) : 0; 

  return ( 
    <div className="tasks-pro-page"> 
      <div className="tasks-wrapper"> 
        <header className="tasks-pro-header"> 
          <div className="header-left"> 
            <span className="status-badge">Action Required</span> 
            <h1>Daily <span>Missions.</span></h1> 
            <p>Execute your goals with precision and focus.</p> 
          </div> 
          <div className="tasks-summary-box"> 
            <div className="s-circular-progress" style={{ background: `conic-gradient(#facc15 ${progress * 3.6}deg, #0c0c0c 0deg)` }}> 
              <div className="s-inner-value"> 
                <h3>{progress}%</h3> 
              </div> 
            </div> 
            <div className="s-details"> 
              <span className="s-count">{doneCount}/{tasks.length}</span> 
              <span className="s-label">Completed</span> 
            </div> 
          </div> 
        </header> 

        <section className="mission-input-area"> 
          <form className="pro-task-form" onSubmit={addTask}> 
            <div className="input-glow-wrapper"> 
              <Zap size={20} className="input-icon" /> 
              <input type="text" placeholder="Assign your next mission..." value={input} onChange={(e) => setInput(e.target.value)} /> 
            </div> 
            <button type="submit" className="add-mission-btn"> 
              <Plus size={20} /> Deploy 
            </button> 
          </form> 
        </section> 

        <section className="mission-list-section"> 
          <div className="list-header"> 
            <h3><ListChecks size={20} /> Active Assignments</h3> 
            <span className="list-date"><Calendar size={14} /> Today</span> 
          </div> 
          <div className="mission-grid"> 
            {tasks.length === 0 ? ( 
              <div className="empty-mission"> 
                <Target size={48} /> 
                <p>No active missions. Standing by for instructions.</p> 
              </div> 
            ) : ( 
              tasks.map(task => ( 
                <div key={task.id} className={`mission-card ${task.done ? 'is-complete' : ''}`}> 
                  <button className="mission-check" onClick={() => toggleTask(task.id)} aria-label="Toggle mission status"> 
                    {task.done ? <CheckCircle2 className="icon-active" /> : <Circle />} 
                  </button> 
                  <div className="mission-content"> 
                    <p>{task.text}</p> 
                    <span className="m-time">{task.date}</span> 
                  </div> 
                  <button className="mission-delete" onClick={() => deleteTask(task.id)} aria-label="Delete mission"> 
                    <Trash2 size={18} /> 
                  </button> 
                </div> 
              )) 
            )} 
          </div> 
        </section> 
      </div> 
    </div> 
  ); 
}; 

export default Tasks;
