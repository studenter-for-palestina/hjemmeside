import { useAppContext } from '../../Context/AppContext';

function EventButton() {
    const { visibility, setVisibility } = useAppContext();
    
    let handleButtonClick = (event) => {
        setVisibility(event.target.value === "1" ? "visible" : "hidden");
    }

    return (
        <button className="grid grid-rows-subgrid row-start-2 row-span-3 bg-second rounded-3xl outline-none hover:bg-third"
        value = "2" onClick = {handleButtonClick}>
            <div>
                <img src="/plus_cir.svg" alt="temp_pluss" class="bg-white rounded-full size-10 ml-auto mt-5 mr-3" />
            </div>

            <div >
                <img src="https://www.svgrepo.com/show/35457/calendar-symbol.svg" class="size-36 ml-10 mt-10" />
            </div>

            <div class = "row-start-3">
                <span className="text-white text-4xl">
                    Eventkalender
                </span>
            </div>

        </button>
    );
}

export default EventButton;