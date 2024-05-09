// routesConfig.js
import CompanyUtility from '../Components/Company/CreateCompany/CompanyUtility';
import CreateCompany from "../Components/Company/CreateCompany/CreateCompany";
import SelectCompany from './Company/CreateCompany/SelectCompany';
import CreateAccountYearData from './Company/AccountingYear/CreateAccountingYear';
import SelectAccoungYear from './Company/AccountingYear/SelectAccountingYear';


const routes = [
   
  {
    path: '/create-utility',
    element: CompanyUtility
  },
  {
    path: '/create-company',
    element: CreateCompany
  },
  {
    path: '/select-company',
    element: SelectCompany
  },
  {
    path: '/create-accounting-year',
    element: CreateAccountYearData
  },
  {
    path: '/select-accounting-year',
    element: SelectAccoungYear
  }


];

export default routes;
