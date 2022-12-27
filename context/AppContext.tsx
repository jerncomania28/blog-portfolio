
import React, { createContext, useState } from "react";


interface InitialStateProps {
    customVariant: string;
    textEnter: () => void;
    textLeave: () => void;
    textImage: () => void;
}

const initialState = {
    customVariant: "default",
    textEnter: () => null,
    textLeave: () => null,
    textImage: () => null
}


export const AppContext = createContext<InitialStateProps>(initialState)


const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const [customVariant, setCustomVariant] = useState<string>("default");

    const textEnter = () => setCustomVariant("text")
    const textLeave = () => setCustomVariant("default")
    const textImage = () => setCustomVariant("image")


    const value = {
        customVariant,
        textEnter,
        textLeave,
        textImage
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;