import EventButton from "./Sub-components/Event-kalender-button.jsx";
import SimpleButton from "./Sub-components/simple-button.jsx";
import ComplexButton from "./Sub-components/complex-button.jsx";

function Grid(obj){
    return(
        <div class={ obj.visibility + " " + "h-screen grid grid-cols-4 grid-rows-4 gap-6 p-10 outline-none"}>

            <div class="row-start-1 col-start-1 row-span-1">
                <a href="https://palestinakomiteen.no/?doing_wp_cron=1717623410.9656150341033935546875" class="flex" target="_blank">
                    <img src="/logo.png" alt="logo" class="bg-white rounded-full size-40 mr-4"/>
                    <p class = "uppercase content-center text-2xl leading-tight"> Studenter for palestina {obj.by}</p>
                </a>
            </div>

            <EventButton/>

            <ComplexButton row_loc="row-start-1" col_loc="col-start-2" span="row-span-1" img="members.svg" img_style = "size-20" text = "om oss"/>

            <SimpleButton row_loc="row-start-2" col_loc="col-start-2" span="row-span-1" link = {obj.bli_medlem_link} img="members.svg" img_style = "size-20 " text="Bli medlem"/>
            
            <ComplexButton row_loc="row-start-3" col_loc="col-start-2" span="row-span-2" img="members.svg" img_style = "size-20" text = "Ressurser"/>

            <ComplexButton row_loc="row-start-1" col_loc="col-start-3" span="row-span-2" img="members.svg" img_style = "size-20" text = "Solidaritetscamp Thawra"/>

            <ComplexButton row_loc="row-start-3" col_loc="col-start-3" span="row-span-2" img="members.svg" img_style = "size-20" text = "Ønskeliste"/>

            <SimpleButton row_loc="row-start-1" col_loc="col-start-4" span="row-span-2" link = {obj.spleis_link} 
            img="members.svg" img_style = "size-20 " text="Spleis"/>

            <SimpleButton row_loc="row-start-3" col_loc="col-start-4" span="row-span-2" img="members.svg" img_style = "size-20" link = {obj.placeholder} text = "PLACEHOLDER"/>

        </div>
    )
}
export default Grid;