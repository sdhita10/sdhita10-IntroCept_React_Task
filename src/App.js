import React from 'react';
import Form from './Form';
import Table from './Table';

class App extends React.Component {
  state = {
    search: '',
    informations: [
      
    ]
  }
  addInformation = (information) => {
    information.id = Math.random();
    let informations = [...this.state.informations, information];
    this.setState({
      informations
    })
  }
  updateSearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  };
  
  clearSearch = (e) => {
    this.setState({
      search: ''
    })
  };

  render() {
    const { informations } = this.state;
    let filteredInformation = informations.filter(
      (info) => {
        return info.country.toLowerCase().includes(this.state.search.toLowerCase()) ||
          info.phone.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );
    return (
      <div className="container-fluid">
        <Form addInformation={this.addInformation} />
        <hr />
        <div className="row">
          <div className="form-group col-3">
            <label className="form-label">Filter by:</label>
            <input type="text" id="search" name="searchText"
              className="form-control form-control-sm"
              placeholder="Search" value={this.state.search}
              onChange={this.updateSearch}
              style={{ marginBottom: '0' }} />
            <small id="search" className="form-text text-muted"> <span className="text-info">Type any country name or phone number.</span></small>
          </div>
          <div className="form-group col" style={{padding:'0px', paddingTop:'32px'}}>
          <button className="btn btn-default text-danger" style={{padding: '0'}} onClick={this.clearSearch}>Clear</button>
          </div>
        </div>
        <Table informations={filteredInformation} />
      </div>
    );
  }
}

export default App;
