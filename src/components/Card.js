import React from 'react'



function Card() {
    let logo = `${process.env.PUBLIC_URL}/images/Murals/profileImg2.jpg`;
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl pt-10 ">

                <figure><img style={{ borderRadius: '80px' }}  src={logo} alt="Shoes" /></figure>
                <div className="card-body">


                    <div className='py-5'>
                        <h1 className='flex justify-center text-xl font-bold'>Art Services</h1>
                        <div className='flex justify-center lg:justify-start'>
                        <ul className='pr-32 pt-2 '>
                            <li>🔷Murals</li>
                            <li>🔷Paintings</li>
                            <li>🔷Sketches</li>
                        </ul>
                        </div>
                    </div>
                    <div className='flex justify-center md:flex-row'>
                        <ul className=" p-2 rounded-lg ">
                            {/* lg:pt-10 lg:pb-10 */}
                            <li>Location: Kansas City, MO</li>
                            <li>Email: isabellareeves90@gmail.com</li>
                        </ul>
                    </div>
                    <div className="pt-5 flex justify-center ">
                        <button className='btn btn-primary'><a target="blank" href="https://www.instagram.com/bearpawservices/">Instagram</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card