"use strict";

var _faker = _interopRequireDefault(require("faker"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('redux/modules/async/reducer/lib/mapStatus', () => {
  let results;
  const foo = 'bar';

  const type = _faker.default.lorem.slug();

  const statuses = {
    [type]: 'pending'
  };
  const state = {
    foo,
    statuses
  };
  const payload = {
    type,
    status: 'success'
  };
  const action = {
    payload
  };
  beforeEach(() => {
    results = (0, _.mapStatus)(state, action);
  });
  test('defaults', () => {
    expect(results).toHaveProperty(type);
    expect(results).toHaveProperty('foo', foo);
  });
  test('statuses', () => {
    expect(results.statuses).toHaveProperty(type, 'success');
  });
});