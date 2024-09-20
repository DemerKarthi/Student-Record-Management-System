import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Register() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let response = await axios.get("http://localhost:5000/user/students");
      if (response.data) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getValue(e) {
    const { name, value } = e.target;
    if (name === "Fname") setFname(value);
    else if (name === "Lname") setLname(value);
    else if (name === "Phone") setPhone(value);
    else if (name === "Email") setEmail(value);
  }

  async function submitForm() {
    const obj = { Fname, Lname, Phone, Email };
    try {
      let response = await axios.post(
        "http://localhost:5000/user/add-student",
        obj
      );
      if (response.data) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
    clearForm();
  }

  function clearForm() {
    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
  }

  function editData(item) {
    setSelectedData(item);
    setFname(item.Fname);
    setLname(item.Lname);
    setPhone(item.Phone);
    setEmail(item.Email);
    handleShow();
  }

  async function updateData() {
    const obj = { Fname, Lname, Phone, Email, id: selectedData.id };
    try {
      let response = await axios.put(
        `http://localhost:5000/user/update-student/${selectedData.id}`,
        obj
      );
      if (response.data) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
    clearForm();
    handleClose();
  }

  async function delData(item) {
    try {
      let response = await axios.delete(
        `http://localhost:5000/user/delete-student/${item.id}`
      );
      if (response.data) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 register-form">
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Fname"
                  onChange={getValue}
                  value={Fname}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Lname"
                  onChange={getValue}
                  value={Lname}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="Phone"
                  onChange={getValue}
                  value={Phone}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  onChange={getValue}
                  value={Email}
                  required
                />
              </div>
              <button
                type="button"
                className="btnregister"
                onClick={submitForm}
              >
                Submit
              </button>
              <button
                type="button"
                className="btnregisterClear"
                onClick={clearForm}
                style={{ marginLeft: "15px" }}
              >
                Clear
              </button>
            </form>
          </div>
        </div>

        <div className="grid-container">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div className="grid-item" key={index}>
                <h6>
                  {index + 1}. {item.Fname} {item.Lname}
                </h6>
                <p>
                  <strong>Phone:</strong> {item.Phone}
                </p>
                <p>
                  <strong>Email:</strong> {item.Email}
                </p>
                <div className="actions">
                  <i
                    className="bi bi-pencil-square"
                    onClick={() => editData(item)}
                  ></i>
                  <i
                    className="bi bi-trash3-fill delete"
                    onClick={() => delData(item)}
                    style={{ marginLeft: "15px" }}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <p>No students to display</p>
          )}
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Student Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Fname"
                  onChange={getValue}
                  value={Fname}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Lname"
                  onChange={getValue}
                  value={Lname}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="Phone"
                  onChange={getValue}
                  value={Phone}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  onChange={getValue}
                  value={Email}
                  required
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btnregister" onClick={updateData}>
              Update
            </button>
            <button type="button" className="btn-cancel" onClick={handleClose}>
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Register;
