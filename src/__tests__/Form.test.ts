import { expect, test } from 'vitest';
import Form from '../index';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('form without url', () => {
    expect(Form.formFor({}, {}, () => null)).toBe('<form action="#" method="post"></form>')
});

test('form with url', () => {
    expect(Form.formFor({}, { url: '/check' }, () => null)).toBe('<form action="/check" method="post"></form>')
})

test('form for template with input', () => {
    expect(Form.formFor(template, {}, (f) => {
        f.input('name');
        f.input('job', { as: 'textarea', rows: 50, cols: 50 });
    })).toBe('<form action="#" method="post"><textarea name="job" type="text" as="textarea" rows="50" cols="50">hexlet</textarea></form>')
});

test('form with wrong input', () => {
    expect(Form.formFor(template, {}, (f) => {
        f.input('name');
        f.input('age', { as: 'textarea', rows: 50, cols: 50 });
    })).toBe('Field age does not exist in the template.');
});