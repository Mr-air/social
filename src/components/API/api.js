//import React from 'react';
import Axios from 'axios';

const apicreate = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ca530a00-1c9a-4421-adee-68657ee25bc6'}
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
    }

}

