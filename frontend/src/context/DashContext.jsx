import { createContext, useState} from 'react';

export const DashContext = createContext()

export const DashDataProvider = (props) => {
    const [showComp, setShowComp] = useState()



    // values
    const value = {
        showComp: [showComp, setShowComp],
    }

    return(
        <DashContext.Provider value={value}>
            {props.children}
        </DashContext.Provider>
    )
}

