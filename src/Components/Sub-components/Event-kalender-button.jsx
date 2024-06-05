import { useAppContext } from '../../Context/AppContext';

function EventButton() {
    const { visibility, setVisibility } = useAppContext();
    
    let handleButtonClick = (event) => {
        setVisibility(event.target.value === "1" ? "visible" : "hidden");
    }

    return (
        <button className="row-start-2 row-span-3 bg-second rounded-3xl outline-none hover:bg-third"
        value = "2" onClick = {handleButtonClick}>
            <img src="/plus_cir.svg" className="bg-white rounded-full size-10" alt="temp_pluss" />
            <img src="https://www.svgrepo.com/show/35457/calendar-symbol.svg" className="size-20" />
            <span className="text-white text-4xl">
                Eventkalender
            </span>
        </button>
    );
}

export default EventButton;