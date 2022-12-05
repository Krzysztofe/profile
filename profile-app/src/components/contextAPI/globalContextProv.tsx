import React, {createContext, FC, useState} from "react";


interface Props{
    children: React.ReactNode
}

export interface StarWarsData{
    name: string,
    created: string,
    vehicles: string []
}

export type ContextType = {
    starWarsData: StarWarsData[]
    setStarWarsData: React.Dispatch<React.SetStateAction<StarWarsData[] | []>>
}

export const GlobalContext = createContext<ContextType>({} as ContextType)

const GlobalContextProv: FC<Props> = ({children}) => {

    const [starWarsData, setStarWarsData] =
        useState<[] | StarWarsData []>(
    []
    )

    return(
         <GlobalContext.Provider value = {{starWarsData, setStarWarsData}}>
             {children}
        </GlobalContext.Provider>

    )
}

export default GlobalContextProv