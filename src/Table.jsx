import React from 'react';

const Table = ({ informations }) => {
    const informationList = informations.length ? (
        informations.map(info => {
            return (
                <tr key={info.id}>
                    <td>{info.name}</td>
                    <td>{info.email}</td>
                    <td>{info.phone}</td>
                    <td>{info.dob}</td>
                    <td>{info.street}</td>
                    <td>{info.city}</td>
                    <td>{info.stateName}</td>
                    <td>{info.country}</td>
                </tr>
            )
        })
    ) : (
        <p>No information</p>
    );
    return (
        <table className="table table-sm table-striped">
            <thead className="thead-light">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>D.O.B.</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
            </tr>
            </thead>
            {informationList}
        </table>
    )
}

export default Table;