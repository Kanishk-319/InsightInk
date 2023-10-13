'use client'
import OverlayContext from "./OverlayContext"
import {useState,useContext} from 'react'
const OverlayState = ({children}:{children:React.ReactNode}) => {
  const [isOverlay,setIsOverlay] = useState<boolean>(false)
  return (
    <OverlayContext.Provider value={{isOverlay, setIsOverlay}}>
        {children}
    </OverlayContext.Provider>
  )
}

export const useOverlayContext = () => useContext(OverlayContext)
export default OverlayState