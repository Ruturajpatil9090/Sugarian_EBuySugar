# app/routes/tender_routes.py
from flask import jsonify, request
from app import app, db
from app.models.Company.AccountingYearModels.AccountingYearModels import AccountingYear

# Get all accounting years for a specific company code
@app.route("/get_accounting_years", methods=["GET"])
def get_accounting_years():
    company_code = request.args.get('Company_Code')
    if not company_code:
        return jsonify({'error': 'Missing company_code parameter'}), 400

    try:
        company_code = int(company_code)
    except ValueError:
        return jsonify({'error': 'Invalid company_code parameter'}), 400

    accounting_years = AccountingYear.query.filter_by(Company_Code=company_code).all()
    return jsonify([{
        'yearCode': a.yearCode,
        'year': a.year,
        'Start_Date': a.Start_Date.strftime('%Y-%m-%d'),
        'End_Date': a.End_Date.strftime('%Y-%m-%d'),
        'Company_Code': a.Company_Code
    } for a in accounting_years]), 200
