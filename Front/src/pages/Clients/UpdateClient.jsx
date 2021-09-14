import React from 'react';

import { useState ,useEffect } from 'react'
import axios from 'axios'
import {Redirect, useHistory} from 'react-router-dom'
import ClientAppointments from './ClientAppointments';
import SideNav from '../../components/SideNav/SideNav';

function UpdateClient({match}) {
  let history = useHistory();
  
    const [state, updateState] = useState({
        _id: match.params.id,
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        birthyear:"",
        referenceinfo:"",
        mstatus:"",
        needlecolor:"",
        hasillness:"",
        heartbattery:"",
        metalrodinbody:"",
        allergictomedicin:"",
        allergictoanesthesia:"",
        epileptic:"",
        artificiallimbs:"",
        glasseye:"",
        ovariancyst:"",
        hormonedisorder:"",
        hormonedoctor:"",
        glandproblem:"",
        whenwhereprehairremoval:"",
        durationprehairremoval:"",
        takemedecin:"",
        notes:"",

      });
    
      let {
        _id,
        firstname,
        lastname,
        address,
        phonenumber,
        birthyear,
        referenceinfo,
        mstatus,
        needlecolor,
        hasillness,
        heartbattery,
        metalrodinbody,
        allergictomedicin,
        allergictoanesthesia,
        epileptic,
        artificiallimbs,
        glasseye,
        ovariancyst,
        hormonedisorder,
        hormonedoctor,
        glandproblem,
        whenwhereprehairremoval,
        durationprehairremoval,
        takemedecin,
        notes,
      } = state;
    console.log("load id :",_id)
      const setState = (newValue) => {
        updateState((prevState) => ({
          ...prevState,
          ...newValue,
          

        }));
      };
    
      const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ [name]: value });
      };
     
   
  
    
    const [redirect, setRedirect] = useState(false);
    
    
    
    const request = async () => {
        await axios
          .get(`http://localhost:5000/clients/${_id}`)
          .then((response) => {
            setState(response.data);
            console.log("phone",response.data.phonenumber)
           
        });
      };
    useEffect(() => {
      request();
      
      
    }, []);

    
    const updateClientdata = async(e) => {
        e.preventDefault()
       
        console.log("state ",state);
        axios.put(`http://localhost:5000/clients/${_id}`, state)

       setRedirect(true);
    }
if (redirect){     return <Redirect to ="/Client" />;}
const getYearDropList = () => {
  const year = new Date().getFullYear();
return (
    Array.from( new Array(60), (v,i) =>
      <option key={i} value={year-i}>{year-i} - age : {i}</option>
  )
);
};

 

