import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { get } from "lodash";
import SideNav from '../../components/SideNav/SideNav'


export default function Payment() {
  const [getclient, setgetclient] = useState("");
  const [mine, setmine] = useState("");
  const [r, setr] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  async function getinfo(id) {

    let i = await axios.get(`http://localhost:5000/clients/getClientInfo/${id}`);
    let result = i.data;
    setmine(result);
    console.log("my info", i);
  }

  console.log(mine);

  useEffect(() => {
    if (isTrue) {
      async function getapp() {
        let r = await axios.get(`http://localhost:5000/clients`);
        setr(r.data);
      }
      getapp();
      setIsTrue(false);
    }

    getinfo(getclient._id);
  }, [getclient._id]);

  return (
    <div>
      <SideNav/>
      <form>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Autocomplete
            options={r}
            onChange={(e, v) => setgetclient(v)}
            getOptionLabel={(option) =>
              option.firstname + " " + option.lastname
            }
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Patient" variant="outlined" />
            )}
          />
          <h1>  {getclient.firstname}-{getclient.lastname}-{getclient.phonenumber} </h1>
        </div>

        <h1>{get(mine.client,'address','sahar')}</h1>

      </form>
      <button>
        <a href="/AddPay">AddPay</a>
      </button>
    </div>
  );
}