function Grid(){
    return(
        <div class=" w-full h-full grid grid-cols-4 grid-rows-6 gap-4">
            <div class="row-span-1">

                <div class ="bg-white">
                    <img src="/logo.png" alt="placeholder" class="rounded-full"/>
                </div>
                <p class = "uppercase"> Studenter for palestina trondheim</p>

            </div>

            <div class="col-span-4">02</div>
            <div class="row-span-2 col-span-2">03</div>
        </div>
    )
}
export default Grid;