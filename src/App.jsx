import './App.css'
import Grid from './Components/Grid'
import Kalender from './Components/Kalender'
import OmOss from './Components/OmOss'
import Campen from './Components/Campen'
import OnskeListe from './Components/OnskeListe'
import { useAppContext } from "./Context/AppContext";

function App() {
	const { page } = useAppContext();
  
  {/*Variablen under medlem_link kan endres*/}
  const medlem_link = "https://docs.google.com/forms/d/e/1FAIpQLScKfgm3Pt80zE9Ll6ogfbUeJRqd0Wzdt74jnPrxzgahOFHr6g/viewform"

  {/*Variablene under Grid kan endres*/}
  const grid = <Grid 
                  by = "Trondheim" 
                  bli_medlem_link = {medlem_link}
                  spleis_link = "https://www.spleis.no/project/371936"
                  disk_link = "https://drive.google.com/drive/folders/12IzO-MJ8YODd933nfj6TT1PiTv7eesl7?usp=sharing" 
                  link_tree = "https://linktr.ee/Studenterforpalestinatrd"
                  />

  {/*Variablene under Kalender kan endres*/}
  const kalender = <Kalender 
                    events = {[
                    {title: "Sionismen", date: "14.06.2025", time: "18:00", location: "Thawra", 
                    description: "Peder Martin forteller om sionismen og dens hvordan sionismen spilleren avgjørende rolle. Han forteller også om sin erfaring med Isreal.", link: "https://www.facebook.com/p/Studenter-for-Palestina-Trondheim-100087592323689/"
                    },

                    {title: "TBA", date: "TBA", time: "00:00", location: "Thawra", 
                    description: "TBA", link: "/"
                    },

                    ]}/>

  {/*Variablen(e) under OmOss kan endres*/}
  const omOss = <OmOss
                bli_medlem_link = {medlem_link}
                />

  const campen = <Campen/>

  {/*variablen(e) under onskeListe kan endres */}
  const onskeListe = <OnskeListe
                    liste = {["Oppbevaringsbokser","Preseninger","Bålpanne","Gulvtepper","Varme måltider","Soveposer","Liggeunderlag","Telt","Varme klær","Hansker", "Lyskilder"]}/>

  console.log(page)
  if (page == 1){
    return grid
  }
  else if (page == 2){
    return kalender 
  }
  else if (page == 3){
    return omOss
  }
  else if (page == 4){
    return campen
  }
  else if (page ==5){
   return (onskeListe) 
  }
}

export default App
