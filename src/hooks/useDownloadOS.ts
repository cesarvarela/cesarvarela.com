import { useEffect, useState } from "react";

type OS = 'mac' | 'windows' | 'ubuntu' | null;

export default function useDownloadOS(defaultOs: OS = null): OS {
    const [os, setOs] = useState<OS>(defaultOs);

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
    }, []);

    return os;
}