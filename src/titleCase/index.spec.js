import { describe, expect, it } from 'vitest'

import func from './'

describe('[titleCase]', () => {
  it('should work properly', () => {
    const observed = func('hello world')
    const expected = 'Hello World'

    expect(observed).toEqual(expected)
  });

  it('should work properly with ', () => {
    const observed = func('hello world', {
      transform: ['WORLD']
    })

    const expected = 'Hello WORLD'

    expect(observed).toEqual(expected)
  });

  it('should work properly with ', () => {
    const observed = func('I am the Megamind', {
      transform: ['THE MEGAMIND']
    })

    const expected = 'I Am THE MEGAMIND'

    expect(observed).toEqual(expected)
  });
})