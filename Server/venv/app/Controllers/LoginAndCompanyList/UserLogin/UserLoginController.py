from flask import jsonify, request
from app import app, db
from app.models.Company.UserLogin.UserLoginModels import UserLogin
import bcrypt

@app.route('/api/userlogin', methods=['POST'])
def userlogin():
    # Get login credentials from request
    login_data = request.json
    if not login_data:
        return jsonify({'error': 'No data provided'}), 400

    login_name = login_data.get('User_Name')
    password = login_data.get('Password')

    if not login_name or not password:
        return jsonify({'error': 'Login name and password are required'}), 400

    # Check if user exists
    user = UserLogin.query.filter_by(User_Name=login_name).first()
    if not user:
        return jsonify({'error': 'Invalid login credentials'}), 401

    # Verify hashed password using bcrypt
    if not(password.encode('utf-8'), user.Password.encode('utf-8')):
        return jsonify({'error': 'Invalid login credentials'}), 401

    # Prepare user data, removing sensitive and unnecessary information
    user_data = {
        "User_Id": user.User_Id,
        "User_Name": user.User_Name,
        "Password": user.Password,
        "User_Type": user.User_Type
    }

    # Return user data and JWT token in the response
    return jsonify({'message': 'Login successful', 'user_data': user_data}), 200
