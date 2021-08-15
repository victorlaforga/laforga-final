import React from 'react'

export const AccessContext = React.createContext(null)

export const AccessProvider = ({ children }) => {
    const isFirstAccess = false
    const pageLoaded = true

    return (
        <AccessContext.Provider value={[isFirstAccess, pageLoaded]}>
            {children}
        </AccessContext.Provider>
    )
}