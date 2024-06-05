function SimpleButton(obj){
    return (            
    <a class={obj.row_loc + " " + obj.col_loc + " " + obj.span + " " 
    + "bg-second rounded-3xl shadow-3xl hover:bg-third"} 
    href={obj.link} target="_blank">
        <img src = "/plus_cir.svg" class = "bg-white rounded-full size-10 " alt = "pluss icon"/>
        <img src = {obj.img} class = {obj.img_style} alt = "figur"/>
        <span class = "text-white text-4xl">{obj.text}</span>
    </a>)
}
export default SimpleButton;