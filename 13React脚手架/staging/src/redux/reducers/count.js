import { InCREMENT, DECREMENT } from '../constant'
const initstate = 0
export default function countreducer(pre = initstate, action) {
  const { type, data } = action
  switch (type) {
    case InCREMENT:
      return pre + data
    case DECREMENT:
      return pre - data
    default:
      return pre
  }
}