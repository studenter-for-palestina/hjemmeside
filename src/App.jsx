import './App.css'
import Grid from './Components/Grid'
import Kalender from './Components/Kalender'
import OmOss from './Components/OmOss'
import Campen from './Components/Campen'
import OnskeListe from './Components/OnskeListe'
import { useAppContext } from "./Context/AppContext";
import config from '../config';

function App() {
	const { page } = useAppContext();
  
  const grid = <Grid 
                  by = {config.LENKER.BY}
                  bli_medlem_link = {config.LENKER.MEDLEM_LINK}
                  spleis_link = {config.LENKER.SPLEIS_LINK}
                  disk_link = {config.LENKER.DISK_LINK}
                  face_page = {config.LENKER.FACE_PAGE}
                  />

  const kalender = <Kalender events = {config.EVENTS}/>

  const omOss = <OmOss
                bli_medlem_link = {config.LENKER.MEDLEM_LINK}
                />

  const campen = <Campen/>

  const onskeListe = <OnskeListe liste = {config.ONSKELISTE}/>

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
