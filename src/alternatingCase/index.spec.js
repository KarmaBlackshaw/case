import { describe, expect, it } from 'vitest'

import func from './'

describe('[alternatingCase]', () => {
  it('should work properly', () => {
    const observed = func('Hello World')
    const expected = 'HeLlO WoRlD'

    expect(observed).toEqual(expected)
  });
})