//该文件专门为Count组件生成action对象
import { InCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: InCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })