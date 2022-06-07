import imgCertificateBwa from '../images/certificate/bwa-certificate-full-stack-javascript-developer-2021-website-top-up-voucher-game-taufiq.jpg'
import imgCertificateWebDasar from '../images/certificate/sertifikat_course_web_dasar.jpg'
import ItemCertificate from "./molecules/itemCertificate";

export default function Certificate(params) {
    return(
        <section className="w-full lg:mt-4 mt-0 h-auto max-w-sm">
            <div className="h-full w-full bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray mb-3">Certificate</h3>
                <ItemCertificate title="MERN Stack Web Development" desc="Membangun Web TopUp Voucher Game" thumbnail={imgCertificateBwa}/>
                <ItemCertificate  title="Belejar Dasar Pemrograman Web" desc="Mempelajari Pemrograman web Dasar HTML, CSS & JS" thumbnail={imgCertificateWebDasar}/>
            </div>
        </section>
    )
}