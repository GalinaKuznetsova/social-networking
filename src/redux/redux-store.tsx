import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reduer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reduer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPage:usersReducer,
    
})


export  type AppRootState = ReturnType<typeof rootReducer>

export const store =createStore(rootReducer);