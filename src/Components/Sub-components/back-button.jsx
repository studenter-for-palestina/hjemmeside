import { useAppContext } from '../../Context/AppContext';

function BackButton(){
    const {page, setPage} = useAppContext();
    
    let handleButtonClick = (event) => {
        setPage(event.currentTarget.value);
    }
  
    return (
      <button class={"p-3 m-3 bg-main_green rounded-3xl outline-none hover:bg-hover_green"}
        value = {1} onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#292D32" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
  )
  
}

export default BackButton;