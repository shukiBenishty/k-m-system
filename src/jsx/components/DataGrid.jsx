import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";


class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount(){
    this.setState({
      data: this.props.data
    })
  }

  componentWillReceiveProps (newProps) {
    if( newProps.data !== this.props.data ) {
      var arr = [];
      for(var employee in newProps.data) {
            arr.push(newProps.data[employee]);
      }
      this.setState({
        data: arr
      });
    };
  }

  render() {

    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "תעודת זהות",
              accessor: "id"
            },
            {
              Header: "שם",
              columns: [
                {
                  Header: "שם פרטי",
                  accessor: "firstName"
                },
                {
                  Header: "משפחה",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "כתובת",
              columns: [
                {
                  Header: "עיר",
                  accessor: "address.city"
                },
                {
                  Header: "רחוב",
                  accessor: "address.street"
                }
              ]
            },
            {
              Header: "פרטי התקשרות",
              columns: [
                {
                  Header: "פלאפון",
                  accessor: "phone"
                },
                {
                  Header: "טלפון",
                  accessor: "telephone"
                },
                {
                  Header: "מייל",
                  accessor: "email"
                }
              ]
            },
            {
              Header: "השכלה",
              accessor: "degree"
            },
            {
              Header: "תאריך לידה",
              accessor: "birthday"
            },
            {
              Header: "קבלה לעבודה",
              accessor: "receivedDate"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Employees
