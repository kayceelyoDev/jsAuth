import { Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
    <div className="glass-card stat-card">
        <div className="stat-header">
            <div className="stat-icon">
                <Icon size={24} />
            </div>
            <span className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {change}
            </span>
        </div>
        <div className="stat-content">
            <h3>{value}</h3>
            <p>{title}</p>
        </div>
    </div>
);

const Overview = () => {
    return (
        <div className="overview-container">
            <div className="stats-grid">
                <StatCard
                    title="Total Users"
                    value="12,345"
                    change="12%"
                    isPositive={true}
                    icon={Users}
                />
                <StatCard
                    title="Total Revenue"
                    value="$45,678"
                    change="8%"
                    isPositive={true}
                    icon={DollarSign}
                />
                <StatCard
                    title="Active Sessions"
                    value="1,234"
                    change="3%"
                    isPositive={false}
                    icon={Activity}
                />
            </div>

            <div className="glass-card recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="activity-item">
                            <div className="activity-dot"></div>
                            <div className="activity-info">
                                <h4>New user registration</h4>
                                <p>User user{i}@example.com joined the platform</p>
                            </div>
                            <span className="activity-time">{i * 15}m ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
