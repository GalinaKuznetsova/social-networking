export type FriendsType = {
    id: number,
    name: string,
    img: string
}

export type SideBarType = {
  friends?: FriendsType[];
};
let inisialState:SideBarType = {};
export const sidebarReducer = (state:SideBarType = inisialState, action:ActionsSidebarTypes):SideBarType => {
return state
}

export type SidebarActionType = ReturnType<typeof SidebarActionType>
export type ActionsSidebarTypes = SidebarActionType


export const SidebarActionType=( )=>{
    return {
        type :'',
       
    }as const
  }