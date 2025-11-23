const Analytics = () => {
    return (
        <div className="analytics-container">
            <div className="glass-card chart-section">
                <h3>Traffic Overview</h3>
                <div className="chart-placeholder">
                    {/* Fake Chart Bars */}
                    {[40, 70, 50, 90, 60, 80, 45].map((height, i) => (
                        <div key={i} className="chart-bar-container">
                            <div
                                className="chart-bar"
                                style={{ height: `${height}%` }}
                            ></div>
                            <span className="chart-label">Day {i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card table-section">
                <h3>Top Referrers</h3>
                <table className="analytics-table">
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Visitors</th>
                            <th>Bounce Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Google</td>
                            <td>4,567</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>Direct</td>
                            <td>3,456</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td>1,234</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>890</td>
                            <td>55%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Analytics;
