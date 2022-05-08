

export default function ItemStack({name, icon}) {
    return(
        <div className="w-full flex justify-between items-center mt-4">
            <span className="text-gray">{name}</span>
            <img className="w-8" src={icon} alt={name} />
        </div>
    )
}