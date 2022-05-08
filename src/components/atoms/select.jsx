import { useContext, useState } from "react"
import { Context } from "../../context/context"
import DataPortofolio from "../../dataPortofolio/data"

const hastag = ['All', '#Responsive', '#CSS','#Tailwind', '#SCSS', '#ReactJs', '#Typescript', '#NextJs', '#Webpack']

export default function Select(params) {
    
    const { dispatch } = useContext(Context)
    const [showDropdown, setShowDropdown] = useState(false)
    const [currentSelect, setCurrentSelect] = useState('Select Tag')

    const handleSelect = (valSelect)=>{
        setCurrentSelect(valSelect)
        setShowDropdown(false)
        if (valSelect === 'All') {
            dispatch({
                type: "SET_TAG",
                payload: DataPortofolio
            })
        } else {
            const filterPortoSelect = DataPortofolio.filter(val => {
              return  val.tags.includes(valSelect)
            })
            dispatch({
                type: "SET_TAG",
                payload: filterPortoSelect
            })
            console.log(filterPortoSelect);
        }
        dispatch({
            type: "SET_SLIDE",
            payload: 1
        })
    }
    return(
        <div className="ml-5 w-48 h-10 relative">
                <button 
                    onClick={()=> setShowDropdown(!showDropdown)}
                    className="w-full h-full border-blue-ori rounded border-2 flex items-center justify-between px-2">
                    <span className="text-blue-ori">{currentSelect}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2F80ED" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                    </svg>
                </button>
                {
                    showDropdown ? (
                        <ul className="absolute left-0 right-0 top-full w-full h-auto overflow-y-auto max-h-40 bg-white border-blue-ori rounded border-2 mt-2">
                            {
                                hastag.map((val, index)=>(
                                   <li 
                                   onClick={()=> handleSelect(val)} 
                                   className="w-full px-2 py-1.5 text-blue-ori hover:bg-blue-ori hover:text-white cursor-pointer" key={index}>{val}</li> 
                                ))
                            }
                        </ul>                        
                    ) : ''
                }
        </div>
    )
}