import { useAppContext } from '../../Context/AppContext';

function EventButton() {
    const {page, setPage} = useAppContext();
    
    let handleButtonClick = (event) => {
        setPage(event.currentTarget.value);
    }

    return (
        <button class="sm:grid sm_grid-rows-subgrid sm:row-start-2 sm:row-span-3 w-full bg-main_green rounded-3xl outline-none hover:bg-hover_green group my-2"
        value = {2} onClick = {handleButtonClick}>
            <div>
                <svg class="size-16 fill-current text-white ml-auto stroke-main_green group-hover:stroke-hover_green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>

            <div >
            <svg class="size-24 fill-none ml-1 stroke-main_gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

            </div>

            <div class = "row-start-3 h-full">
                <span class="text-white text-4xl ">
                    Eventkalender
                </span>
            </div>

        </button>
    );
}

export default EventButton;