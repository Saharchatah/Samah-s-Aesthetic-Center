import React, { Component } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "daypilot-pro-react";
import "./Calendarr.css";
import axios from "axios";
import SideNav from '../../components/SideNav/SideNav'



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

      work:[],
      nameclients:[],
      apps: [],

      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async (args) => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt(
          "Create a new event:",
          "Event 1"
        );
        dp.clearSelection();
        if (!modal.result) {
          return;
        }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result,
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: async (args) => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt(
          "Update event text:",
          args.e.text()
        );
        if (!modal.result) {
          return;
        }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }


  // allapp = async () => {
  //   await axios.get(`http://localhost:5000/clients`).then(res => {
  //     let result = res.data;

  //     this.setState({ aclients: result })

  //     this.state.aclients.map(client =>
  //       axios.get(`http://localhost:5000/clients/getClientInfo/${client._id}`).then(re => {

  //       //d8ri filter or find here
  //         let allinf = re.data.appointments.map(a => a.starttime);
  //         // let allinfo = re.data.client.firstname;
  //         let apss = re.data.client;
  //         // let apss = re.data.appointments;
  //         // console.log(allinfo)
  //         console.log(allinf)
  //         // this.setState({ info: allinfo })
  //         // this.setState({ aps: allinf })
  //       }

  //       )
  //     )
  //   })
  // }




  nameclients = async () => {
    await axios.get(`http://localhost:5000/clients`).then(res => {
      let result = res.data;
      console.log("names",result)
      this.setState({ nameclients: result })


    })
  }



  allclients = async () => {
    await axios.get(`http://localhost:5000/appointments`).then(res => {
      let result = res.data;
      console.log(result)
      this.setState({ apps: result })


    })
  }



  async componentDidMount() {
    await this.allclients();
    this.nameclients();
    this.setState({
      events: this.state.apps.map(item => (
          {
        
          id: item.id,
          
          text: item.id_client,
          start: item.date.slice(0, 10) + 'T' + item.starttime +':00',
          end: item.date.slice(0, 10) + 'T' + item.endtime + ':00',
          backColor: "#38761d" + Math.random()
        }
      ))

    });
  }

  render() {


    var { ...config } = this.state;
    return (
      <div>
        <SideNav />
        <button  className='btn btn-outline-primary mx-5 rounded shadow border ' onClick={event => window.location.href = '/addapp'}>Add Appointment</button>

        <div style={styles.wrap}>
          <div style={styles.left}>

            <DayPilotNavigator
              selectMode={"week"}
              showMonths={3}
              // skipMonths={3}
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

        </div>
      </div>
    );
  }
}

export default Calendar;