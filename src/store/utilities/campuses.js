const axios = require('axios');
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const GET_CAMPUS = "GET_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";

const fetchAllCampuses = (campus) => {
    return {
        type: FETCH_ALL_CAMPUSES,
        payload: campus
    }
}

const addCampus = (campus) => {
    return{
        type: ADD_CAMPUS,
        payload: campus
    }
}

const removeCampus = (id) => {
    return{
        type: REMOVE_CAMPUS,
        payload: id
    }
}

const getCampus = (id) => {
    return {
        type: GET_CAMPUS,
        payload: id
    }
}

const editCampus = (campus) => {
    return {
        type: EDIT_CAMPUS,
        payload: campus
    }
}

export const fetchAllCampusesThunk = () => async(dispatch) => {
    try{
        let info = await axios.get("https://campuss.herokuapp.com/api/campuses")
        dispatch(fetchAllCampuses(info.data));
        console.log(info);
    } catch(err){
        console.log(err);
    }
}

export const addCampusThunk = (campus) => async(dispatch) => {
    try{
        let {info} = await axios.post("https://campuss.herokuapp.com/api/campuses", campus);
        let campus = await info;
        dispatch(addCampus(campus));
        console.log(info);
    } catch(err){
        console.log(err);
    }
}

export const removeCampusThunk = (id) => async(dispatch) => {
    try{
        await axios.delete("https://campuss.herokuapp.com/api/campuses/" + id);
        dispatch(removeCampus(id));
    }catch(err){
        console.log(err);
    }
}

export const getCampusThunk = (id) => async(dispatch) => {
    try{
        let info = await axios.get("https://campuss.herokuapp.com/api/campuses/" + id)
        dispatch(getCampus(info.data));
        console.log(info);
    } catch(err){
        console.log(err);
    }
}

export const editCampusThunk = (id, campus) => async(dispatch) => {
    try{
        let info = await axios.put("https://campuss.herokuapp.com/api/campuses/" + id, campus);
        dispatch(editCampus(campus));
        console.log(info);
    }catch(err){
        console.log(err);
    }
}

export default (state = [], action) => {
    switch (action.type){
        case FETCH_ALL_CAMPUSES:
            return action.payload;
        case ADD_CAMPUS:
            return [...state, action.payload];
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case GET_CAMPUS:
            return state.filter(campus => campus.id === parseInt(action.payload));
        case EDIT_CAMPUS:
            return [...state.filter(campus => campus.id !== action.payload.id), action.payload];
        default:
            return state;
    }
}