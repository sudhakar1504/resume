import React, { useState ,useRef} from 'react';
import './personalData.css';
import {NavLink} from  'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import Banner from './../../assest/blue/personal.gif'

const PersonalData = ({addPersonalData}) => {
    const [DATA, setDATA] = useState({

    });
    const [goto, setGoto] = useState(false)
    const NameInput = useRef();
    const LNameInput = useRef();
    const gmailInput = useRef();
    const roleInput = useRef();
    const numInput = useRef();
    const objectiveInput = useRef();
const setpersonalData = (e)=>{
    // console.log(e.target.value);
    if(NameInput.current.value && gmailInput.current.value && roleInput.current.value && numInput.current.value && objectiveInput.current.value){

        setGoto(true)
    }
    setDATA((prevState)=>{
        return {
            ...prevState,
            [e.target.id] : e.target.value,
        }
    })


}

    const sendToPersonal =()=>{
        

       if(NameInput.current.value && LNameInput.current.value && gmailInput.current.value && roleInput.current.value && numInput.current.value && objectiveInput.current.value){

        setGoto(true)
        console.log(DATA);
        addPersonalData(DATA)
       }else{
        toast.error("Kindly Fill The Field!", {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });

          return;

          
        }
    }

   
  return (
    <>
    <div className="personalData_main_container">
    <div className="personalData_container">
    <h2>Personal Information</h2>
    <div>
    <label htmlFor="name">First Name</label>
    <input type="text" id="Fname" ref={NameInput} required autoComplete="new-off" placeholder='eg John' onInput={(e) => setpersonalData(e)}/>
    </div>
    <div>
    <label htmlFor="name">Last Name</label>
    <input type="text" id="Lname" ref={LNameInput} required placeholder='eg Doe' autoComplete="new-off" onInput={(e) => setpersonalData(e)}/>
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" ref={gmailInput} required autoComplete="new-off" placeholder='eg JohnDoe@gmail.com' onInput={(e) => setpersonalData(e)}/>
    </div>
    <div>
    <label htmlFor="phoneno">Phone no</label>
    <input type="number" id="phoneno" ref={numInput} required autoComplete="off" placeholder='eg 7377890234' onInput={(e) => setpersonalData(e)}/>
    </div>
    <div>
    <label htmlFor="role">Role</label>
    <input type="text" id="role" ref={roleInput} required autoComplete="new-off" placeholder='eg Full Stack Developer' onInput={(e) => setpersonalData(e)}/>
    </div>
    <div>
    <label htmlFor="objective">objective</label>
    <textarea type="text" id="objective" ref={objectiveInput}  placeholder='Eg brief yourSelf...' onInput={(e) => setpersonalData(e)}></textarea>
    </div>

    <NavLink to={goto ? "/education" : "/personal"}><button onClick={sendToPersonal}>Next</button></NavLink>
    </div>

    <div className="personal_bg_container">
        <img src={Banner} alt="banner" />
    </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default PersonalData