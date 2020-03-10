import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

import Data from './Data';
// import EmployeeList from './components/EmployeeList';
// import DepartmentList from './components/DepartmentList';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      address : "",
      // selectedDept : 'All' //초기값은 전체(따라서 전체 직원 정보가 오른쪽에 뜸)
    }
  }

  // onSelectDepartment(deptName) { //부서 바꿔주는 메소드
  //   let empList = Employees;
  //   if(deptName === 'All'){
  //     empList = Employees;
  //   }else{
  //     empList = empList.filter(emp => {
  //       return emp.department.toLowerCase().search( deptName.toLowerCase() ) !== -1
  //     })
  //   }
    
  //   this.setState({
  //     employees : empList
  //   })
  // }

  onSearchByAddress(addr) {
    // let updateList = Data;
    // console.log(updateList)
    // updateList = updateList.filter(obj => {
    //   return obj.address.search(address) !== -1 ;
    // })
    this.setState({
      address : addr
    })
    console.log(addr);
  }

  render() {
    // const depts = ['All', ...new Set(Employees.map(emp => emp.department))]; 
    
    return (
        <div>
          <SearchBar onSearchByAddress={this.onSearchByAddress.bind(this)}/>
          <Data address={this.state.address}/>
        </div>
        
        // /* <Segment>
        //   <SearchBar onSearchByAddress={this.onSearchByAddress.bind(this)}/>
        // </Segment>
        // <Segment>
        //   <Grid columns={2} divided>
        //     <Grid.Column>
        //       <DepartmentList depts = {depts} onSelectDepartment={this.onSelectDepartment.bind(this)}/>
        //     </Grid.Column>
        //     <Grid.Column>
        //       <EmployeeList employeeList = {this.state.employees} />
        //     </Grid.Column>
        //   </Grid>
        // </Segment> */
    );
  }
}

export default App;
