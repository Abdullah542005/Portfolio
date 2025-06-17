import { configureStore } from "@reduxjs/toolkit"
import { PVMenu } from "./PVMenu"

export const Store  = configureStore({
    reducer:{PVMenu:PVMenu.reducer}
})