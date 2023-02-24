import React, { useCallback, useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [g_name, setGName] = useState(true);
    const [g_token, setGToken] = useState('0');
    const [g_expire, setGExpire] = useState(false);
    
    const g_base_url = 'http://localhost:5000';
    
    return (
        <AppContext.Provider
            value={{
                g_name, setGName,
                g_token, setGToken,
                g_expire, setGExpire,
                g_base_url
            }}
        >
            { children }
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

