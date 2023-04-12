import { describe, expect, it } from 'vitest'

import func from './'

describe('[titleCase]', () => {
  it('should work properly', () => {
    const observed = func('hello world')
    const expected = 'Hello World'

    expect(observed).toEqual(expected)
  });

  it('should work properly with word transform', () => {
    const observed = func('hello world', {
      transform: ['WORLD']
    })

    const expected = 'Hello WORLD'

    expect(observed).toEqual(expected)
  });

  it('should work properly with phrase transform', () => {
    const observed = func('I am the Megamind', {
      transform: ['THE MEGAMIND']
    })

    const expected = 'I Am THE MEGAMIND'

    expect(observed).toEqual(expected)
  });

  it('should work properly with beautified quotes', () => {
    const observed = func('"I am the Megamind"', {
      transform: ['THE MEGAMIND'],
      beautify: true
    })

    const expected = '“I Am THE MEGAMIND”'

    expect(observed).toEqual(expected)
  });
})