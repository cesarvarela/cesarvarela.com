import { useEffect, useState } from "react";

export default function useDownloadOS(defaultOs = null) {

    const [os, setOs] = useState(defaultOs);

    useEffect(() => {

        const userAgent = navigator.appVersion;

        if (userAgent.includes('Macintosh')) {
            setOs('mac')
        }

        else if (userAgent.includes('Windows')) {
            setOs('windows')
        }
        else if (userAgent.includes('Ubuntu')) {
            setOs('ubuntu')
        }

    }, [setOs]);


    return os;
}