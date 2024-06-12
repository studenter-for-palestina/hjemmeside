import BackButton from './Sub-components/back-button';
import { Fragment } from "react";

function Kalender(obj){
    return (
        <Fragment>
            <div class = "sm:grid sm:grid-cols-2 sm:gap-4 h-screen">
                <div class = "h-full">
                    <BackButton />

                </div>
                <div class = "h-full grid grid-cols-1 divide-y-2">
                    <div>hei</div>
                    <div>hei</div>
                    <div>hei</div>
                    <div>hei</div>
                </div>
        

            </div>
        </Fragment>

    )
}

export default Kalender;