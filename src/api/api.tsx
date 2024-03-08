import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials:true,
        headers:{"API-KEY":" 8bfee948-2c8c-4481-a926-55183ac58b32"}

    }
);

export const authAPI = {
    me (){
        return instance.get(`auth/me`)
    }
}


 export const usersAPI = {
    getUsers (currentPage:number | undefined,pageSize:number | undefined){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data
    })
},
    follow (id:number) {
        return instance.post(`follow/${id}` )
    },

      unfollow (id:number) {
        return instance.delete(`follow/${id}` )
    },
    getProfile (userId:number){
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
   
}

export const profileAPI = {
    getProfile (userId:number){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId)
    },
    updateSatus(status:string) {
        return instance.put(`profile/status`, {status:status} )
    }
}

   
   








 