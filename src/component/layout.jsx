import React from 'react'
import './layout.css'

const layout = ({info,ExperiancesData,EducationData,ProjectData,SkillData,InterestData}) => {
  let obj;
  let objEducation;
  let objProject;
  let objSkill;
  let objInterest;

  let experienceArray = [];
  let EducationArray = [];
  let ProjectArray = [];
  let SkillArray = [];
  let InterestArray = [];

  if(ExperiancesData?.[0]){

     obj = Object.keys(ExperiancesData?.[0])?.length
  }
  for (let i = 0; i < obj; i++) {
    
    experienceArray.push(ExperiancesData?.[0]?.[i])
  }
  if(EducationData?.[0]){

     objEducation = Object.keys(EducationData?.[0])?.length
 }
  
  for (let i = 0; i < objEducation; i++) {
    
    EducationArray.push(EducationData?.[0]?.[i])
  }
  if(ProjectData?.[0]){

    objProject = Object.keys(ProjectData?.[0])?.length
}
for (let i = 0; i < objProject; i++) {
    
  ProjectArray.push(ProjectData?.[0]?.[i])
}
if(SkillData?.[0]){

  objSkill = Object.keys(SkillData?.[0])?.length
}
for (let i = 0; i < objSkill; i++) {
  
  SkillArray.push(SkillData?.[0]?.[i])
}
if(InterestData?.[0]){

  objInterest = Object.keys(InterestData?.[0])?.length
}
for (let i = 0; i < objInterest; i++) {
  
  InterestArray.push(InterestData?.[0]?.[i])
}
  console.log(InterestArray);
  
  return (
<div className="container">
  <div className="header">
    <div className="full-name">
      <span className="first-name">{info?.Fname}</span> 
      <span className="last-name">{info?.Lname}</span>
    </div>
    <div className="contact-info">
      <span className="email">Email: </span>
      <span className="email-val">{info?.email}</span>
      <span className="separator"></span>
      <span className="phone">Phone: </span>
      <span className="phone-val">{info?.phoneno}</span>
    </div>
    
    <div className="about">
      <span className="position">{info?.role}</span>
      <span className="desc">{info?.objective}
      </span>
    </div>
  </div>
   <div className="details">
    <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list" >
     {experienceArray.map((item,idx)=>{
       return (
        <div className="section__list-item" key={idx}>
        <div className="left">
          <div className="name">{item.name}</div>
          <div className="addr">{item.location}</div>
          <div className="duration">{item.Sdate} - {item.present == false ? `${item.Edate}` : `Present`}</div>
        </div>
        <div className="right">
          <div className="name">{item.role}</div>
          
        </div>
         
        <div className="desc experience_des">{item.about}</div>
      </div>

)
})}
</div>
    </div>
    <div className="section">
      <div className="section__title">Education</div>
      <div className="section__list">
        
       {EducationArray.map((item,idx)=>{
         return (
          <div className="section__list-item" key={idx}>
          <div className="left">
            <div className="name">{item.name}</div>
            <div className="addr">{item.location}</div>
            <div className="duration">{item.Sdate} - {item.present == false ? `${item.Edate}` : `Present`}</div>
          </div>
          <div className="right">
            <div className="name">{item.role}</div>
            <div className="desc">{item.about}</div>
          </div>
        </div>
         )
       })}

      </div>
      
  </div>
     <div className="section">
      <div className="section__title">Projects</div> 
       <div className="section__list">
        {ProjectArray.map((item,idx)=>{
          return (
            <div className="section__list-item li_list" key ={idx}>
          <div className="left">
            <div className="name">{item.name}</div>
          <a className="link" href={item.role}>{item.role}</a>
            <div className="text">{item.about}</div>
          </div>
            <div className="right">
            <div className="name">{item.Sdate} - {item.Edate}</div>
          </div>
          </div>
          )
        })}
        
       </div>
    </div>
     <div className="section">
       <div className="section__title">Skills</div>
       <ul className="skills">
         {SkillArray.map((item,idx)=>{
           return(
            <li key={idx}>{
              item.name
            }</li>
           )
         })}
         
       </ul>
         
       </div>
     <div className="section">
     <div className="section__title">
       Interests
       </div>
       <div className="section__list">
         <ul className="section__list-item">
         {InterestArray.map((item,idx)=>{
           return(
            <li key={idx}>{
              item.name
            }</li>
            )
          })}
          </ul>
       </div>
     </div>
     </div>
  </div>
  )
}

export default layout