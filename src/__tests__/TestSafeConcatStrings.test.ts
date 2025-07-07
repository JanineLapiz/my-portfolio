import { safeConcatStrings } from '../utils/safeConcatStrings';

describe('safeConcatStrings', () => {
  it('Should return empty string if all strings are falsy', () => {
    const output = safeConcatStrings(['', null, undefined]);
    expect(output).toBe('');
  });

  it('Should return only concatenated truthy strings', () => {
    const output = safeConcatStrings(['', null, 'tag-1', 'tag-2', undefined, 'tag-3']);
    expect(output).toBe('tag-1 tag-2 tag-3');
  });

  it('Should use the delimiter input', () => {
    const output = safeConcatStrings(['', null, 'tag-1', 'tag-2', undefined, 'tag-3'], '_');
    expect(output).toBe('tag-1_tag-2_tag-3');
  });
});
