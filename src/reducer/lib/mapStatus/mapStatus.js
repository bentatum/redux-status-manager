import { get } from 'lodash'

export default (state, action) => {
  const status = get(action, 'payload.status')
  const type = get(action, 'payload.type')
  const statuses = get(state, 'statuses', {})
  statuses[type] = status
  return {
    ...state,
    ...statuses
  }
}
