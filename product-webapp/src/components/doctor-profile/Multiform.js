import React, { useState,useEffect } from "react";
import { Steps } from "antd";
import { Provider } from "./Multiformcontext";
import ExperienceInfo from "./ExperienceInfo";
import ClinicInfo from "./ClinicInfo";
import PersonalInfo from "./PersonalInfo";
import ListDoctorInfo from "./ListDoctorInfo";
import axios from 'axios';



const { Step } = Steps;



let id=Math.floor(Math.random() * 16) + 5;
const detailsInitialState = {
  firstName: "",
  lastName: "",
  address:"",
  contactNo:"",
  age:"",
  mail:`test${id}@gmail.com`
};

const experienceInitialState = {
  graduation: "",
  specialization: "",
  mrn: "",
  registrationYr:""
};

const clinicInitialState = {
    experience: "",
    location: "",
    hospitalName: ""
  };

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      
      return <ExperienceInfo />;
    case 2:
      return <ClinicInfo />;
    case 3:
        return <ListDoctorInfo />;
    default:
      return null;
  }
};

const Multiform = () => {
  const [personal, setPersonal] = useState(detailsInitialState);
  const [experience, setExperience] = useState(experienceInitialState);
  const [clinic, setClinic] = useState(clinicInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(()=>{
    async function doGetProfile() {
        let res = await axios.get(`http://localhost:8001/doctorInfo/18`);
        console.log(res);
        setProfile(res.data);
        
        console.log(profileDetails.firstName);
      }doGetProfile()
  },[])
  
  const [profileDetails,setProfile]=useState({});

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setPersonal(detailsInitialState);
      setExperience(experienceInitialState);
      setClinic(clinicInitialState)
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    
    <>
   
    <Provider value={{ personal, setPersonal, next, prev, experience, setExperience,clinic,setClinic }}>
    <Steps current={currentStep}>
        <Step title={"Personal details"} />
        <Step title={"Experience details"} />
        <Step title={"Clinic details"} />
        <Step title={"View Profile details"} />
      </Steps>
     {renderStep(currentStep)}
    </Provider>
    </>
  );
};
export default Multiform;