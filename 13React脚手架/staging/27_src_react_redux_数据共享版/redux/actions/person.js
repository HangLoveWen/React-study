import { ADD_PERSON } from '../constant'
//创建增加一个人的的操作
export const createAddPersonAction = (personobj) => ({ type: ADD_PERSON, data: personobj })