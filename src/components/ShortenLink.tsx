import React, { FormEvent, useState } from 'react'
import { urlData } from 'src/App'

interface Props {
    urlList:urlData[],
    setUrlList?:(value:urlData[])=>void
}

const ShortenLink = ({urlList, setUrlList}:Props) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const shorten = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
        if(value === "") {
            setValid(false);
            setError("Please add a link")
        } else {
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
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            } else {
                return response.json();
            }
        })
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
            } else {
                return responseJson.error? setError(responseJson.error) : "Error parsing body"
            }
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        })
    }

    return (
        <div>
            <form 
                className="h-36 flex items-center justify-center"
                onSubmit={shorten}>
                <input
                className={`w-[70%] h-12 rounded-md px-5 font-semibold 
                placeholder:text-neutralGrayishViolet 
                focus-visible:outline-none
                ${!valid?"border-2 border-secondaryRed outline-secondaryRed placeholder:text-secondaryRed placeholder:opacity-50":""}`}
                name="textInput"
                placeholder="Shorten a link here..."
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                /> 
                <button 
                    className="ml-5 px-10 h-12 flex items-center bg-primaryCyan border border-primaryCyan rounded-md font-extrabold text-white hover:opacity-75"
                    type="submit">
                    {
                        loading?
                        <span>
                            <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                            <circle className="fill-primaryCyan opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                        :<></>
                    }
                    Shorten It!</button>
            </form>
            {
                !valid && error?
                <span className="-translate-y-10 ml-10 absolute px-5 text-secondaryRed italic">{error}</span>
                :
                <></>
            }
        </div>
    )
}

export default ShortenLink;