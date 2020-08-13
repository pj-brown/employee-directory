import React, { Component } from 'react'
import API from '../../utils/API'
import EmployeeCard from '../EmployeeCard'
import Search from '../Search'

export default class EmployeeContainer extends Component {
  state = {
    search: "",
    results: []
  };


  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <Search />
        <div className="card">
          <div className="img-container">
            {this.state.results.map((employee, i) => {
              return (<EmployeeCard
                name={employee.name.last}
                picture={employee.picture.medium}
                location={employee.location.city}
              />)
            })}

          </div>
        </div>
      </div>
    )
  }
}
