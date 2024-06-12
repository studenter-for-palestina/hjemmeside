import BackButton from './Sub-components/back-button';
import { Fragment } from "react";

function Kalender(obj){
    function kalenderEvent(event){
        return (
            <div class = " p-4 m-4">
                <div class = "flex flex-wrap">
                    <h1 class = "text-2xl font-bold ">{event.title}</h1>
                    <h1 class = "text-2xl font-bold underline sm:px-2">{"" + event.date + " kl " + event.time }</h1>
                    <h1 class = "text-2xl px-2"> { " | " }</h1>
                    <h1 class = "text-2xl text-main_orange sm:px-2"> {  event.location}</h1>
                </div>
                <p class = "text-lg text-main_green text-ellipsis break-words">{event.description}</p>
                <a href = {event.link} class = "text-black">Link til arragment</a>
            </div>
        )
    }
    return (
        <Fragment>
            <div class = "sm:grid sm:grid-cols-2 sm:gap-4 h-screen">
                <div class = "">
                    <BackButton />
                    <svg class="size-96 fill-none mx-auto my-32 stroke-main_gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>

                </div>
                <div class = "h-full ml-10 w-3/4 grid grid-cols-1 divide-y-2 divide-black sm:overflow-y-auto">
                    {obj.events.map(event => kalenderEvent(event))}
                </div>
        

            </div>
        </Fragment>

    )
}

export default Kalender;