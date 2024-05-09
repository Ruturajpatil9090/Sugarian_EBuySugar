import React, { useState } from 'react';
import ActionButtonGroup from '../../../Common/CommonButtons/ActionButtonGroup';
import NavigationButtons from "../../../Common/CommonButtons/NavigationButtons";
import { useNavigate } from 'react-router-dom';
import './CreateAccountingYear.css';

const CreateAccountYear = () => {
    const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);
    const [addOneButtonEnabled, setAddOneButtonEnabled] = useState(false);
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(true);
    const [cancelButtonEnabled, setCancelButtonEnabled] = useState(true);
    const [editButtonEnabled, setEditButtonEnabled] = useState(false);
    const [deleteButtonEnabled, setDeleteButtonEnabled] = useState(false);
    const [backButtonEnabled, setBackButtonEnabled] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);
    const [highlightedButton, setHighlightedButton] = useState(null);
    const [cancelButtonClicked, setCancelButtonClicked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        yearCode: '',
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date().toISOString().slice(0, 10),
        year: ""
    });

    // Handle change for all inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddOne = () => {
        setAddOneButtonEnabled(false);
        setSaveButtonEnabled(true);
        setCancelButtonEnabled(true);
        setEditButtonEnabled(false);
        setDeleteButtonEnabled(false);
        setIsEditing(true);


    }

    const handleSaveOrUpdate = () => {
        if (isEditMode) {

            setIsEditMode(false);
            setAddOneButtonEnabled(true);
            setEditButtonEnabled(true);
            setDeleteButtonEnabled(true);
            setBackButtonEnabled(true);
            setSaveButtonEnabled(false);
            setCancelButtonEnabled(false);
            setUpdateButtonClicked(true);
            setIsEditing(false);

        } else {

            setIsEditMode(false);
            setAddOneButtonEnabled(true);
            setEditButtonEnabled(true);
            setDeleteButtonEnabled(true);
            setBackButtonEnabled(true);
            setSaveButtonEnabled(false);
            setCancelButtonEnabled(false);
            setUpdateButtonClicked(true);
            setIsEditing(false);

        };
    }

    const handleEdit = () => {
        setIsEditMode(true);
        setAddOneButtonEnabled(false);
        setSaveButtonEnabled(true);
        setCancelButtonEnabled(true);
        setEditButtonEnabled(false);
        setDeleteButtonEnabled(false);
        setBackButtonEnabled(true);
        setIsEditing(true);

    };

    const handleCancel = () => {
        // Reset other state variables
        setIsEditing(false);
        setIsEditMode(false);
        setAddOneButtonEnabled(true);
        setEditButtonEnabled(true);
        setDeleteButtonEnabled(true);
        setBackButtonEnabled(true);
        setSaveButtonEnabled(false);
        setCancelButtonEnabled(false);
        setCancelButtonClicked(true);
    };

    const handleDelete = async () => {
        setIsEditMode(false);
        setAddOneButtonEnabled(true);
        setEditButtonEnabled(true);
        setDeleteButtonEnabled(true);
        setBackButtonEnabled(true);
        setSaveButtonEnabled(false);
        setCancelButtonEnabled(false);


    };

    const handleBack = () => {
        navigate("/DashBoard")
    }

    const handleFirstButtonClick = async () => {

    };

    const handlePreviousButtonClick = async () => {

    };

    const handleNextButtonClick = async () => {

    };

    const handleLastButtonClick = async () => {

    }

    return (
        <> 
        <div className="container">
            <ActionButtonGroup
                handleAddOne={handleAddOne}
                addOneButtonEnabled={addOneButtonEnabled}
                handleSaveOrUpdate={handleSaveOrUpdate}
                saveButtonEnabled={saveButtonEnabled}
                isEditMode={isEditMode}
                handleEdit={handleEdit}
                editButtonEnabled={editButtonEnabled}
                handleDelete={handleDelete}
                deleteButtonEnabled={deleteButtonEnabled}
                handleCancel={handleCancel}
                cancelButtonEnabled={cancelButtonEnabled}
                handleBack={handleBack}
                backButtonEnabled={backButtonEnabled}
            />
            <div>
                {/* Navigation Buttons */}
                <NavigationButtons
                    handleFirstButtonClick={handleFirstButtonClick}
                    handlePreviousButtonClick={handlePreviousButtonClick}
                    handleNextButtonClick={handleNextButtonClick}
                    handleLastButtonClick={handleLastButtonClick}
                    highlightedButton={highlightedButton}
                    isEditing={isEditing}
                    isFirstRecord={formData.Company_Code === 1}

                />
            </div>
        </div>
            <div className="form-container">
                <form>
                    <h2>Create Accoung Year</h2>
                    <br />
                    <div className="form-group">
                        <label htmlFor="yearCode">Year Code:</label>
                        <input
                            type="text"
                            id="yearCode"
                            name="yearCode"
                            value={formData.yearCode}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="yearCode">Year:</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={formData.year}

                        />
                    </div>

                </form>
            </div>
        </>
    );
};

export default CreateAccountYear;
