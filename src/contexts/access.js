import React from 'react'

export const AccessContext = React.createContext(null)

export const AccessProvider = ({ children }) => {
    const [isFirstAccess, setIsFirstAccess] = React.useState(true)
    const [pageLoaded, setPageLoaded] = React.useState(false)
    
    React.useEffect(() => {
        const firstAccess = JSON.stringify(localStorage.getItem('isFirstAccess')) 

        if(firstAccess == 'null') {
            localStorage.setItem('isFirstAccess', JSON.stringify(true))
            setIsFirstAccess(true)
        } else {
            localStorage.setItem('isFirstAccess', JSON.stringify(false))
            setIsFirstAccess(false)
        }

        setPageLoaded(true)
    }, [])

    return (
        <AccessContext.Provider value={[isFirstAccess, pageLoaded]}>
            {children}
        </AccessContext.Provider>
    )
}