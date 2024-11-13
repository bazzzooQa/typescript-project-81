import { expect, test } from 'vitest';
import Form from '../modules/Form';

test('form without url', () => {
    const testForm = new Form();

    expect(testForm.formFor({}, {}, () => null)).toBe('<form action="#" method="post"></form>')
});

test('form with url', () => {
    const testForm = new Form();

    expect(testForm.formFor({}, { url: '/check' }, () => null)).toBe('<form action="/check" method="post"></form>')
})