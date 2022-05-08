import imgCertificate from '../../images/certificate/bwa-certificate-full-stack-javascript-developer-2021-website-top-up-voucher-game-taufiq.jpg'

export default function ItemCertificate(params) {
    return(
        <div className='w-full mt-5'>
            <img className='w-full h-36 border-gray-ori object-cover rounded-lg border' src={imgCertificate} alt="asd" />
            <h3 className='text-black-ori mt-2.5 font-semibold'>MERN Stack Web Development</h3>
            <p className='mt-1.5 text-gray-3 text-sm'>Donec aliquam est dui, vel vestibulum diam sollicitudin id.</p>
        </div>
    )
}