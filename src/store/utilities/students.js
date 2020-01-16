const FETCH_STUDENT = "FETCH_STUDENT";
const GET_STUDENTS = "GET_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";

let dumStu = [{
    id:1,
    name: "Jack",
    campus: "Hunter",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    email: "jack@email.com",
    gpa: 3.2,
},
{
    id:2,
    name: "John",
    campus: "Baruch",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    email: "john@email.com",
    gpa: 4.0,
},
{
    id:3,
    name: "Adam",
    campus: "Hunter",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1",
    email: "adam@email.com",
    gpa: 1.5,
}];

const fetchStudent = (student) => {
    return{
        type: FETCH_STUDENT,
        payload: student
    }
}

const getStudent = (id) => {
    return{
        type: EDIT_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {
    return{
        type: ADD_STUDENT,
        payload: student
    }
}

const removeStudent = (id) => {
    return{
        type: REMOVE_STUDENT,
        payload: id
    }
}

const editStudent = (id,arr) => {
    return{
        type: EDIT_STUDENT,
        id: id,
        payload: arr
    }
}

export const fetchStudentThunk = () => (dispatch) => {
    dispatch(fetchStudent(dumStu));
}

export const getStudentThunk = (id) => (dispatch) => {
    let resActObj = getStudent(id);
    dispatch(resActObj);
}

export const addStudentThunk = (student) => (dispatch) => {
    let resActObj = addStudent(student);
    dispatch(resActObj);
}

export const removeStudentThunk = (id) => (dispatch) => {
    let resActObj = removeStudent(id);
    dispatch(resActObj);
}

export const editStudentThunk = (student) => (dispatch) => {
    let resActObj = editStudent(student);
    dispatch(resActObj);
}

export default (state = dumStu, action) => {
    switch(action.type){
        case FETCH_STUDENT:
            return action.payload;
        case GET_STUDENTS:
            return state.filter(student => student.id === parseInt(action.payload));
        case ADD_STUDENT:
            return [...state, action.payload];
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case EDIT_STUDENT:
            return [...state.filter(student => student.id !== action.id), action.payload];
        default:
            return state;
    }
}


