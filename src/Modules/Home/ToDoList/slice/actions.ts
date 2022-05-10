import {Todo, TodoStatus} from "../../../../models/todo";

export const INIT_TODO = 'INIT_TODO';
export const INIT_TODO_DONE = 'INIT_TODO_DONE';
export const SET_TODO = 'SET_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';
export const UPDATE_STATUS_SHOWING = 'UPDATE_STATUS_SHOWING';
export const UPDATE_IS_IMPORTANT= 'UPDATE_IS_IMPORTANT';
export const UPDATE_TODO = "UPDATE_TODO"

export interface SetTodoAction {
  type: typeof SET_TODO,
  payload: Array<Todo>
}

export function setTodos(todos: Array<Todo>): SetTodoAction {
  return {
    type: SET_TODO,
    payload: todos
  }
}

///////////
export interface CreateTodoAction {
  type: typeof CREATE_TODO,
  payload: Todo
}

export function createTodo(newTodo: Todo): CreateTodoAction {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}

//////////////
export interface UpdateTodoStatusAction {
  type: typeof UPDATE_TODO_STATUS,
  payload: {
    todoId: string,
    checked: boolean
  }
}

export function updateTodoStatus(todoId: string, checked: boolean): UpdateTodoStatusAction {
  return {
    type: UPDATE_TODO_STATUS,
    payload: {
      todoId,
      checked
    }
  }
}

//////////////
export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: string
}

export function deleteTodo(todoId: string): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

//////////////
export interface DeleteAllTodosAction {
  type: typeof DELETE_ALL_TODOS,
}

export function deleteAllTodos(): DeleteAllTodosAction {
  return {
    type: DELETE_ALL_TODOS,
  }
}

///////////
export interface ToggleAllTodosAction {
  type: typeof TOGGLE_ALL_TODOS,
  payload: boolean
}

export function toggleAllTodos(checked: boolean): ToggleAllTodosAction {
  return {
    type: TOGGLE_ALL_TODOS,
    payload: checked
  }
}

//////////////
export interface InitTodoListAction{
  type: typeof INIT_TODO,
}

export function intiTodoList(): InitTodoListAction {
  return {
    type: INIT_TODO,
  }
}

//////////////
export interface InitTodoListDoneAction{
  type: typeof INIT_TODO_DONE,
  payload: Array<Todo>
}

export function intiTodoListDone(todo: Todo[]): InitTodoListDoneAction{
  return {
    type: INIT_TODO_DONE,
    payload: todo
  }
}
//////////////
export interface UpdateStatusShowingAction{
  type: typeof UPDATE_STATUS_SHOWING,
  payload: TodoStatus
}

export function updateStatusShowing(status: TodoStatus): UpdateStatusShowingAction{
  return {
    type: UPDATE_STATUS_SHOWING,
    payload: status
  }
}
//////////////
export interface UpdateImportantItemTodoAction{
  type: typeof UPDATE_IS_IMPORTANT,
  payload: {
    todoId: string,
    isImportant: boolean
  }
}

export function updateImportantItemTodo(todoId:string, isImportant: boolean): UpdateImportantItemTodoAction{
  return {
    type: UPDATE_IS_IMPORTANT,
    payload: {
      todoId,
      isImportant
    }
  }
}

//////////////
export interface UpdateTodoAction{
  type: typeof UPDATE_TODO,
  payload: {
    todoId: string,
    content: string,
  }
}

export function updateTodo(todoId:string, content: string): UpdateTodoAction{
  return {
    type: UPDATE_TODO,
    payload: {
      todoId,
      content
    }
  }
}

export type AppActions =
  SetTodoAction |
  CreateTodoAction |
  UpdateTodoStatusAction |
  DeleteTodoAction |
  DeleteAllTodosAction |
  ToggleAllTodosAction |
    InitTodoListAction|
    InitTodoListDoneAction |
    UpdateStatusShowingAction |
    UpdateImportantItemTodoAction |
    UpdateTodoAction
    ;