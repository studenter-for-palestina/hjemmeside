import { useAppContext } from '../../Context/AppContext';

function ComplexButton(obj) {
	const {page, setPage} = useAppContext();

	let handleButtonClick = (event) => {
        setPage(event.currentTarget.value);
    }
	if (obj.span === "row-span-2") {
		return (
		<button class={obj.row_loc + " " + obj.col_loc + " " + obj.span + " " 
			+ "sm:grid sm:grid-rows-subgrid outline-none bg-main_green rounded-3xl hover:bg-hover_green group w-full sm:h-full my-2 shadow-xl"} 
			value = {obj.value} onClick = {handleButtonClick}>
				
				<div>
					<svg class="size-16 fill-current text-white ml-auto stroke-main_green group-hover:stroke-hover_green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" >
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>

					<img src = {obj.img} class = {obj.img_style} alt = "figur"/>
				</div>
				<div>
					<span class="text-white text-4xl ">{obj.text}</span>
				</div>
		</button>
		);
  
  	}
	else{
	return (
	<button class={obj.row_loc + " " + obj.col_loc + " " + obj.span + " " 
		+ "bg-main_green rounded-3xl hover:bg-hover_green outline-none group w-full my-2 shadow-xl"}
		value = {obj.value} onClick = {handleButtonClick}>

		<svg class="size-16 fill-current text-white ml-auto stroke-main_green group-hover:stroke-hover_green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" >
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		</svg>

		<div class = "flex ">
			<img src = {obj.img} class = {obj.img_style} alt = "figur"/>
			<span class="text-white text-4xl m-auto">{obj.text}</span>
		</div>

	</button>
	);
	}
}

export default ComplexButton;