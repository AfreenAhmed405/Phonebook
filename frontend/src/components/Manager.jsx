import React from 'react';
import '../styles/App.css';

function Manager({ todos_completed, total_todos }) {
    return (
        <div className="card">
            <div className="row align-items-center">
                <div className="card-text col-7">
                    <h2 className="text-light">Task Done</h2>
                    <p className="text-light">Keep It Up</p>
                </div>
                <div className="col-5">
                    <div className="circle text-light">{todos_completed}/{total_todos}</div>
                </div>
            </div>
        </div>
    );
}

export default Manager;