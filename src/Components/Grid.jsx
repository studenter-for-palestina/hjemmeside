import EventButton from "./Sub-components/Event-kalender-button.jsx";
import SimpleButton from "./Sub-components/simple-button.jsx";
import ComplexButton from "./Sub-components/complex-button.jsx";

function Grid(obj){
    return(
        <div class={"h-screen sm:grid sm:grid-cols-4 sm:grid-rows-4 sm:grid-flow-col sm:gap-5 sm:p-10 p-5 outline-none"}>
            <div class="sm:row-start-1 sm:col-start-1 sm:row-span-1">
                <a href="https://palestinakomiteen.no/?doing_wp_cron=1717623410.9656150341033935546875" class="flex" target="_blank">
                    <img src="/logo.png" alt="logo" class="bg-white rounded-full size-40 mr-4"/>
                    <p class = "uppercase content-center text-2xl leading-tight"> Studenter for palestina {obj.by}</p>
                </a>
            </div>

            <EventButton/>

            <ComplexButton row_loc="row-start-1" col_loc="col-start-2" span="row-span-1" img="info.svg" img_style = "size-20 ml-1" text = "om oss"/>

            <SimpleButton row_loc="row-start-2" col_loc="col-start-2" span="row-span-1" link = {obj.bli_medlem_link} img="members.svg" img_style = "size-20 ml-1" text="Bli medlem"/>
            
            <ComplexButton row_loc="row-start-3" col_loc="col-start-2" span="row-span-2" img="folder.svg" img_style = "size-20 ml-1" text = "Ressurser"/>

            <ComplexButton row_loc="row-start-1" col_loc="col-start-3" span="row-span-2" img="fire.svg" img_style = "size-20 ml-1" text = "Solidaritetscamp Thawra"/>

            <ComplexButton row_loc="row-start-3" col_loc="col-start-3" span="row-span-2" img="onskeliste.svg" img_style = "size-20 ml-1" text = "Ønskeliste"/>

            <SimpleButton row_loc="row-start-1" col_loc="col-start-4" span="row-span-2" link = {obj.spleis_link} 
            img="heart.svg" img_style = "w-1/4 ml-1" text="Støtt oss"/>

            <SimpleButton row_loc="row-start-3" col_loc="col-start-4" span="row-span-2" img="warning.svg" img_style = "size-20 ml-1" link = {obj.placeholder} text = "PLACEHOLDER"/>

        </div>
    )
}
export default Grid;