import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CompanyList.css';
import { Modal, Button, Form } from 'react-bootstrap';
import ForgotPasswordModal from './Modal/ForgotPassword';
import ChangePasswordModal from './Modal/ChangePassword';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const firstCompanyRef = useRef(null);
  const navigate = useNavigate()

  const API_URL = process.env.REACT_APP_API_URL;

  //The the all data from API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${API_URL}/get_company_data_All`);
        setCompanies(response.data);
        if (firstCompanyRef.current) {
          firstCompanyRef.current.focus();
        }
      } catch (error) {
        console.error('Failed to fetch companies', error);
      }
    };

    fetchCompanies();

  }, []);

  //Handle show and hide the popup
  const handleCompanyClick = (company) => {

    sessionStorage.setItem('Company_Code', company.Company_Code);
    setSelectedCompany(company);
    setShowModal(true);
  };

  //Handle show and hide the popup
  const handleClose = () => {
    
    setShowModal(false);
    setSelectedCompany(null);
  };

  const handleLogin = () => {
    if (selectedCompany && selectedCompany.Company_Code) {
      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      // You can alert the user or handle errors accordingly
      alert('Please select a company first.');
    }
  };

  //OnKeyBoard Button Functionality 
  const handleKeyDown = (event, company) => {
    if (event.keyCode === 13) {
      handleCompanyClick(company);
    }
  };

  return (
    <div className="companyListContainer">
      <div className="companyList">
        {companies.map((company, index) => (
          <div
            key={company.Company_Code}
            className="companyItem"
            onClick={() => handleCompanyClick(company)}
            onKeyDown={(event) => handleKeyDown(event, company)}
            ref={index === 0 ? firstCompanyRef : null}
            tabIndex={0}
          >
            <span>{company.Company_Code}</span>
            <span>{company.Company_Name_E}</span>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Company Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login Name <span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" required />
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password <span className="required-star">*</span> </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="accountYearSelect">
              <Form.Label>Account Year <span className="required-star">*</span>  </Form.Label>
              <Form.Control as="select">
                <option>2020-2021</option>
                <option>2021-2022</option>
                <option>2022-2023</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="currentBranchSelect">
              <Form.Label>Current Branch</Form.Label>
              <Form.Control as="select">
               
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <ForgotPasswordModal show={showForgotPassword} handleClose={() => setShowForgotPassword(false)} />


          <ChangePasswordModal show={showChangePassword} handleClose={() => setShowChangePassword(false)} />

          <a href='#' onClick={() => { setShowForgotPassword(true); }}>Forgot Password?</a>

          <Button variant="primary" type="submit" onClick={handleLogin}>Login</Button>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <a href='#' onClick={() => setShowChangePassword(true)}>Change Password</a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CompanyList;
