import BackButton from './Sub-components/back-button';

function Camp(obj){
    return(
        <div class = "h-screen">
            <div class = "grid grid-cols-3 grid-flow-col gap-3 h-full">
                <div class = " ">
                    <BackButton/>
                    <div>
                        <h2 class = "text-2xl text-center font-bold mt-20">kravene våre </h2>
                        <div class = "mt-10 text-2xl ">
                            <p class = "m-3"> - NTNU fryser samarbeidet med Kongsberg Gruppen, frem til Kongsberg Gruppen slutter å selge våpen og våpendeler til Israel, enten direkte eller via tredjeland.</p>
                            <p class = "m-3"> - NTNU ikke inngår nye forskningsprosjekt med israelske statlige institusjoner og bedrifter som bidrar til okkupasjonen av Palestina, via Horisont Europa rammeavtalen.</p>
                            <p class = "m-3"> - NTNU kommer med en uttalelse som fordømmer Israels angrep på sivile og på utdanningsinstitusjonene i Gaza.</p>
                            <p class = "m-3">  NTNU bidrar til gjenoppbyggingen av Gazas utdanningsinstitusjoner. Vi ber om at Styret ved NTNU tar opp kravene våres på sitt neste styremøte den 15. mai, eller ved et ekstraordinært styremøte senest 1. juni.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class = "text-center text-4xl mt-5">Camp Tharwa</h1>
                </div>
                <div class =" m-auto">
                    <h2 class = "text-2xl text-center font-bold mb-12">Plassering</h2>
                    <div class = "border">
                        <img src = "loc.png" />
                    </div>
                </div>

            </div>
       </div>
    )
}

export default Camp;