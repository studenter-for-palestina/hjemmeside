import BackButton from './Sub-components/back-button';

function Camp(obj){
    return(
        <div class = "h-screen">
            <div>
                <div>
                    <BackButton/>
                </div>
                <div>
                    <h1 class = "text-center text-4xl mt-5">Camp Tharwa</h1>
                </div>
                <div>
                    <h2 class = "text-center text-2xl mt-10">Våre krav</h2>
                </div>
                <div class = "mt-5 mx-auto sm:text-center sm:w-1/2 text-2xl ">
                        <p class = "my-5"> - NTNU fryser samarbeidet med Kongsberg Gruppen, frem til Kongsberg Gruppen slutter å selge våpen og våpendeler til Israel, enten direkte eller via tredjeland.</p>
                        <p class = "my-5"> - NTNU ikke inngår nye forskningsprosjekt med israelske statlige institusjoner og bedrifter som bidrar til okkupasjonen av Palestina, via Horisont Europa rammeavtalen.</p>
                        <p class = "my-5"> - NTNU kommer med en uttalelse som fordømmer Israels angrep på sivile og på utdanningsinstitusjonene i Gaza.</p>
                        <p class = "my-5">  NTNU bidrar til gjenoppbyggingen av Gazas utdanningsinstitusjoner. Vi ber om at Styret ved NTNU tar opp kravene våres på sitt neste styremøte den 15. mai, eller ved et ekstraordinært styremøte senest 1. juni.</p>
                </div>
            </div>
       </div>
    )
}

export default Camp;
