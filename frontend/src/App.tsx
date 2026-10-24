import {useState} from 'react';

import LoginPage from './pages/LoginPage';
import DashboardPAge from './pages/DashboardPage';
import EmailDetailPage from './pages/EmailDetail';

import type { Email } from './types/email';

type Page = 'login' | 'dashboard' | 'compose' | 'emailDetail';

function App(){
  const[page, setPage] = useState<Page>('login');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const handleLogin = ()=>{
    setPage('dashboard');
  }
  const handleLogout=()=>{
    setPage('login');
  }
  const handleOpenEmail = (email: Email)=>{
    setSelectedEmail(email);
    setPage('emailDetail');
  }
  const handleBackToDashboard = ()=>{
    setPage('dashboard');
  }
  switch(page){
    case 'login':
      return <LoginPage onLogin={handleLogin} />;
    case 'dashboard':
      return <DashboardPAge onCompose={() => setPage('compose')} onOpenEmail={handleOpenEmail} onLogout={handleLogout} />;
    case 'emailDetail':
      return <EmailDetailPage email={selectedEmail} onBack={handleBackToDashboard} />;
    default:
      return null;
  }
}

export default App;