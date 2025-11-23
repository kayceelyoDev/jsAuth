import { Save, Bell, Lock, User } from 'lucide-react';

const Settings = () => {
    return (
        <div className="settings-container">
            <div className="glass-card settings-section">
                <div className="section-header">
                    <User size={20} />
                    <h3>Profile Settings</h3>
                </div>
                <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" className="input-field" defaultValue="John Doe" />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" className="input-field" defaultValue="john@example.com" disabled />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Bio</label>
                        <textarea className="input-field" rows="3" defaultValue="Full stack developer..."></textarea>
                    </div>
                    <button className="btn-primary">
                        <Save size={16} style={{ marginRight: '8px' }} />
                        Save Changes
                    </button>
                </form>
            </div>

            <div className="glass-card settings-section">
                <div className="section-header">
                    <Bell size={20} />
                    <h3>Notifications</h3>
                </div>
                <div className="toggles-list">
                    <div className="toggle-item">
                        <div className="toggle-info">
                            <h4>Email Notifications</h4>
                            <p>Receive daily summaries</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="toggle-item">
                        <div className="toggle-info">
                            <h4>Push Notifications</h4>
                            <p>Receive real-time alerts</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
