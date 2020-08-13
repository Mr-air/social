//import React from 'react';
import Axios from 'axios';

const apicreate = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7051e43-1170-4f40-b35d-d12bedceecda'}
}) 


export const SocialApi = {
    getUsers(Pageactive,Pagesize) {
        return apicreate.get(`users?page=${Pageactive}&count=${Pagesize}`).then(Response=> {
            return Response.data
        })
    },
    Usersfollow(usersid) {
        return apicreate.post(`follow/${usersid}`).then(Response=> {
            console.log(Response)
            return Response.data
        })
    },
    UsersUNfollow(usersid) {
        return apicreate.delete(`follow/${usersid}`).then(Response=> {
            console.log(Response)
            return Response.data
        })
    },
    getMeProfile() {
        return apicreate.get(`auth/me`).then(Response=> {
            return Response.data
        })
    },
    MeProfile(userid) {
        return apicreate.get(`profile/${userid}`)
    },
    getStatus(userid) {
        return apicreate.get(`/profile/status/${userid}`)
    },
    MeStatus(status) {
        return apicreate.put(`/profile/status`,{status})
    },
    Login (email,password,rememberMe=false) {
        return apicreate.post(`/auth/login`,{email,password,rememberMe})
    },
    OutLogin () {
        return apicreate.delete(`/auth/login`)
    }

    
    

}

