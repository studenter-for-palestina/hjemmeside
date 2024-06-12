import './App.css'
import Grid from './Components/Grid'
import Kalender from './Components/Kalender'
import { useAppContext } from "./Context/AppContext";

function App() {
	const { page } = useAppContext();
    
  const grid = <Grid 
                  by = "trondheim" 
                  bli_medlem_link = "https://docs.google.com/forms/d/e/1FAIpQLScKfgm3Pt80zE9Ll6ogfbUeJRqd0Wzdt74jnPrxzgahOFHr6g/viewform"
                  spleis_link = "https://www.spleis.no/project/371936"
                  placeholder = "/"
                  />

  const kalender = <Kalender 
                    events = {[
                    {title: "Event 1", date: "2021-10-10", time: "10:00", location: "Trondheim", description: "This is a description of event 1", link: "https://www.google.com"
                    },
                    {title: "Event 2", date: "2021-10-11", time: "11:00", location: "Oslo", description: "This is a description of event 2", link: "https://www.google.com"
                    },
                    ]}
                    />
  
  console.log(page)
  if (page == 1){
    return grid
  }
  else if (page == 2){
    return kalender 
  }

}

export default App
