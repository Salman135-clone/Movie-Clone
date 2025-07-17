import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const posterImage="https://image.tmdb.org/t/p/w200"
const API_KEY =import.meta.env.VITE_TMDB_API_KEY;


export const apiConfig=axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY,
        language:"en-us",
    }
});

export const createSessionId=async()=>{
    try{
        const response=await apiConfig.get(`/authentication/guest_session/new`);
        const {guest_session_id}=response.data;
        localStorage.setItem('Guest_id',guest_session_id)
        return guest_session_id;
    }catch(error){
        throw error;
    }
}

export const getSessionId=async()=>{
    let getValue=localStorage.getItem("Guest_id");
    if(!getValue){
        getValue=await createSessionId();
    }
    return getValue;
    
}

export const fetchMovie=async (endpoint)=>{
    try {
        const respone=await apiConfig.get(endpoint);
        // console.log(respone.data.results);
        return respone.data.results
    }catch(error){
        console.log(`Error ${error}`)
        throw error;
    }
};


export const posterImageURL=posterImage;