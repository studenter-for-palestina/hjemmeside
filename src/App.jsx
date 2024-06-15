import './App.css'
import Grid from './Components/Grid'
import Kalender from './Components/Kalender'
import OmOss from './Components/OmOss'
import { useAppContext } from "./Context/AppContext";

function App() {
	const { page } = useAppContext();
    
  const grid = <Grid 
                  by = "Trondheim" 
                  bli_medlem_link = "https://docs.google.com/forms/d/e/1FAIpQLScKfgm3Pt80zE9Ll6ogfbUeJRqd0Wzdt74jnPrxzgahOFHr6g/viewform"
                  spleis_link = "https://www.spleis.no/project/371936"
                  disk_link = "https://drive.google.com/drive/folders/12IzO-MJ8YODd933nfj6TT1PiTv7eesl7?usp=sharing" 
                  placeholder = "/"
                  />

  const kalender = <Kalender 
                    events = {[
                    {title: "Sionismen", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "Peder Martin forteller om sionismen og dens hvordan sionismen spilleren avgjørende rolle. Han forteller også om sin erfaring med Isreal.", link: "https://www.google.com"
                    },

                    {title: "Nakbaen", date: "12.12.2025", time: "11:00", location: "Thawra", 
                    description: "This is a description of event 2", link: "https://www.google.com"
                    },

                    {title: "event 2", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "This is a description of event 1", link: "https://www.google.com"
                    },

                    {title: "event 3", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "This is a description of event 1", link: "https://www.google.com"
                    },

                    {title: "event 4", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "This is a description of event 1", link: "https://www.google.com"
                    },

                    {title: "event 5", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "This is a description of event 1", link: "https://www.google.com"
                    },

                    {title: "event 6", date: "12.12.2025", time: "10:00", location: "Thawra", 
                    description: "This is a description of event 1", link: "https://www.google.com"
                    },

                    ]}/>

  const omOss = <OmOss
                bli_medlem_link = "https://docs.google.com/forms/d/e/1FAIpQLScKfgm3Pt80zE9Ll6ogfbUeJRqd0Wzdt74jnPrxzgahOFHr6g/viewform"
                />


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
}

export default App
