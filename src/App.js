import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";
import './App.css';
import PersonalDatas from "./component/PersonalData/PersonalData";
import Layout from "./component/layout";
import Experience from "./component/experience/Experience";
import Educations from "./component/education/education";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./component/home/Home";
import Projects from "./component/projects/Projects";
import Skills from "./component/skill/skills";
import Interest from "./component/interest/interest";
import Loading from "./component/loading/loading";

function App() {

  const [loader, setloader] = useState(true);
  const [PersonalData, setPersonalData] = useState([]);
  const [Experiances, setExperiances] = useState([])
  const [Education, setEducations] = useState([])
  const [Project, setProjects] = useState([])
  const [Skill, setSkills] = useState([])
  const [InterestData, setIntesest] = useState([])

  const pdf = () => {
    // const input = document.getElementById('sudha')
    // html2canvas(input).then((canvas)=>{
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdfs = new jsPDF();
    //   pdfs.addImage(imgData,'JPEG',0,0);
    //   pdfs.save('reume.pdf');
    // })
    const pdfs = new jsPDF('p', 'pt', 'A4');
    pdfs.html(document.getElementById('sudha'), {
      callback: () => {

        pdfs.save(`${PersonalData?.Fname}.pdf`);
      }
    });
    
  }
  setTimeout(() => {
    setloader(false)
  }, 4000);
  if(loader){
return (
  <Loading />
)
  }
  return (
    <BrowserRouter>
    
 
      <div className="App">
        

        <Switch>
          <Route path="/" exact>

            <Home />
          </Route>
          <Route path="/personal" exact>

            <PersonalDatas addPersonalData={setPersonalData} />
          </Route>
          <Route path="/education" exact>

           <Educations setEducations={setEducations} Education={Education}/>
          </Route>
          <Route path="/experience" exact>

          <Experience setExperiance={setExperiances} Experiance={Experiances}/>
          </Route>
          <Route path="/projects" exact>

          <Projects setProjects={setProjects}/>
          </Route>
          <Route path="/skills" exact>

          <Skills setSkill={setSkills}/>
          </Route>
          <Route path="/intrest" exact>

          <Interest setIntesest={setIntesest}/>
          </Route>
          <Route path="/download" exact>

        <div className="download_container">
          <h3>Choose Resume Template</h3>
       <div className="template_holder">
      <div className="Template">
      <div id="sudha" style={{width:'600px'}}>
  <Layout info={PersonalData} ExperiancesData={Experiances} EducationData = {Education} ProjectData = {Project} SkillData={Skill} InterestData={InterestData}/>
</div>
      </div>
       </div>
<button onClick={pdf} className="download_btn">Download</button>
        </div>
          </Route>
        </Switch>


        
        


       

      </div>
    </BrowserRouter>

  );
}

export default App;
