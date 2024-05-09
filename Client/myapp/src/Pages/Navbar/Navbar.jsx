import React, { useState } from 'react';
import '../Navbar/Navbar.css'; // Ensure the CSS path is correct
import {Link} from "react-router-dom"

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [clickedMenu, setClickedMenu] = useState('');
  const [hoveredSubMenuItem, setHoveredSubMenuItem] = useState('');

  // Function to handle mouse enter on menu items
  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
    setActiveSubMenu('/DashBoard');
  };


  const handleSubMouseEnter = (subMenuName) => {
    setActiveSubMenu(subMenuName);
  };


  // Function to handle mouse leave on navbar
  const handleMouseLeave = () => {
    if (!clickedMenu) {
      setActiveMenu('');
      setActiveSubMenu('');
    }
    setHoveredSubMenuItem('');
  };

  const handleClick = (menuName) => {
    if (clickedMenu === menuName) {
      // If the clicked menu is already active, deactivate it
      setClickedMenu('');
      setActiveMenu('');
    } else {
      // Activate the clicked menu and set it as the clicked menu
      setClickedMenu(menuName);
      setActiveMenu(menuName);
    }
  };

  const handleLogOut=()=>{
    sessionStorage.clear();
  }

  const handleSubMenuItemEnter = (itemName) => {
    setHoveredSubMenuItem(itemName);
  };
  return (
    <div className="navbar" onMouseLeave={handleMouseLeave}>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('home')} onClick={() => handleClick('home')}>Home</div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('company')} onClick={() => handleClick('company')}>
        Company
        {activeMenu === 'company' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-utility">Create Company</Link></div>
            <div className="submenu-item"><Link to="/select-company">Select Company</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year">Create Accounting Year</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Select Accounting Year</Link></div>
          </div>
        )}
      </div>
      <div
        className="nav-item"
        onMouseEnter={() => handleMouseEnter('master')}
      >
        Master
        {(activeMenu === 'master') && (
          <div className="submenu">
            <div
              className="submenu-item"
              onMouseEnter={() => handleSubMouseEnter('accountInfo')} onClick={() => handleClick('accounInfo')}
            >
              Account Information
              {activeSubMenu === 'accountInfo' && (
                <div className="submenu1">
                  <Link to="/account-master">Account Master</Link>
                  <Link to="/customer-limits">Customer Limits</Link>
                  <Link to="/financial-groups">Financial Groups</Link>
                  <Link to="/city-master">City Master</Link>
                  <Link to="/corporate-customer-limit">Corporate Customer Unit/Godown Declaration</Link>
                  <Link to="/ac-master-declaration">Account Master Declaration</Link>
                  <Link to="/bank-details">Bank Details</Link>
                </div>
              )}
            </div>
            <div
              className="submenu-item"
              onMouseEnter={() => handleSubMouseEnter('Other_Master')}
              onMouseLeave={() => setHoveredSubMenuItem('') || setActiveSubMenu('')}

            >
              Other Master
              {activeSubMenu === 'Other_Master' && (
                <div className="submenu1">
                  <Link to="/other-master">System Master</Link>
                  <Link to="/eway-bill-setting">Brand Master</Link>
                  <Link to="/company-parameter">GST Rate Master</Link>
                  <Link to="/jaggery-company-parameter">GST State Master</Link>
                  <Link to="/whatsapp-api">HSN or ASC Code Master</Link>
                  <Link to="/whatsapp-api">Company Related Accounting Parameter</Link>
                </div>
              )}
            </div>


            <div className="submenu-item"><Link to="/eway-bill-setting">E-Way Bill Setting</Link></div>
            <div className="submenu-item"><Link to="/company-parameter">Company Parameter</Link></div>
            <div className="submenu-item"><Link to="/jaggery-company-parameter">Jaggery Company Parameter</Link></div>
            <div className="submenu-item"><Link to="/whatsapp-api">WhatsApp API Integration</Link></div>
          </div>
        )}
      </div>

      <div className="nav-item" onMouseEnter={() => handleMouseEnter('inward')} onClick={() => handleClick('inward')}>
        Inward
        {activeMenu === 'inward' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-company">Purchase Bill</Link></div>
            <div className="submenu-item"><Link to="/select-company">Other GST Input</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year1">Reverse Charge</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Cold Storage Inward</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Sugar Sale Return Purchase</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Rawangi Book</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Retail Purchase</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('transactions')} onClick={() => handleClick('transactions')}>
        Transactions
        {activeMenu === 'transactions' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-company">Receipt/Payment</Link></div>
            <div className="submenu-item"><Link to="/select-company">Journal Vouchar</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year2">UTR Entry</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Multiple Sale Bill Against Single Payment</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">GST3B</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">General Transaction</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Payment Note</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('business-related')} onClick={() => handleClick('business-related')}>
        Business Related
        {activeMenu === 'business-related' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-company">Tender Purchase(Sauda Booking)</Link></div>
            <div className="submenu-item"><Link to="/select-company">Sauda Book Utility</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year3">Delivery Order</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">DO Information</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Motor Memo</Link></div>
            <div
              className="submenu-item"
              onMouseEnter={() => handleSubMouseEnter('stock_report')}
            >
              Stock Report &nbsp; &nbsp; &#62;
              {activeSubMenu === 'stock_report' && (
                <div className="submenu1">
                  <Link to="/other-master">Balance Stock(Millwise/Partywise)</Link>
                  <Link to="/eway-bill-setting">Register</Link>
                  <Link to="/company-parameter">Balance Reminder</Link>
                  <Link to="/jaggery-company-parameter">GST State Master</Link>
                  <Link to="/whatsapp-api">Transport SMS</Link>
                  <Link to="/whatsapp-api">Multiple DO Print</Link>
                  <Link to="/whatsapp-api">Profit Loss</Link>
                </div>
              )}
            </div>
            <div className="submenu-item"><Link to="/select-accounting-year">Letter</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('outward')} onClick={() => handleClick('outward')} >
        Outward
        {activeMenu === 'outward' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-company">Sale Bill</Link></div>
            <div className="submenu-item"><Link to="/select-company">Commission Bill</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year4">Retail Sale Bill</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Sugar Sale Return Sale</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Service Bill</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Cold Storage Outward</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Unregister Bill</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('reports')} onClick={() => handleClick('reports')}>
        Reports
        {activeMenu === 'reports' && (
          <div className="submenu">
            <div
              className="submenu-item"
              onMouseEnter={() => handleSubMouseEnter('ledger')}
            >
              Stock Report &nbsp; &nbsp; &#62;
              {activeSubMenu === 'ledger' && (
                <div className="submenu1">
                  <Link to="/other-master">Ledger</Link>
                  <Link to="/eway-bill-setting">Bank Book</Link>
                  <Link to="/company-parameter">Account Master Print</Link>
                  <Link to="/jaggery-company-parameter">Group Ledger</Link>
                  <Link to="/whatsapp-api">Broker Report</Link>
                  <Link to="/whatsapp-api">Interest Statement</Link>
                  <Link to="/whatsapp-api">Day Book (Kird)</Link>
                  <Link to="/whatsapp-api">Cold Storage Register</Link>
                </div>
              )}
            </div>
            <div className="submenu-item"><Link to="/select-company">Trial Balance</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year5">Profit and Loss/ Balance Sheet</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Stock Book</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Trail Balance Screen</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Pending Reports</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Retail Sale Register Report</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Freight Register Reports</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">PartyWise Sale Bill Detail Reports</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">RetailSale Balance Reports</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Purchase Sale Registers</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Retail Sale Reports</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Retail Sale Stock Book</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Multiple Sale Bill Print</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Partywise Sale Bill Print</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">GST Returns</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('utilities')} onClick={() => handleClick('utilities')}>
        Utilities
        {activeMenu === 'utilities' && (
          <div className="submenu">
            <div className="submenu-item"><Link to="/create-company">DepartmentWise Form Selection</Link></div>
            <div className="submenu-item"><Link to="/select-company">General Info Throghout SMS</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year6">User Creation</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Group User Creation</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Generate Customer Login</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Club Account</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Upload Signature</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Upload Logo</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Our Office Address</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Migration</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Post Date</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Other Utility</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('gst-utilities')}>GST Utilities</div>
      <div className="nav-item" onMouseEnter={() => handleMouseEnter('share')} onClick={() => handleClick('share')}>
        Share
        {activeMenu === 'share' && (
          <div className="submenu">
            <div
              className="submenu-item"
              onMouseEnter={() => handleSubMouseEnter('Master2')}
            >
              Master &nbsp; &nbsp; &#62;
              {activeSubMenu === 'Master2' && (
                <div className="submenu1">
                  <Link to="/other-master">Script Master</Link>
                  <Link to="/eway-bill-setting">Expiry Master</Link>
                </div>
              )}
            </div>
            <div className="submenu-item"><Link to="/select-company">Equity Purchase/Sale</Link></div>
            <div className="submenu-item"><Link to="/create-accounting-year7">Equity Register</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">FNO Purchase/Sale</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">FNO Regisetr</Link></div>
            <div className="submenu-item"><Link to="/select-accounting-year">Company Parameter</Link></div>
          </div>
        )}
      </div>
      <div className="nav-item" onClick={handleLogOut} onMouseEnter={() => handleMouseEnter('log-out')}>
      <Link to="/" className="nav-link">Log Out</Link>
    </div>
    </div>
  );
};

export default Navbar;
