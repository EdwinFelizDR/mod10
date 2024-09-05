import React from 'react';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import EmployeeList from '../components/EmployeeList.jsx';


function Homepage() {
   return (
      <>
         <Header/>
         <SearchBar/>
         <EmployeeList/>
      </>

   );
}

export default Homepage;