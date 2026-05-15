import React, { useState, useEffect } from 'react'; 
import { Plus, Trash2, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, PieChart, History } from 'lucide-react'; 
import '../styles/Finance.css'; 

const Finance = () => { 
  const [records, setRecords] = useState(() => { 
    try {
      const saved = localStorage.getItem('intambwe_finance_flow'); 
      return saved ? JSON.parse(saved) : []; 
    } catch (error) {
      console.error("Error reading finance storage:", error);
      return [];
    }
  }); 

  const [form, setForm] = useState({ title: '', amount: '', type: 'Expense' }); 

  useEffect(() => { 
    localStorage.setItem('intambwe_finance_flow', JSON.stringify(records)); 
  }, [records]); 

  const addRecord = (e) => { 
    e.preventDefault(); 
    if (!form.title || !form.amount) return; 
    setRecords([{ ...form, id: Date.now(), date: new Date().toLocaleDateString() }, ...records]); 
    setForm({ title: '', amount: '', type: 'Expense' }); 
  }; 

  const income = records.filter(r => r.type === 'Income').reduce((a, b) => a + Number(b.amount), 0); 
  const expense = records.filter(r => r.type === 'Expense').reduce((a, b) => a + Number(b.amount), 0); 
  const balance = income - expense; 

  return ( 
    <div className="finance-pro-page"> 
      <div className="finance-wrapper"> 
        
        {/* Header Section */} 
        <header className="finance-header"> 
          <div className="f-title"> 
            <span className="pro-tag">Financial Hub</span> 
            <h1>Manage your <span>Wealth.</span></h1> 
          </div> 
          <div className="f-balance-card"> 
            <div className="b-icon"><Wallet size={24} /></div> 
            <div className="b-info"> 
              <p>Total Balance</p> 
              <h2 className={balance >= 0 ? 'text-yellow' : 'text-danger'}> 
                {balance.toLocaleString()} <small>RWF</small> 
              </h2> 
            </div> 
          </div> 
        </header> 

        {/* Stats Summary Cards */} 
        <div className="finance-stats-grid"> 
          <div className="f-stat-card income-card"> 
            <div className="s-icon"><ArrowUpRight /></div> 
            <div className="s-data"> 
              <p>Total Income</p> 
              <h3>+{income.toLocaleString()}</h3> 
            </div> 
          </div> 
          <div className="f-stat-card expense-card"> 
            <div className="s-icon"><ArrowDownRight /></div> 
            <div className="s-data"> 
              <p>Total Expenses</p> 
              <h3>-{expense.toLocaleString()}</h3> 
            </div> 
          </div> 
          <div className="f-stat-card ratio-card"> 
            <div className="s-icon"><PieChart /></div> 
            <div className="s-data"> 
              <p>Expense Ratio</p> 
              <h3>{income > 0 ? Math.round((expense/income)*100) : 0}%</h3> 
            </div> 
          </div> 
        </div> 

        {/* Entry Form */} 
        <section className="f-form-section"> 
          <form className="pro-finance-form" onSubmit={addRecord}> 
            <div className="input-group"> 
              <div className="input-field"> 
                <label>Description</label> 
                <input type="text" placeholder="e.g. Salary, Rent, Food" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required /> 
              </div> 
              <div className="input-field"> 
                <label>Amount (RWF)</label> 
                <input type="number" placeholder="0.00" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} required /> 
              </div> 
              <div className="input-field"> 
                <label>Transaction Type</label> 
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}> 
                  <option value="Expense">Expense (-)</option> 
                  <option value="Income">Income (+)</option> 
                </select> 
              </div> 
            </div> 
            <button type="submit" className="f-submit-btn"><Plus size={18}/> Track Transaction</button> 
          </form> 
        </section> 

        {/* History Section */} 
        <section className="f-history-section"> 
          <div className="h-header"> 
            <h3><History size={20}/> Recent Transactions</h3> 
          </div> 
          <div className="f-records-container"> 
            {records.length === 0 && <p className="empty-state">No transactions recorded yet.</p>} 
            {records.map(r => ( 
              <div key={r.id} className="f-record-item"> 
                <div className={`f-type-indicator ${r.type.toLowerCase()}`}> 
                  {r.type === 'Income' ? <TrendingUp size={16}/> : <TrendingDown size={16}/>} 
                </div> 
                <div className="f-item-details"> 
                  <h4>{r.title}</h4> 
                  <span>{r.date}</span> 
                </div> 
                <div className="f-item-right"> 
                  <span className={`f-amount ${r.type.toLowerCase()}`}> 
                    {r.type === 'Income' ? '+' : '-'}{Number(r.amount).toLocaleString()} 
                  </span> 
                  <button className="f-delete-btn" onClick={() => setRecords(records.filter(x => x.id !== r.id))} aria-label="Delete record"> 
                    <Trash2 size={16}/> 
                  </button> 
                </div> 
              </div> 
            ))} 
          </div> 
        </section> 
      </div> 
    </div> 
  ); 
}; 

export default Finance;
