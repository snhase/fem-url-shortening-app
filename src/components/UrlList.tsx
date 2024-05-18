import React, { useState } from "react"
import { urlData } from "src/App";

interface Props {
    urlList: urlData[]
}

const UrlListComponent = ({urlList}:Props) => {
    
    const [copy, setCopy] = useState(null);

    return(
        <div className="mx-auto max-w-[1000px] -translate-y-16">
            {
                urlList?
                urlList.map((item, idx)=> {
                    return(
                        <div
                            key={item.short}
                            className="m-4 py-3 md:flex md:items-center md:justify-between bg-white rounded-md">
                            <div className="px-5 py-3 md:py-0 text-primaryDarkViolet font-medium text-lg">{item.original}</div>
                            <div className="px-5 py-3 border-t border-neutralGray md:border-0 md:py-0 md:flex md:items-center">
                                <div className="py-3 md:py-0 text-primaryCyan font-medium text-lg">{item.short}</div>
                                <button
                                    className={`md:ml-5 w-full md:w-[100px] p-2 h-10 bg-primaryCyan border border-primaryCyan 
                                    rounded-md font-extrabold text-white hover:bg-secondaryCyan hover:border-secondaryCyan
                                    ${ copy === idx ? "bg-primaryDarkViolet border-primaryDarkViolet hover:bg-primaryDarkViolet hover:border-primaryDarkViolet" : "" }`}
                                    onClick={() => {
                                        navigator.clipboard.writeText(item.short);
                                        setCopy(idx)
                                    }}
                                >{copy === idx ?"Copied!":"Copy"}</button>
                            </div>
                        </div>
                    );
                })
                :<></>
            }
            
        </div>
    )
}

export default UrlListComponent;