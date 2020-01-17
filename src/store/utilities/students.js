// import axios from "axios";

// const FETCH_STUDENT = "FETCH_STUDENT";
// const GET_STUDENTS = "GET_STUDENT";
// const ADD_STUDENT = "ADD_STUDENT";
// const REMOVE_STUDENT = "REMOVE_STUDENT";
// const EDIT_STUDENT = "EDIT_STUDENT";

// const fetchStudent = (student) => {
//     return{
//         type: FETCH_STUDENT,
//         payload: student
//     }
// }

// const getStudent = (id) => {
//     return{
//         type: EDIT_STUDENT,
//         payload: id
//     }
// }

// const addStudent = (student) => {
//     return{
//         type: ADD_STUDENT,
//         payload: student
//     }
// }

// const removeStudent = (id) => {
//     return{
//         type: REMOVE_STUDENT,
//         payload: id
//     }
// }

// const editStudent = (id,arr) => {
//     return{
//         type: EDIT_STUDENT,
//         id: id,
//         payload: arr
//     }
// }

// export const fetchStudentThunk = () => async(dispatch) => {
//     try {
//         let info = await axios.get("https://campuss.herokuapp.com/api/students")
//         dispatch(fetchStudent(info.data));
//     } catch(err) {
//         console.log(err);
//     }
    
// }

// export const getStudentThunk = (id) => async(dispatch) => {
//     try {
//         let info = await axios.get("https://campuss.herokuapp.com/api/students/" + id);
//         dispatch(getStudent(info.data));
//     } catch(err) {
//         console.log(err);
//     }
    
// }

// export const addStudentThunk = (student) => (dispatch) => {
//     let resActObj = addStudent(student);
//     dispatch(resActObj);
// }

// export const removeStudentThunk = (id) => (dispatch) => {
//     let resActObj = removeStudent(id);
//     dispatch(resActObj);
// }

// export const editStudentThunk = (id, student) => async(dispatch) => {
//     try {
//         let info = await axios.put("https://campuss.herokuapp.com/api/students" + id);
//         dispatch(editStudent(id, student));
//     } catch(err) {
//         console.log(err);
//     }
    
// }

// export default (state = [], action) => {
//     switch(action.type){
//         case FETCH_STUDENT:
//             return action.payload;
//         case GET_STUDENTS:
//             return state.filter(student => student.id === parseInt(action.payload));
//         case ADD_STUDENT:
//             return [...state, action.payload];
//         case REMOVE_STUDENT:
//             return state.filter(student => student.id !== action.payload);
//         case EDIT_STUDENT:
//             return [...state.filter(student => student.id !== action.id), action.payload];
//         default:
//             return state;
//     }
// }


const axios = require('axios');
// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT"

// ACTION CREATOR;
const fetchAllStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

const editStudent = (id,arr) => {
    return{
        type: EDIT_STUDENT,
        id: id,
        payload: arr
    }
}

// THUNK CREATOR;
export const fetchAllStudentsThunk = () => async(dispatch) => {
    try{
        let {data} = await axios.get(`https://campuss.herokuapp.com/api/students/`);
        dispatch(fetchAllStudents(data));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

export const removeStudentThunk = (id) => async(dispatch) => {
    try{
        await axios.delete(`https://campuss.herokuapp.com/api/students/${id}`);
        dispatch(removeStudent(id));
    }catch(err){
        console.log(err);
    }
}

export const addStudentThunk = (arr) => async(dispatch) =>{
    try{
        let {data} = await axios.post(`https://campuss.herokuapp.com/api/students/`,arr);
        let student = await data
        dispatch(addStudent(student));
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

export const editStudentThunk = (id,arr) =>async(dispatch)=>{
    try{
        let data = await axios.put(`https://campuss.herokuapp.com/api/campuses/students/${id}`,arr);
        dispatch(editStudent(id,arr));
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            return [...state, action.payload]
        case EDIT_STUDENT:
            return [...state.filter(item => item.id !== action.id), action.payload];
        default:
            return state;
    }
}

