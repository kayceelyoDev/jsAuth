import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import {navigation} from '../components/navigation'
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="glass-card">
            <navigation />
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    width: '80px',
                    height: '80px',

                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                }}>
                    <User size={40} color="#818cf8" />
                </div>
                <h1>Welcome, {user.email.split('@')[0]}!</h1>
                <p style={{ color: 'var(--text-muted)' }}>{user.email}</p>
            </div>

            <div style={{
                background: 'rgba(0,0,0,0.2)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '2rem'
            }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    You have successfully authenticated with the backend. This is a protected route.
                </p>
            </div>

            <button onClick={handleLogout} className="btn-primary" style={{ background: 'var(--error)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <LogOut size={18} />
                    Sign Out
                </div>
            </button>
        </div>
    );
};

export default Dashboard;
