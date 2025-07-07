import { kebab } from '../utils/kebab';

describe('kebab', () => {
  it('Should return empty string if input is empty', () => {
    const output = kebab('');
    expect(output).toBe('');
  });

  describe('Should convert non-alphanumeric characters to dashes', () => {
    test('If alphanumeric groups are separated by consecutive non-alphanumeric characters', () => {
      const output = kebab('tag 1 $ 21_hello');
      expect(output).toBe('tag-1-21_hello');
    });

    test('If non-alphanumeric characters include dashes', () => {
      const output = kebab('tag 2 $ - 21_hello');
      expect(output).toBe('tag-2-21_hello');
    });
  });

  it('Should convert uppercase to lowercase', () => {
    const output = kebab('TaG 3 $ - 21_HeLLo');
    expect(output).toBe('tag-3-21_hello');
  });
});
