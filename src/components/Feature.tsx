import React from 'react'

interface Props {
    img: string;
    title: string;
    description: string;
    translate?: string;
}

const Feature = ({img, title, description, translate} : Props) => {
    return (
        <div className={`text-center md:text-left bg-white px-6 md:w-1/3 rounded-lg ${translate?translate:""} ${title==="Detailed Records"?"md:mx-5":""}`}>
            <div className="-translate-y-10">
                <div className="mx-auto md:m-0 bg-primaryDarkViolet p-5 w-fit rounded-full"><img src={img} alt={title}></img></div>
            </div>
            <div className="pb-10">
                <p className="text-xl font-extrabold -mt-2 mb-3 text-primaryBlack">{title}</p>
                <p className="font-medium text-neutralGrayishViolet">{description}</p>
            </div>     
        </div>
    )
}

export default Feature