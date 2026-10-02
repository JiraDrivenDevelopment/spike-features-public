import { describe, expect, it } from 'vitest';
import { capitalize } from '../src/capitalize.js';

describe('capitalize', () => {
  it('upper-cases the first character', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('leaves the rest of the string alone', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });

  it('returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });
});
