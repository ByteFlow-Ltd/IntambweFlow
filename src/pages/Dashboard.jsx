import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wallet, BookOpen, Target, ArrowUpRight, ArrowDownRight, 
  Zap, Plus, Calendar, ChevronRight, Activity, CheckSquare, Clock 
} from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    tasks: { total: 0, done: 0, percent: 0 },
    finance: { balance: 0, income: 0, expense: 0 },
    learning: 0,
    recentActivity: []
  });

  useEffect(() => {
    // Gukura amakuru muri LocalStorage
    const savedTasks = JSON.parse(localStorage.getItem('intambwe_tasks_flow')) || [];
    const savedFin = JSON.parse(localStorage.getItem('intambwe_finance_flow')) || [];
    const savedLearn = JSON.parse(localStorage.getItem('intambwe_learning_flow')) || [];

    const done = savedTasks.filter(t => t.done).length;
    const taskPercent = savedTasks.length > 0 ? Math.round((done / savedTasks.length) * 100) : 0;

    const inc = savedFin.filter(r => r.type === 'Income').reduce((a, b) => a + Number(b.amount), 0);
    const exp = savedFin.filter(r => r.type === 'Expense').reduce((a, b) => a + Number(b.amount), 0);

    // Kuvanga amakuru aheruka gukorwa (Recent Activity)
    const formattedTasks = savedTasks.map(t => ({ ...t, actType: 'task', title: t.text || t.title }));
    const formattedFin = savedFin.map(f => ({ ...f, actType: 'finance', title: `${f.category} (${f.type})` }));
    const formattedLearn = savedLearn.map(l => ({ ...l, actType: 'learning', title: l.title || l.topic }));

    const allActivity = [...formattedTasks, ...formattedFin, ...formattedLearn]
      .sort((a, b) => b.id - a.id)
      .slice(0, 4);

    setStats({
      tasks: { total: savedTasks.length, done, percent: taskPercent },
      finance: { balance: inc - exp, income: inc, expense: exp },
      learning: savedLearn.length,
      recentActivity: allActivity
    });
  }, []);

  return (
    <div className="pro-dashboard">
      <div className="dash-wrapper">
        
        {/* TOP SECTION: Welcome & Analytics Summary */}
        <header className="dash-header">
          <div className="header-left">
            <span className="pro-badge">Performance Mode</span>
            <h1>Intambwe<span>Flow</span> Dashboard</h1>
            <p>Welcome back! You have <strong>{stats.tasks.total - stats.tasks.done}</strong> pending tasks for today.</p>
          </div>
          <div className="header-right">
            <div className="date-pill">
              <Calendar size={18} />
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </header>

        {/* STATS GRID: Main Indicators */}
        <div className="stats-grid">
          <div className="stat-card yellow-border">
            <div className="stat-icon-wrapper yellow-bg"><Target /></div>
            <div className="stat-content">
              <p className="stat-label">Productivity</p>
              <h2 className="stat-value">{stats.tasks.percent}%</h2>
              <div className="stat-progress-bar">
                <div className="stat-progress-fill" style={{ width: `${stats.tasks.percent}%` }}></div>
              </div>
            </div>
          </div>

          <div className="stat-card white-border">
            <div className="stat-icon-wrapper white-bg"><Wallet /></div>
            <div className="stat-content">
              <p className="stat-label">Net Balance</p>
              <h2 className="stat-value">{stats.finance.balance.toLocaleString()} <small>RWF</small></h2>
              <div className="cash-flow-stats">
                <span className="c-in"><ArrowUpRight size={14}/> {stats.finance.income.toLocaleString()}</span>
                <span className="c-out"><ArrowDownRight size={14}/> {stats.finance.expense.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="stat-card yellow-border">
            <div className="stat-icon-wrapper yellow-bg"><BookOpen /></div>
            <div className="stat-content">
              <p className="stat-label">Knowledge Vault</p>
              <h2 className="stat-value">{stats.learning} <small>Entries</small></h2>
              <p className="stat-subtitle"><Zap size={14} /> Building momentum...</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Trends & Quick Actions */}
        <div className="dash-main-grid">
          <div className="trends-container">
            <div className="section-title">
              <h3><Activity size={20} /> Weekly Productivity</h3>
              <button className="view-more" onClick={() => navigate('/report')}>
                View Report <ChevronRight size={16}/>
              </button>
            </div>
            
            <div className="visual-chart">
              {[40, 70, 45, 95, 65, 80, 50].map((h, i) => (
                <div key={i} className="chart-column">
                  <div className="bar" style={{ height: `${h}%` }}>
                    <div className="bar-tooltip">{h}%</div>
                  </div>
                  <span className="bar-label">{['M','T','W','T','F','S','S'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-access">
            <div className="section-title">
              <h3>Quick Launch</h3>
            </div>
            <div className="action-buttons">
              <button onClick={() => navigate('/tasks')} className="action-btn">
                <div className="btn-icon"><Plus /></div>
                <span>New Task</span>
              </button>
              <button onClick={() => navigate('/finance')} className="action-btn">
                <div className="btn-icon"><Plus /></div>
                <span>Log Expense</span>
              </button>
              <button onClick={() => navigate('/learning')} className="action-btn">
                <div className="btn-icon"><Plus /></div>
                <span>Add Insight</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Recent Activity Feed */}
        <div className="recent-activity-section">
          <div className="section-title">
            <h3><Clock size={20} /> Recent Activity Feed</h3>
          </div>
          <div className="activity-list">
            {stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((act, index) => (
                <div key={index} className="activity-item">
                  <div className={`activity-dot ${act.actType}`}></div>
                  <div className="activity-details">
                    <h4>{act.title}</h4>
                    <span className="activity-type-tag">{act.actType}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-activity">No recent updates found. Start creating your flow!</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
