import React, { useEffect, useState } from "react";

import axios from 'axios';
import Image from "../../doctor-profile/Image";
import "./Profile.css";
import AddPateint from '../components/forms/AddPatientProfile';
import EditPateint from '../components/forms/EditPatientProfile';
import ViewPateint from '../components/forms/ViewPatientProfile';

function Profile(props) {



  const [users, setUsers] = useState([]);
  const [listView, setProfile] = useState(false);
  const [displayVal, setDisplay] = useState("block")
  const [editing, setEditing] = useState(false);

  const url='http://localhost:8001/profileinfo';
    const addPateint = (user) => {
      user.id = users.length + 1;
      axios.post(url,
        {
         
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          contactNo:user.contactNo,
          height:user.height,
          weight:user.weight,
          blood:user.blood,
          gender:user.gender
        }).then((response)=>{
         
         
          console.log("Data: ", response.data);
          setUsers([response.data])
        });
        setProfile(true);
        setDisplay("none");

      console.log(users);
    };

    const viewPatient=(val)=>{
      setProfile(val);
      setDisplay("none")
      
  }

  const initialUser = { id: null, firstName: "", lastName: "",age:"",height:"",weight:"",blood:"",gender:""};

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
    console.log(user);
  };


    useEffect(()=>{
      async function doGetProfile() {
          let res = await axios.get('http://localhost:8001/profileinfo');
          setUsers(res.data)
        }doGetProfile()
  },[])


  const updateUser = (newUser) => {
    console.log("New user"+ newUser);
          
    axios.put(`http://localhost:8001/profileinfo/${newUser.id}`, newUser)
    .then(response => {
      
        console.log("Data: ", response.data);
        setUsers([response.data])
    }).catch(error => {
        console.error('Something went wrong!', error);
    });

  
setCurrentUser(initialUser);
setEditing(false);
};


  return (
 
    <div>
         
       <div className='container mt-5' >
       <h2 className="text-uppercase text-center">
                  View/Add Profile:
                </h2>
    
    <Image/>
  </div>
      <section className="vh-75 vw-75 mt-4 gradient-custom">
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* <div
              className="col-xxl-4 col-lg-3 col-xl-5 bgImg "
              style={{ zIndex: "-1", position: "relative" }}
            >
              <img
                src="https://media.istockphoto.com/vectors/happy-diverse-students-celebrating-graduation-from-school-vector-id1227151024?k=20&m=1227151024&s=612x612&w=0&h=LixPEQebppS7yyIOiGWVUwrk3sHTctZ8sb65EmXTs64=" alt=""
               
              />
            </div> */}
            
  
    {editing ? (
             
              <EditPateint
              currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
                viewPatient={viewPatient}
              />
          
         
          ) : (
            
             <div className="col-xxl-12 col-lg-9 col-xl-7 col-xs-12" style ={{display: displayVal}}>
              <AddPateint addPateint={addPateint} viewPatient={viewPatient}/>
            </div>
          )}
           {
          listView &&(
            <div className="col-xxl-12 col-lg-9 col-xl-7 col-xs-12">
            <ViewPateint
              users={users}
              viewPatient={viewPatient}
              editUser={editUser}
            />
            </div>
          )
        }
          </div>
         
        </div>
      </section>
    </div>

  );
}

export default Profile;
