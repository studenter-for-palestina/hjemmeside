function EventButton() {
    return (
        <button className="row-start-2 row-span-3 bg-second rounded-3xl outline-none hover:bg-third">
            <img src="/plus_cir.svg" className="bg-white rounded-full size-10" alt="temp_pluss" />
            <img src="https://www.svgrepo.com/show/35457/calendar-symbol.svg" className="size-20" />
            <span className="text-white text-4xl">
                Eventkalender
            </span>
        </button>
    );
}

export default EventButton;