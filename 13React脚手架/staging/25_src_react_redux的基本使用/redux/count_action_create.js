//该文件专门为Count组件生成action对象
import { InCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: InCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createIncrementAsyncAction = (data, time) => {
  //异步·action，就是指action的值为函数，异步action中一般都会调用同步action,异步action不是必须用的
  return (dispathch) => {
    setTimeout(() => {
      //异步action
      dispathch(createIncrementAction(data))
    }, time)
  }
}