import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-container">
            <p className="info-message">Manage attendance, lateslips, and leave requests in one place</p>
            <h4>Welcome back Jeeshnu Maharjan!</h4>

            <div className="dashboard-container2">
                <button className="logout-btn" onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>

    );
};

export default Dashboard;
