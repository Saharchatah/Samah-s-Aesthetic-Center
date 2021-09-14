import React, { Component } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "daypilot-pro-react";

import "./Calendarr.css";
import axios from "axios";
import AddApp from '../../components/AddApp/AddApp'


const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: "1",
  },
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      // apps: [],
      info: [],
      name: "",
      viewType: "Week",
      durationBarVisible: false,
      // timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async (args) => {
        const dp = this.calendar;


      },


    };
  }
  

  allclients = async () => {
    await axios.get(`http://localhost:5000/appointments`).then(res => {
      let result = res.data;
      console.log(result)
      this.setState({ clients: result })


    })
  }

  allclients = async () => {
    await axios.get(`http://localhost:5000/clients`).then(res => {
      let result = res.data;
      // this.setState({ clients: result })

      this.state.clients.map(client =>
        axios.get(`http://localhost:5000/clients/getClientInfo/${client._id}`).then(re => {

          let allinfo = re.data.appointments;
          console.log(allinfo)
          this.setState({info:allinfo})
        }

        )
      )
    })
  }


  async componentDidMount() {
    this.allclients()


    this.setState({

      events: this.state.clients.map(item => (
        {
          // id: item.client._id,
          // text: item.client.firstname +
          //   " " + item.appointments.starttime,
          start: item.date.slice(0, 10) + 'T' + item.starttime + ':00',
          end: item.date.slice(0, 10) + 'T' + item.endtime + ':00',
          backColor: "#38761d" + Math.random()
        }

      ))

    });

  }

  render() {


    var { ...config } = this.state;
    return (

      <div style={styles.wrap}>



        <button><a href="/addapp">add app</a></button>
        <div style={styles.left}>


          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            // startDate={"2021-10-15"}
            // selectionDay={"2021-10-15"}
            onTimeRangeSelected={(args) => {
              this.setState({
                startDate: args.day,
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...config}
            ref={(component) => {
              this.calendar = component && component.control;
            }}
          />
        </div> 

        {/* {this.state.info.appointments.map(ap =>
        <div>


        </div>)

        } */}
      </div>
    );
  }
}

export default Calendar;