//appointments





    return (
             
        <div >
          <SideNav/>
                <h3 className="text-muted mb-2">Update Client</h3>
                <div className="container my-5">
        

                <form form noValidate autoComplete="off" onSubmit={updateClientdata} >
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                          <button  className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Main Profile</button>

                          <button  className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Details </button>

                          <button  className="nav-link" id="nav-appointments-tab" data-bs-toggle="tab" data-bs-target="#nav-appointments" type="button" role="tab" aria-controls="nav-appointments" aria-selected="false">Appointments </button>

                          

                        </div>
                  </nav>
                <div className="tab-content" id="nav-tabContent">

                  <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row mb-3">
                            <label for="inputfName" className="col-sm-3 col-form-label">first Name</label>
                            <div className="col-sm-9">
                                <input  className="form-control " id="inputfName" value={firstname} name="firstname"  onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className="row mb-3">
                            <label for="inputlName" className="col-sm-3 col-form-label">last name</label>
                            <div className="col-sm-9"> 
                                <input  className="form-control " id="inputlName" value={lastname} name="lastname" onChange={handleChange}   />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputaddress" className="col-sm-3 col-form-label">Address</label>
                            <div className="col-sm-9"> 
                                <input className="form-control " id="inputaddress" value={address} name="address" onChange={handleChange}   />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputphonenumber" className="col-sm-3 col-form-label">phonenumber</label>
                            <div className="col-sm-9"> 
                                <input className="form-control " id="inputphonenumber" value={phonenumber} name="phonenumber" onChange={handleChange}   />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputbirthyear" className="col-sm-3 col-form-label">birthyear</label>
                            <div className="col-sm-9"> 
                                {/* <input className="form-control " id="inputbirthyear" value={birthyear} name="birthyear" onChange={handleChange}   /> */}
                                <select className="form-control " id="inputbirthyear" value={birthyear} name="birthyear" onChange={handleChange}>  {getYearDropList()}  </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputreferenceinfo" className="col-sm-3 col-form-label">referenceinfo</label>
                            <div className="col-sm-9"> 
                                <input className="form-control " id="inputreferenceinfo" value={referenceinfo} name="referenceinfo" onChange={handleChange}   />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputmstatus" className="col-sm-3 col-form-label">mstatus</label>
                            <div className="col-sm-9"> 
                                <input className="form-control " id="inputmstatus" value={mstatus} name="mstatus" onChange={handleChange}   />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputneedlecolor" className="col-sm-3 col-form-label">needlecolor</label>
                            <div className="col-sm-9"> 
                                <input className="form-control " id="inputneedlecolor" value={needlecolor} name="needlecolor" onChange={handleChange}   />
                            </div>
                        </div>
             <div  className="row mb-3">
                  <label  className="col-sm-9 col-form-label"></label>
                  <div className="col-sm-3">
                  <button id="save_div" className="pbtn  btn btn-outline-primary mx-5 rounded shadow border px-5 py-2" type="submit"  >SAVE </button>
                  </div>
              </div>
             </div>
{/*  ,,,,,,,,,,,glandproblem,whenwhereprehairremoval,durationprehairremoval,takemedecin,notes, */}
              <div className="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <h2>Q & A</h2>
                    <div class="accordion" id="accordionPanelsStayOpenExample">

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          Do You suffer from any illness?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                          <div class="accordion-body col-sm-12">
                            <input className="form-control" value={hasillness} name="hasillness" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>
                      
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Do you have a heart battery ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                          <div class="accordion-body col-sm-12">
                           <input className="form-control" value={heartbattery} name="heartbattery" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>
                      
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          Do you have any metal rod in you body ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body col-sm-12">
                           <input className="form-control" value={metalrodinbody} name="metalrodinbody" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>
                      
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                          Are you allergic to a certain medicin ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                         <div class="accordion-body col-sm-12">
                           <input className="form-control" value={allergictomedicin} name="allergictomedicin" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                          Are you allergic to anesthesia ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={allergictoanesthesia} name="allergictoanesthesia" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                          Are you epileptic ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={epileptic} name="epileptic" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                         Do you have any  artificial limbs ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={artificiallimbs} name="artificiallimbs" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                          Do you have a glass-eye?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={glasseye} name="glasseye" onChange={handleChange }   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                          Do you have an ovarian cyst ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={ovariancyst} name="ovariancyst" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                          Do you suffer from any hormone disorder ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={hormonedisorder} name="hormonedisorder" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                          Have you visited any hormone doctor before?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEleven">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={hormonedoctor} name="hormonedoctor" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwelve">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
                          Do you suffer from any gland's problem ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwelve">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={glandproblem} name="glandproblem" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThirteen">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseThirteen">
                          When and where have you previously run to hair-removal ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThirteen">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={whenwhereprehairremoval} name="whenwhereprehairremoval" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFourteen">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFourteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseFourteen">
                          How long have you done hair-removal ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFourteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFourteen">
                         <div class="accordion-body col-sm-12">
                             <input className="form-control" value={durationprehairremoval} name="durationprehairremoval" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFifteen">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFifteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseFifteen">
                          Have you taken any medecin ?
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFifteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFifteen">
                         <div class="accordion-body col-sm-12">
                             <input className="form-control" value={takemedecin} name="takemedecin" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingSixteen">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSixteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseSixteen">
                          notes
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSixteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSixteen">
                          <div class="accordion-body col-sm-12">
                             <input className="form-control" value={notes} name="notes" onChange={handleChange}   />
                          </div>
                        </div>
                      </div>

                    </div>
              
              <div  className="row mb-3">
                  <label  className="col-sm-9 col-form-label"></label>
                  <div className="col-sm-3">
                  <button id="save_div2" className="pbtn  btn btn-outline-primary mx-5 rounded shadow border px-5 py-2" type="submit"  >SAVE </button>
                  </div>
              </div>
              </div>

              <div className="tab-pane fade p-3" id="nav-appointments" role="tabpanel" aria-labelledby="nav-appointments-tab">
             <ClientAppointments _id={_id}/>
             
              </div>   
                  
                </div>
                                    
                        

    
                        
              
                              
              
      </form>
      </div>

    </div>
       
    )

}


export default UpdateClient
