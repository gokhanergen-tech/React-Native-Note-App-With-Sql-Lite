import noteController from "../../../database/controller/note-controller";
import { increaseCount,conditionalLink, updateData,increaseLink,decreaseCount,decreaseLink } from "../../actions/todo-list-actions/todo-list-actions";

const initialState={
    count:0,
    list:[],
    link:1
};

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
    case updateData():
        return {
            ...state,
            ...action.payload
        };
    case increaseCount():   
        return{
            ...state,
            count:state.count+1
        };
    case decreaseCount():
        return{
            ...state,
            count:state.count-1
        };
    case increaseLink():
        return{
            ...state,
            link:link+1
        };
    case decreaseLink():
        return{
            ...state,
            link:link-1
        };
    case conditionalLink():
        return {
            ...state,
            link:(state.link===1&& state.link!==state.list.length)?state.link+1:state.link-1
        };
        
    default:
        return state;
    }
};

export default todoReducer;