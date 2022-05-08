import { useContext } from "react";
import { Context } from "../../context/context";


export default function Pagination() {
    const {totalPortofolio, showPerSlide, dispatch} = useContext(Context)
    let btnPagination = []

    for (let i = 1; i <= Math.ceil(totalPortofolio / showPerSlide); i++) {
        btnPagination.push(i);
    } 

    const handleSetSlide = (numSlide)=>{
        dispatch({
            type: "SET_SLIDE",
            payload: numSlide
        })
    }
    
    return (
        <div className="w-full mt-5 flex justify-end">
            <nav className="flex w-auto">
                {
                    btnPagination.map(item =>(
                        <button 
                        className="w-7 h-7 mx-1.5 border-2 text-gray border-gray focus:border-blue-ori focus:text-blue-ori rounded"
                        key={item}
                        onClick={() => handleSetSlide(item)}
                        >{item}</button>
                    ))
                }
                
            </nav>
        </div>
    )
}