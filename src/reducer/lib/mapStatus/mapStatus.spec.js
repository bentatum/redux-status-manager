import faker from 'faker'
import { mapStatus } from '..'

describe('redux/modules/async/reducer/lib/mapStatus', () => {
  let results

  const foo = 'bar'
  const type = faker.lorem.slug()
  const statuses = { [type]: 'pending' }
  const state = { foo, statuses }

  const payload = { type, status: 'success' }
  const action = { payload }

  beforeEach(() => {
    results = mapStatus(state, action)
  })

  test('defaults', () => {
    expect(results).toHaveProperty(type)
    expect(results).toHaveProperty('foo', foo)
  })

  test('statuses', () => {
    expect(results.statuses).toHaveProperty(type, 'success')
  })
})
