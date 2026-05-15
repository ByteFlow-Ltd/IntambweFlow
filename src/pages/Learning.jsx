import React, { useState, useEffect } from 'react'; 
import { Plus, Trash2, Lightbulb, Search, BookMarked, Sparkles, CalendarDays } from 'lucide-react'; 
import '../styles/Learning.css'; 

const Learning = () => { 
  const [notes, setNotes] = useState(() => { 
    try {
      const saved = localStorage.getItem('intambwe_learning_flow'); 
      return saved ? JSON.parse(saved) : []; 
    } catch (error) {
      console.error("Error reading learning database:", error);
      return [];
    }
  }); 

  const [form, setForm] = useState({ title: '', category: 'Programming', content: '' }); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [activeTab, setActiveTab] = useState('All'); 

  useEffect(() => { 
    localStorage.setItem('intambwe_learning_flow', JSON.stringify(notes)); 
  }, [notes]); 

  const addNote = (e) => { 
    e.preventDefault(); 
    if (!form.title.trim() || !form.content.trim()) return; 
    const newNote = { ...form, id: Date.now(), date: new Date().toLocaleDateString() }; 
    setNotes([newNote, ...notes]); 
    setForm({ title: '', category: 'Programming', content: '' }); 
  }; 

  const deleteNote = (id) => { 
    setNotes(notes.filter(n => n.id !== id)); 
  }; 

  const filteredNotes = notes.filter(n => { 
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          n.content.toLowerCase().includes(searchTerm.toLowerCase()); 
    const matchesTab = activeTab === 'All' || n.category === activeTab; 
    return matchesSearch && matchesTab; 
  }); 

  const categories = ['Programming', 'Business', 'Language', 'Life']; 

  return ( 
    <div className="learning-pro-page"> 
      <div className="learning-wrapper"> 
        
        {/* Header Section */} 
        <header className="learning-header"> 
          <div className="header-left"> 
            <span className="pro-badge">Intellectual Growth</span> 
            <h1>Knowledge <span>Vault.</span></h1> 
            <p>Archive your daily insights and build a personal library.</p> 
          </div> 
          <div className="learning-summary"> 
            <div className="s-box"> 
              <BookMarked size={22} /> 
              <div className="s-text"> 
                <h3>{notes.length}</h3> 
                <span>Lessons</span> 
              </div> 
            </div> 
          </div> 
        </header> 

        {/* Input Form Section */} 
        <section className="l-form-section"> 
          <form className="pro-learning-form" onSubmit={addNote}> 
            <div className="form-top-row"> 
              <div className="input-field"> 
                <label>Concept / Title</label> 
                <input type="text" placeholder="e.g. React Context API" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required /> 
              </div> 
              <div className="input-field"> 
                <label>Category</label> 
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}> 
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)} 
                </select> 
              </div> 
            </div> 
            <div className="input-field"> 
              <label>Deep Insight</label> 
              <textarea placeholder="What is the core takeaway from this lesson?" value={form.content} onChange={e => setForm({...form, content: e.target.value})} required /> 
            </div> 
            <button type="submit" className="l-submit-btn"> 
              <Plus size={18} /> Archive Lesson 
            </button> 
          </form> 
        </section> 

        {/* Search & Tabs */} 
        <section className="filter-controls"> 
          <div className="search-box"> 
            <Search size={20} className="search-icon" /> 
            <input type="text" placeholder="Search through your insights..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /> 
          </div> 
          <div className="category-tabs"> 
            <button className={activeTab === 'All' ? 'active' : ''} onClick={() => setActiveTab('All')}>All</button> 
            {categories.map(cat => ( 
              <button key={cat} className={activeTab === cat ? 'active' : ''} onClick={() => setActiveTab(cat)} > 
                {cat} 
              </button> 
            ))} 
          </div> 
        </section> 

        {/* Content Grid */} 
        <div className="knowledge-grid"> 
          {filteredNotes.length === 0 && ( 
            <div className="empty-state-pro"> 
              <Sparkles size={40} /> 
              <p>Your vault is empty. Log your first lesson to start your journey.</p> 
            </div> 
          )} 
          {filteredNotes.map(note => ( 
            <div key={note.id} className="knowledge-card"> 
              <div className="k-card-header"> 
                <span className={`k-badge ${note.category.toLowerCase()}`}>{note.category}</span> 
                <button onClick={() => deleteNote(note.id)} className="k-delete" aria-label="Delete note"><Trash2 size={16} /></button> 
              </div> 
              <h3>{note.title}</h3> 
              <p>{note.content}</p> 
              <div className="k-card-footer"> 
                <div className="k-date"><CalendarDays size={14} /> {note.date}</div> 
                <div className="k-icon"><Lightbulb size={14} /></div> 
              </div> 
            </div> 
          ))} 
        </div> 

      </div> 
    </div> 
  ); 
}; 

export default Learning;
