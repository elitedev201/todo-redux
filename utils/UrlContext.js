import React, { useState, useContext } from 'react'

const UrlContext = React.createContext()

export function useUrl() {
    return useContext(UrlContext)
}

const UrlProvider = ({ children }) => {
    const [url, setUrl] = useState("")

    return (
        <div>
            <UrlContext.Provider value={{ url, setUrl }}>
                {children}
            </UrlContext.Provider>
        </div>
    )
}
export default UrlProvider;
