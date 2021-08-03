import React, { useEffect, useState } from 'react'

export default function useIsClient() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [setIsClient]);

    return isClient;
}

export const ClientOnly = ({ children }) => {
    const isClient = useIsClient();
    return isClient ? children : null;
}