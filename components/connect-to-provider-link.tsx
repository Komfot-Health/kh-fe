import { ReactNode } from "react"

export const ConnectToProviderLink = ({ children }: { children: ReactNode }) => {
  return  <a
  href="https://api.whatsapp.com/send?phone=2348109938925&text=Hi Lade"
  target="_blank"
  rel="noopener noreferrer"
 >
  {children}
 </a>
}