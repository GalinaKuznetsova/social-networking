import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reduer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reduer";
import { authReducer } from "./auth-reducer";
import { ThunkDispatch, thunk } from "redux-thunk";
import { useDispatch } from "react-redux";
import {reducer as formReducer} from "redux-form"


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer
    
})


export  type AppRootState = ReturnType<typeof rootReducer>

export const store =createStore(rootReducer,applyMiddleware(thunk));
export type AppThunkDispatch = ThunkDispatch<AppRootState, any,AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// window.store= store