import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const HandleClose = () => {
        setIsOpen(false)
    }

    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen, HandleClose}}>{children}</SidebarContext.Provider>
    )
}

export default SidebarProvider