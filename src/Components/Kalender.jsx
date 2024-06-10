import { useAppContext } from '../Context/AppContext';

function Kalender(obj){
    const { visibility, setVisibility } = useAppContext();

    let handleButtonClick = (event) => {
      setVisibility(event.target.value === "1" ? "visible" : "hidden");
    }
    return(
    <button className={obj.visibility + " " + "p-3 bg-main_green rounded-3xl outline-none hover:bg-third"}
    value = "1" onClick={handleButtonClick}>
        BACK
    </button>
    )
    
}

export default Kalender;