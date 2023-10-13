'use client'
import { createContext } from "react";
import { IContext } from "./Interfaces";

const OverlayContext=createContext<IContext>({
    isOverlay: false,
    setIsOverlay:()=>undefined
});

export default OverlayContext;