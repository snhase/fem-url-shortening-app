import React, { FormEvent, useState } from 'react'
import { urlData } from 'src/App'

interface Props {
    urlList:urlData[],
    setUrlList?:(value:urlData[])=>void,
    setCopy:(value:number|null)=>void
}

const ShortenLink = ({urlList, setUrlList, setCopy}:Props) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const shorten = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCopy(null);
        if(value === "") {
            setValid(false);
            setError("Please add a link")
        } else {
            setValid(true);
            setError("")
            sendShortenRequest(value)
        }
    }

    const sendShortenRequest = (link: string) => {
        setLoading(true)
        const url =`${serverUrl}/shorten`

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        const urlencoded = new URLSearchParams();
        urlencoded.append("url", link);

        fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            mode:"cors"
          })
        .then(response => response.json())
        .then((responseJson)=>{
            if(responseJson && responseJson.result_url) {
                let shortLink  = decodeURIComponent(responseJson.result_url);
                let updatedList:urlData[] = [...urlList];
                let savedLink =  updatedList.find(item => item.original === link)
                if(savedLink) {
                    let index = updatedList.findIndex(item => item.original === link)
                    updatedList[index].short = shortLink;
                } else {
                    updatedList.push({
                        original:link,
                        short:shortLink
                    })
                }
                setUrlList(updatedList);
                sessionStorage.setItem("urlList", JSON.stringify(updatedList));
                setLoading(false);
                setValue("");
            } else {
                if(responseJson.error) {
                    let message = responseJson.error.replace(/API Error:/g,"");
                    setValid(false);
                    setError(message);
                } else{
                    setValid(false);
                    setError("Server error, please retry or contact support");
                }
                setLoading(false);
            }
        }).catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        })
    }

    return (
        <div>
            <form
                 className="py-6 md:h-36 text-center md:flex md:items-center md:justify-center"
                onSubmit={shorten}>
                <input
                className={`w-[85%] md:w-[70%] rounded-md px-5 py-3 font-semibold 
                placeholder:text-neutralGrayishViolet 
                focus-visible:outline-none
                ${!valid?"border-2 border-secondaryRed outline-secondaryRed placeholder:text-secondaryRed placeholder:opacity-50":""}`}
                name="textInput"
                placeholder="Shorten a link here..."
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    setCopy(null)
                }}
                />
                <div> 
                <button 
                    className={`${!valid && error?"mt-14":"mt-8"} md:mt-0 md:ml-5 w-[85%] md:w-[150px] py-3 bg-primaryCyan border border-primaryCyan rounded-md
                    ${loading ? "ml-5 flex items-center justify-center" : ""} 
                    font-extrabold text-white text-center
                    hover:bg-secondaryCyan hover:border-secondaryCyan`}
                    type="submit">
                    {
                        loading?
                        <span >
                            <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                            <circle className="fill-primaryCyan opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                        :<></>
                    }
                    Shorten It!</button>
                    </div>
            </form>
            {
                !valid && error?
                <span className="absolute -translate-y-32 md:-translate-y-10 ml-8 md:ml-10 md:px-5 text-secondaryRed italic">{error}</span>
                :
                <></>
            }
        </div>
    )
}

export default ShortenLink;