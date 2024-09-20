import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-4 font-weight-bold text-primary">Student Record Management System</h1>
          <p className="lead text-muted">
            Welcome to our Student Record Management System. Manage student information efficiently with our user-friendly platform.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 mb-4">
            <div className="card border-info shadow-lg bg-light">
              <div className="card-body text-center">
                <h3 className="card-title font-weight-bold text-info">Add or Register Students</h3>
                <p className="card-text text-dark mb-4">
                  Use this section to add new student records or update existing ones. Our system allows for easy registration and record management to keep track of student details effortlessly.
                </p>
                <Link to="/register" className="btn btn-info btn-lg">
                  Go to Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold mb-4 text-success">Features of Our System</h2>
            <p className="text-secondary mb-4">
              Our Student Record Management System offers a range of features designed to streamline the management of student data:
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle text-success"></i> <strong>Easy Registration:</strong> Add new student records quickly.</li>
              <li><i className="bi bi-check-circle text-success"></i> <strong>Efficient Record Updates:</strong> Modify existing records with ease.</li>
              <li><i className="bi bi-check-circle text-success"></i> <strong>Comprehensive Management:</strong> Keep track of all student information in one place.</li>
            </ul>
            <p className="text-secondary">
              We aim to simplify the record-keeping process and enhance the efficiency of managing student information. 
              Explore our features and see how our system can benefit your institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
