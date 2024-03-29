import * as actions from './actions'
import {ActionType} from "typesafe-actions";

console.log('actions: ', actions)

export type TodosAction = ActionType<typeof actions>

export type Todo = {
    id: number
    text: string
    done: boolean
}

export type TodosState = Todo[]

