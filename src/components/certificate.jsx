import ItemCertificate from "./molecules/itemCertificate";


export default function Certificate(params) {
    return(
        <section className="w-full lg:mt-4 mt-0 h-auto max-w-sm">
            <div className="h-full w-full bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray mb-3">Certificate</h3>
                <ItemCertificate/>
                <ItemCertificate/>
            </div>
        </section>
    )
}