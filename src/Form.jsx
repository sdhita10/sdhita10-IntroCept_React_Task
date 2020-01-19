import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            dob: '',
            street: '',
            city: '',
            stateName: '',
            country: 'Australia'
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const information = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dob: this.state.dob,
            street: this.state.street,
            city: this.state.city,
            stateName: this.state.stateName,
            country: this.state.country
        }
        console.log("Information : ", information);
        this.props.addInformation(this.state);
        this.setState({
            name: '',
            email: '',
            phone: '',
            dob: '',
            street: '',
            city: '',
            stateName: '',
            country: 'Australia'
        })
    };
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log("states: ", this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md col-6" style={{paddingTop:'8px'}}>
                    <h3 style={{backgroundColor: '#d87b7b', padding:'4px'}}>Personal Details </h3>
                    <div className="row">
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="name">Name</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                placeholder="Enter Name"
                                required
                            />
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="email">Email</label>
                            <input
                                className="form-control form-control-sm"
                                type="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="phone">Phone Number</label>
                            <input
                                className="form-control form-control-sm"
                                type="number"
                                id="phone"
                                value={this.state.phone}
                                onChange={this.onChange}
                                placeholder="Enter Phone Number"
                                required
                            />
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="dob">Date of Birth</label>
                            <input
                                className="form-control form-control-sm"
                                type="date"
                                id="dob"
                                value={this.state.dob}
                                onChange={this.onChange}
                                placeholder="Enter Date of Birth"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="col-md col-6" style={{paddingTop:'8px'}}>
                    <h3 style={{backgroundColor: '#d87b7b', padding:'4px'}}>Address </h3>
                    <div className="row">
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="country">Country</label>
                            <select className="form-control form-control-sm" id="country" value={this.state.country} onChange={this.onChange}>
                                <option value="Australia">Australia</option>
                                <option value="USA">USA</option>
                                <option value="Nepal">Nepal</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="stateName">State</label>
                            {
                                this.state.country === 'Australia' ? (
                                    <select className="form-control form-control-sm" id="stateName" value={this.state.stateName} onChange={this.onChange}>
                                        <option value="">Choose the state</option>
                                        <option value="NSW">NSW</option>
                                        <option value="VIC">VIC</option>
                                        <option value="QLD">QLD</option>
                                        <option value="NT">NT</option>
                                        <option value="ACT">ACT</option>
                                        <option value="SA">SA</option>
                                        <option value="TAS">TAS</option>
                                        <option value="WA">WA</option>
                                    </select>
                                ) : (
                                        <input
                                            className="form-control form-control-sm"
                                            type="text"
                                            id="stateName"
                                            value={this.state.stateName}
                                            onChange={this.onChange}
                                            placeholder="Enter State"
                                            required
                                        />
                                    )
                            }
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="city">City</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="city"
                                value={this.state.city}
                                onChange={this.onChange}
                                placeholder="Enter City"
                                required
                            />
                        </div>
                        <div className="form-group col-6">
                            <label className="col-form-label col-form-label-sm" forName="street">Street</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="street"
                                value={this.state.street}
                                onChange={this.onChange}
                                placeholder="Enter Street"
                                required
                            />
                        </div>
                    </div>
                    </div>
                </div >
                <button className="btn btn-primary">Add</button>
            </form>
        );
    }
}

export default Form;