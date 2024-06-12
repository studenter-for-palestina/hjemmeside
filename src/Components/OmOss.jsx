import BackButton from './Sub-components/back-button';

function OmOss(obj){
    return(
        <div>
            <BackButton />
            <h1 class = "text-center text-4xl"> Studenter for palestina</h1>

            <div class = " text-2xl mx-auto my-3 w-4/6 grid grid-cols-1 gap-y-5">
                <div class = "flex"> 
                    Studenter for Palestina er en studentorganisasjon dedikert til å øke bevisstheten om det palestinske folkets kamp for frihet, rettferdighet og selvbestemmelse. Vi består av studenter fra ulike studieretninger og bakgrunner som er forent i vår solidaritet med Palestina. Vi arrangerer foredrag, seminarer og andre arrangementer for å spre informasjon.
                </div>
                
                <div >
                    <h1 class = "my-4 text-center font-bold"> HVA GJØR VI?</h1>
                    <h2 class = "font-bold">Bevisstgjøring og utdanning: </h2> 

                    <p class = "my-4">
                        Vi arrangerer foredrag, seminarer og filmvisninger for å informere om den historiske og nåværende situasjonen i Palestina. Vi inviterer akademikere, aktivister og journalister til å dele sin innsikt og kunnskap.
                    </p>

                    <h2 class = "font-bold">Kampanjer og Aksjoner: </h2>
                    <p class = "my-4">
                        Vi organiserer kampanjer og aksjoner for å rette oppmerksomheten mot palestinernes rettigheter og Norges mangel på konkrete handliger. Dette inkluderer protester, underskriftskampanjer teltaksjon og mer.
                    </p>

                </div>

                <div class = "grid">
                    <h2 class = "mb-4 font-bold">Bli med oss </h2>
                    Vi tror på at studenter kan være en kraft for positiv forandring. Ved å engasjere seg i Studenter for Palestina, kan du bidra til å skape en mer rettferdig verden. Uansett om du ønsker å lære mer, delta i aktivisme eller bidra med dine ferdigheter, er du hjertelig velkommen. Sammen kan vi gjøre en forskjell.
                    <a class ="bg-main_green hover:bg-hover_green rounded-3xl w-1/4 text-center mt-12 mx-auto p-3" href={obj.bli_medlem_link}> BLI MEDLEM</a>

                </div>

            </div>
        </div>
    )
}
export default OmOss; 