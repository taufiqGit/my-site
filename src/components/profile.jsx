import avatar from '../images/me.png'
import mailIcon from '../images/mail.svg'
import callIcon from '../images/call.svg'

export default function Profile() {
    return(
        <figure className='flex flex-col items-center lg:flex-row bg-white p-6 rounded-lg'>
          <img className='w-64 h-60 rounded object-cover' src={avatar} alt="avatar" />
          <div className='ml-4 mt-8 lg:mt-0 w-full'>
            <figcaption className='flex flex-col sm:flex-row justify-between w-full'>
              <div>
                <h2 className='text-2xl font-semibold text-gray'>Taufiq Hidayah</h2>
                <span className='text-lg mt-3 text-gray-3'>Front-end developer</span>
              </div>
              <div className='flex flex-col mt-4 sm:mt-0'>
                <span className='text-lg text-gray'>
                  <img className='inline-block w-7 mr-2' src={mailIcon} alt="mail" /> 
                  taufiqhidayah1199@gmail.com
                </span>
                <span className='text-lg mt-2 text-gray'>
                  <img className='inline-block w-7 mr-2' src={callIcon} alt="call" />
                  (+62) 896 440 948 93
                </span>
              </div>
            </figcaption>
            <blockquote className='mt-7'>
                <p className='text-lg font-light leading-6 text-gray-3'>Self-motivated developer, who is willing to learn and create outstanding UI applications, <br/>and the build size is tiny.</p>
                {/* <p className='mt-2 text-lg font-light leading-6 text-gray-3'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. It’s easy to customize, customize.</p>             */}
            </blockquote>
          </div>
        </figure>   
    )
}