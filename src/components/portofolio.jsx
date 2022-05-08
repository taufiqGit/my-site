import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"
import Select from "./atoms/select"
import ItemProject from "./molecules/itemProject"
import Pagination from "./molecules/pagination"


export default function Portofolio() {
    const { totalPortofolio, portofolio, currentSlide, showPerSlide } = useContext(Context)
    const [listPortofolio, setListPortofolio] = useState([])

    useEffect(()=>{
        const indexOfLastPorto = currentSlide * showPerSlide
        const indexOfFirstPorto = indexOfLastPorto - showPerSlide
        const currentSlidePorto = portofolio.slice(indexOfFirstPorto, indexOfLastPorto)
        setListPortofolio(currentSlidePorto)
    }, [currentSlide, portofolio])
//console.log('porto');

    return(
        <section className="w-full h-auto mt-4 lg:mt-0">
            <div className="w-full h-auto bg-white rounded-lg p-4 flex justify-between items-center">
                <h3 className="text-gray text-lg">Projects ({totalPortofolio})</h3>
                <Select/>
            </div>
            {
                listPortofolio.map(item =>(
                    <ItemProject 
                        key={item.id}
                        title={item.title}
                        desc={item.desc}
                        thumbnail={item.thumbnail}
                        tags={item.tags}
                        link_demo={item.link_demo}
                        link_repo={item.link_repo}
                    />
                ))
            }
            <Pagination />
        </section>
    )
}