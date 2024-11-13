import Tag from "src/modules/Tag";
import { expect, test } from 'vitest';

test('create tag div with value', () => {
    const testTag = new Tag('div', {}, 'test case 1');

    expect (testTag.toString()).toBe('<div>test case 1</div>');
});