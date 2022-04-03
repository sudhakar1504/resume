import React, { useState } from 'react'
import './skill.css';
import {NavLink} from 'react-router-dom';
import Banner from '../../assest/blue/skills.gif';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

const Skills = ({setSkill}) => {
    let history = useHistory();
    const [count, setCount] = useState(1);
    const [structure, setStructure] = useState();
    
    const getValue = (type)=>{
        let obj ={};
        let non = document.querySelectorAll('.work_experience');
        for (let i = 0; i < non.length; i++) {
            // let is_present = false;
            let company_name = non[i].querySelector('#c_name').value;
            // let company_location = non[i].querySelector('#c_location').value;
            // let company_role = non[i].querySelector('#c_role').value;
            // let company_Sdate = non[i].querySelector('#Sdate').value;
            // let company_Edate = non[i].querySelector('#Edate').value;
            // let company_aboutwork = non[i].querySelector('#aboutwork').value;
            // let company_present = non[i].querySelector('#present')

            // if(company_present.checked == true){
            //     company_Edate = "";
            //     is_present = true
            // }
            if(!company_name){
                toast.error("Kindly Fill The Field!", {
                    position: "top-center",
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                  });
            
                  return;
            
            }
            obj[i] ={
                "name" : company_name,
                // "location" : company_location,
                // "role" : company_role,
                // "Sdate" : company_Sdate,
                // "Edate" : company_Edate,
                // "about" : company_aboutwork,
                // "present" : is_present
            }
        }
        setStructure(obj);
        setSkill((prev)=>{
            return[obj]
        })
        if(type == "add"){
            setCount(count + 1)
        }else{
            
            history.push("/intrest");
        }
        // console.log(structure);
    }

    const Gen=({countID})=>{
        
            
            return(
                <div className="work_experience">
                    <p className="index_num">{countID + 1}</p>
                <div className="c_name">
                    {/* <label htmlFor="c_name">Company Name</label> */}
                    <input type="text" id="c_name" name = {countID} placeholder="Eg Html,Java,C++ etc.." autoComplete='off' defaultValue={structure?.[countID]?.name}/>
                </div>
                {/* <div className="C_location_and_role">
                <div className="c_location">
                    <label htmlFor="c_location">Location</label>
                    <input type="text" id="c_location" placeholder='Eg Chennai'  defaultValue={structure?.[countID]?.location} />
                </div>
                <div className="c_role">
                    <label htmlFor="c_role">Role</label>
                    <input type="text" id="c_role" placeholder='Eg BackEnd Developer' defaultValue={structure?.[countID]?.role}/>
                </div>
                </div> */}
    
                {/* <div className="S_date_and_E_date">
                    <div className="S_date">
                        <label htmlFor="Sdate">Start Date</label>
                        <input type="date" name="Sdate" id="Sdate" defaultValue={structure?.[countID]?.Sdate} />
                    </div>
                    <div className="E_date">
                        <label htmlFor="Edate">End Date</label>
                        <input type="date" name="Edate" id="Edate"defaultValue={structure?.[countID]?.Edate}/>
                    </div>
                    <div className="present">
                        <label htmlFor="present">present</label>
                        <input type="checkbox" name="present" id="present" defaultChecked={structure?.[countID]?.present}/>
                    </div>
                    
                </div> */}
    
                {/* <div className="about_work">
                    <label htmlFor="aboutwork">description</label>
                    <textarea name="aboutwork" id="aboutwork" cols="30" rows="10" defaultValue={structure?.[countID]?.about} placeholder='EG briefy your work'></textarea>
                </div> */}
            </div>
            )
            
        
    }
  return (
    <div className='skills_container'>
        <div className="education_title">
            <h2>Add Your Skills</h2>
           
        </div>


    <div className="education_main_container">
        <div className="education_bg_container">
            <img src={Banner} alt="banner" />
        </div>

        <div className="educaton_input_container">
        { [...Array(count)].map((_, i) => <Gen key={i} countID={i}/>) }

        </div>
    </div>

       
    <button onClick={()=> getValue("add")} className="addnew">Add New<i className="fa-solid fa-plus"></i></button>
      
    <button onClick={()=> getValue("next")} className="education_next">Next</button>
    <ToastContainer />
    </div>
  )
}

export default Skills