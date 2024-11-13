import Tag from '../modules/Tag';
import { expect, test } from 'vitest';

test('create tag div with value', () => {
    const testTag = new Tag('div', {}, 'test case 1');

    expect(testTag.toString()).toBe('<div>test case 1</div>');
});

test('create tag div with value and attribs', () => {
    const testTag = new Tag('div', { for: 'me' }, 'test case 2');

    expect(testTag.toString()).toBe('<div for="me">test case 2</div>');
});

test('create unsupported tag', () => {
    const testTag = new Tag('dive', { for: 'me' }, 'test case 3');

    expect(testTag.toString()).toBe('Unsupported tag - dive');
});

test('create single tag', () => {
    const testTag = new Tag('img');

    expect(testTag.toString()).toBe('<img>');
});