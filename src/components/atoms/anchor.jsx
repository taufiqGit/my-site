import cx from 'classnames'

export default function Anchor({ children, outline, href }) {
    let classBtn = cx({
        'text-white bg-blue-ori': !outline,
        'text-blue-ori bg-white border-2': outline
    })

    return(
        <a href={href} target='_blank' className={`mr-1.5 px-4 py-1.5 sm:mr-3 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg ${classBtn}`}>
            { children }
        </a>
    )
}