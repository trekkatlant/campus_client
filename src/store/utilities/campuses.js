// //const axios = require('axios');
// import axios from "axios";
// const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
// const ADD_CAMPUS = "ADD_CAMPUS";
// const REMOVE_CAMPUS = "REMOVE_CAMPUS";
// const GET_CAMPUS = "GET_CAMPUS";
// const EDIT_CAMPUS = "EDIT_CAMPUS";

// const fetchAllCampuses = (campus) => {
//     return {
//         type: FETCH_ALL_CAMPUSES,
//         payload: campus
//     }
// }

// const addCampus = (campus) => {
//     return{
//         type: ADD_CAMPUS,
//         payload: campus
//     }
// }

// const removeCampus = (id) => {
//     return{
//         type: REMOVE_CAMPUS,
//         payload: id
//     }
// }

// const getCampus = (id) => {
//     return {
//         type: GET_CAMPUS,
//         payload: id
//     }
// }

// const editCampus = (id, campus) => {
//     return {
//         type: EDIT_CAMPUS,
//         id: id,
//         payload: campus
//     }
// }

// export const fetchAllCampusesThunk = () => async(dispatch) => {
//     try{
//         let info = await axios.get("https://campuss.herokuapp.com/api/campuses")
//         dispatch(fetchAllCampuses(info.data));
//         console.log(info);
//     } catch(err){
//         console.log(err);
//     }
// }

// export const addCampusThunk = (campus) => async(dispatch) => {
//     try{
//         let {info} = await axios.post("https://campuss.herokuapp.com/api/campuses", campus);
//         let campus = await info;
//         dispatch(addCampus(campus));
//         console.log(info);
//     } catch(err){
//         console.log(err);
//     }
// }

// export const removeCampusThunk = (id) => async(dispatch) => {
//     try{
//         await axios.delete("https://campuss.herokuapp.com/api/campuses/" + id);
//         dispatch(removeCampus(id));
//     }catch(err){
//         console.log(err);
//     }
// }

// export const getCampusThunk = (id) => async(dispatch) => {
//     try{
//         let info = await axios.get("https://campuss.herokuapp.com/api/campuses/" + id)
//         dispatch(getCampus(info.data));
//         console.log(info);
//     } catch(err){
//         console.log(err);
//     }
// }

// export const editCampusThunk = (id, campus) => async(dispatch) => {
//     try{
//         let info = await axios.put("https://campuss.herokuapp.com/api/campuses/" + id, campus);
//         dispatch(editCampus(id, campus));
//         console.log(info);
//     }catch(err){
//         console.log(err);
//     }
// }

// export default (state = [], action) => {
//     switch (action.type){
//         case FETCH_ALL_CAMPUSES:
//             return action.payload;
//         case ADD_CAMPUS:
//             return [...state, action.payload];
//         case REMOVE_CAMPUS:
//             return state.filter(campus => campus.id !== action.payload);
//         case GET_CAMPUS:
//             return state.filter(campus => campus.id === parseInt(action.payload));
//         case EDIT_CAMPUS:
//             return [...state.filter(campus => campus.id !== action.payload.id), action.payload];
//         default:
//             return state;
//     }
// }


const axios = require('axios');
const FETCH_CAMPUS = "FETCH_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";

const fetchAllCampus = (campus) => {
    return{
        type: FETCH_CAMPUS,
        payload: campus
    }
}

const removeCampus = (id) =>{
    console.log(id)
    return{
        type: DELETE_CAMPUS,
        payload: id
    }
}

const addCampus = (arr) =>{
    return {
        type: ADD_CAMPUS,
        payload: arr
    }
}

const editCampus = (arr) => {
    return{
        type: EDIT_CAMPUS,
        payload: arr
    }
}

export const deleteCampusThunk = (id) => async(dispatch) =>{
    try{
        await axios.delete(`https://campuss.herokuapp.com/api/campuses/${id}`);
        dispatch(removeCampus(id));
    }catch(err){
        console.log(err);
    }
}

export const addCampusThunk = (arr) => async(dispatch) =>{
    try{
        let {data} = await axios.post(`https://campuss.herokuapp.com/api/campuses/`,arr);
        let campus = await data
        dispatch(addCampus(campus));
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
 //   dispatch(addCampus(arr));
}

export const fetchAllCampusThunk = () => async(dispatch) =>{
    try{
        let data = await axios.get(`https://campuss.herokuapp.com/api/campuses/`);
        dispatch(fetchAllCampus(data));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

export const editCampusThunk = (id,arr) =>async(dispatch)=>{
    try{
        let data = await axios.put(`https://campuss.herokuapp.com/api/campuses/${id}`,arr);
        dispatch(editCampus(arr));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

export default (state = [], action) =>{  
    switch(action.type){
        case FETCH_CAMPUS:
            return action.payload;
        case DELETE_CAMPUS:
            return state.filter(item => item.id !== action.payload);
        case ADD_CAMPUS:
            return [...state, action.payload];
        case EDIT_CAMPUS:
            return [...state.filter(item => item.id !== action.payload.id), action.payload];
        default:
            return state;
    }
}