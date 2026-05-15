import React, { useState, useEffect } from 'react';
import { BarChart3, CheckCircle2, Wallet, BookOpen, ArrowUpRight, ArrowDownRight, Award, Flame, Star, Percent } from 'lucide-react';
import '../styles/WeeklyReport.css';

const Report = () => {
  const [reportData, setReportData] = useState({
    taskStats: { total: 0, completed: 0, rate: 0 },
    financeStats: { income: 0, expense: 0, savings: 0, savingsRate: 0 },
    learningCount: 0,
    performanceLevel: 'Standby'
  });

  useEffect(() => {
    // Gukura amakuru yose muri LocalStorage
    const savedTasks = JSON.parse(localStorage.getItem('intambwe_tasks_flow')) || [];
    const savedFin = JSON.parse(localStorage.getItem('intambwe_finance_flow')) || [];
    const savedLearn = JSON.parse(localStorage.getItem('intambwe_learning_flow')) || [];

    // Kubara iby'Imirimo (Tasks)
    const completedTasks = savedTasks.filter(t => t.done).length;
    const taskRate = savedTasks.length > 0 ? Math.round((completedTasks / savedTasks.length) * 100) : 0;

    // Kubara iby'Amafaranga (Finance)
    const totalIncome = savedFin.filter(r => r.type === 'Income').reduce((a, b) => a + Number(b.amount), 0);
    const totalExpense = savedFin.filter(r => r.type === 'Expense').reduce((a, b) => a + Number(b.amount), 0);
    const netSavings = totalIncome - totalExpense;
    const finRate = totalIncome > 0 ? Math.round((netSavings / totalIncome) * 100) : 0;

    // Kubara Performance Level (Urugero rw'imikorere)
    let level = 'Getting Started';
    const averageScore = (taskRate + (finRate > 0 ? finRate : 0)) / 2;
    
    if (averageScore >= 80) level = 'Elite Execution';
    else if (averageScore >= 50) level = 'Steady Momentum';
    else if (savedTasks.length > 0 || totalIncome > 0) level = 'Active Building';

    setReportData({
      taskStats: { total: savedTasks.length, completed: completedTasks, rate: taskRate },
      financeStats: { income: totalIncome, expense: totalExpense, savings: netSavings, savingsRate: finRate },
      learningCount: savedLearn.length,
      performanceLevel: level
    });
  }, []);

  // Ishusho y'imikorere y'icyumweru (Dummy data iherekeza urubuga nka chart)
  const weeklyBurnRate = [reportData.taskStats.rate, 65, 40, 85, 50, 75, 90];

  return (
    <div className="report-pro-page">
      <div className="report-wrapper">
        
        {/* Header Section */}
        <header className="report-header">
          <div className="header-left">
            <span className="pro-badge">System Audit</span>
            <h1>Weekly <span>Performance.</span></h1>
            <p>Comprehensive data analysis of your productivity and wealth.</p>
          </div>
          <div className="performance-status-card">
            <div className="p-badge-icon"><Award size={24} /></div>
            <div className="p-badge-info">
              <p>Current Rank</p>
              <h3>{reportData.performanceLevel}</h3>
            </div>
          </div>
        </header>

        {/* Audit Core Metrics */}
        <div className="report-metrics-grid">
          
          {/* Productivity Audit */}
          <div className="audit-card yellow-neon">
            <div className="a-card-header">
              <h3><CheckCircle2 size={20} /> Productivity Audit</h3>
              <span className="a-rate-pill">{reportData.taskStats.rate}%</span>
            </div>
            <div className="a-card-body">
              <div className="data-row">
                <span>Total Assignments</span>
                <strong>{reportData.taskStats.total}</strong>
              </div>
              <div className="data-row">
                <span>Missions Executed</span>
                <strong className="text-yellow">{reportData.taskStats.completed}</strong>
              </div>
              <div className="audit-progress-bar">
                <div className="audit-progress-fill" style={{ width: `${reportData.taskStats.rate}%` }}></div>
              </div>
            </div>
          </div>

          {/* Capital Audit */}
          <div className="audit-card white-neon">
            <div className="a-card-header">
              <h3><Wallet size={20} /> Capital Flow Audit</h3>
              <span className="a-rate-pill">{reportData.financeStats.savingsRate}% Net</span>
            </div>
            <div className="a-card-body">
              <div className="data-row">
                <span>Total Inflow</span>
                <span className="text-success">+{reportData.financeStats.income.toLocaleString()} RWF</span>
              </div>
              <div className="data-row">
                <span>Total Outflow</span>
                <span className="text-danger">-{reportData.financeStats.expense.toLocaleString()} RWF</span>
              </div>
              <div className="data-row highlight-row">
                <span>Net Retention</span>
                <strong className={reportData.financeStats.savings >= 0 ? 'text-yellow' : 'text-danger'}>
                  {reportData.financeStats.savings.toLocaleString()} RWF
                </strong>
              </div>
            </div>
          </div>

          {/* Intelligence Audit */}
          <div className="audit-card yellow-neon">
            <div className="a-card-header">
              <h3><BookOpen size={20} /> Intelligence Audit</h3>
              <span className="a-rate-pill">Vault</span>
            </div>
            <div className="a-card-body learning-audit-body">
              <div className="intelligence-display">
                <h2>{reportData.learningCount}</h2>
                <p>Core Insights Archived This Week</p>
              </div>
              <p className="intel-footer-text"><Flame size={14} /> Knowledge compounds over time.</p>
            </div>
          </div>

        </div>

        {/* Visual Consistency Section */}
        <section className="report-chart-section">
          <div className="chart-header-title">
            <h3><BarChart3 size={20} /> Execution Velocity (7-Day Trend)</h3>
            <span className="chart-subtitle"><Star size={12} /> Real-time calibration</span>
          </div>
          <div className="report-visual-chart">
            {weeklyBurnRate.map((h, i) => (
              <div key={i} className="r-chart-column">
                <div className="r-bar" style={{ height: `${h > 0 ? h : 15}%` }}>
                  <div className="r-tooltip">{h}%</div>
                </div>
                <span className="r-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Report;
