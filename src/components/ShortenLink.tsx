import React, { FormEvent, useState } from 'react'

const ShortenLink = () => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [error, setError] = useState("");

    const shorten = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(value === "") {
            setValid(false);
            setError("Please add a link")
        }
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
                    className="ml-5 px-10 h-12 bg-primaryCyan border border-primaryCyan rounded-md font-extrabold text-white hover:opacity-75"
                    type="submit">
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