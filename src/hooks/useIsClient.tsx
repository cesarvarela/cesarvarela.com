import { useEffect, useState, ReactNode } from 'react'

export default function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

interface ClientOnlyProps {
  children: ReactNode;
}

export const ClientOnly = ({ children }: ClientOnlyProps) => {
  const isClient = useIsClient();
  return isClient ? children : null;
} 