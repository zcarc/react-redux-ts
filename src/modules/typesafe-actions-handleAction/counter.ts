import {createAction, ActionType, createReducer} from 'typesafe-actions'

// 액션 생성 함수 선언
export const increase = createAction("counter/INCREASE")();
// () => ({ type: INCREASE })

export const decrease = createAction("counter/DECREASE")();
// () => ({ type: DECREASE })

// 액션의 페이로드로 들어가는 값은 Generic을 사용하여 정해줄 수 있으며,
// 만약 액션의 페이로드에 아무것도 필요 없다면 Generic을 생략하면 됨
export const increaseBy = createAction("counter/INCREASE_BY")<number>();
// (payload: number) => ({ type: INCREASE_BY, payload })

// 액션 객체들에 대한 type 준비 (type = TypeScript의 타입)
// typesafe-actions에 들어있는 ActionType 유틸 타입을 사용하면
// 액션들의 객체 타입을 만드는 작업을 더욱 짧은 코드로 작성 할 수 있음
const actions = {increase, decrease, increaseBy}
type CounterAction = ActionType<typeof actions>

// 상태의 타입과 상태의 초깃값 선언
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 리듀서 작성
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({count: state.count + 1}))
    .handleAction(decrease, state => ({count: state.count - 1}))
    .handleAction(increaseBy, (state, action) => ({count: state.count + action.payload}))

export default counter;
