const axios = require('axios');
const FETCH_CAMPUS = "FETCH_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const GET_CAMPUSES = "GET_CAMPUSES";
const EDIT_CAMPUS = "EDIT_CAMPUS";

let dumCamp=[{
    id:1,
    name: "Harvard",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    description: "blah blah blah",
    address: "123 4th Ave",
},
{
    id:2,
    name:"hunter",
    imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    description: "blah blah blah",
    address: "123 4th Ave",
},
{
    id:3,
    name:"Baruch",
    imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    description: "blah blah blah",
    address: "123 4th Ave",
}];

const fetchCampus = (campus) => {
    return {
        type: FETCH_CAMPUS,
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
        type: GET_CAMPUSES,
        payload: id
    }
}

const editCampus = (campus) => {
    return {
        type: EDIT_CAMPUS,
        payload: id
    }
}

export const fetchCampusThunk = () => async(dispatch) => {
    try{
        let info = await axios.get("https://campuss.herokuapp.com/api/campuses/")
        dispatch(fetchCampus(info.data));
        console.log(info);
    } catch(err){
        console.log(err);
    }
}

export const addCampusThunk = (campus) => async(dispatch) => {
    try{
        let {info} = await 
    }
}

export const removeCampusThunk = (id) => (dispatch) => {
    let resActObj = removeCampus(id);
    dispatch(resActObj);
}

export const getCampusThunk = (id) => (dispatch) => {
    let resActObj = getCampus(id);
    dispatch(resActObj);
}

export const editCampusThunk = (campus) => (dispatch) => {
    let resActObj = editCampus(campus);
    dispatch(resActObj);
}

export default (state = dumCamp, action) => {
    switch (action.type){
        case FETCH_CAMPUS:
            return action.payload;
        case ADD_CAMPUS:
            return [...state, action.payload];
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case GET_CAMPUSES:
            return state.filter(campus => campus.id === parseInt(action.payload));
        case EDIT_CAMPUS:
            return [...state.filter(campus => campus.id !== action.payload.id), action.payload];
        default:
            return state;
    }
}