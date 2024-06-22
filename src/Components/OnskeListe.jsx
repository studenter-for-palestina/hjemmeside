import BackButton from './Sub-components/back-button';
import Liste from './Sub-components/liste';

function OnskeListe(obj){
    return (
        <div class = "h-screen ">
            <div >
                <BackButton />
            </div>
            <div class = " h-full mx-auto sm:w-1/2 item-center">
                <div class = "my-5 mx-8 p-4 bg-main_green rounded-3xl overflow-y-auto">
                    <h1 class = "text-3xl font-bold text-center text-white"  >Ønskeliste</h1>
                    {obj.liste.map((item, index) => (
                        <Liste index = {index+1} item = {item}/>
                    ))}

                </div>

            </div>

        </div>

    )}

export default OnskeListe;
