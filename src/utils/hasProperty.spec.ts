import hasProperty from './hasProperty'

describe('hasProperty', () => {
  it.each([
    [false, void 0, 'x'],
    [false, null, 'x'],
    [false, {}, 'x'],
    [false, { y: 123 }, 'x'],
    [true, { x: null }, 'x'],
    [true, { x: [] }, 'x'],
    [true, { x: '' }, 'x'],
  ])('should return: %s for object: %s and property key: %s', (expected, obj, propertyKey) => {
    // Then
    expect(hasProperty(obj, propertyKey)).toBe(expected)
  })
})
