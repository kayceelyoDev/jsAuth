import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, UserPlus, AlertCircle } from 'lucide-react';
import { register } from '../services/api';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await register(email, password);
            // Auto login or redirect to login
            navigate('/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-card">
            <h1>Create Account</h1>
            {error && (
                <div className="error-msg">
                    <AlertCircle size={18} />
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <Mail className="input-icon" size={20} />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <Lock className="input-icon" size={20} />
                    <input
                        type="password"
                        placeholder="Password (min 6 chars)"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
            <p className="text-center mt-4" style={{ color: 'var(--text-muted)' }}>
                Already have an account?{' '}
                <Link to="/login" className="link">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default Register;
