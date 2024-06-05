function Grid(){
    return(
        <div class=" w-full h-full grid grid-cols-4 grid-rows-6 gap-4 p-10">

            <div class="row-span-1 flex">
                <div class ="bg-white rounded-full mr-4">
                    <img src="/logo.png" alt="placeholder" class="rounded-full size-40"/>
                </div>
                <p class = "uppercase content-center w-32 text-xl leading-tight"> Studenter for palestina trondheim</p> {/* trondheim should be a varible that can be changes with another city*/}
            </div>

            <div class="row-start-2 row-span-3 bg-second rounded-3xl">
                <p class="text-white text-5xl grid-rows-subgrid">
                    Event-Kalender
                </p>
            </div>
            <div class="row-span-2 col-span-2">03</div>
        </div>
    )
}
export default Grid;