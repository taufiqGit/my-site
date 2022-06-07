import imgCertificate from '../../images/certificate/bwa-certificate-full-stack-javascript-developer-2021-website-top-up-voucher-game-taufiq.jpg'

export default function ItemCertificate(props) {
    const { title, desc, thumbnail } = props
    return(
        <div className='w-full mt-5'>
            <img className='w-full h-36 border-gray-ori object-cover rounded-lg border' src={thumbnail} alt="asd" />
            <h3 className='text-black-ori mt-2.5 font-semibold'>{title}</h3>
            <p className='mt-1.5 text-gray-3 text-sm'>{desc}</p>
        </div>
    )
}