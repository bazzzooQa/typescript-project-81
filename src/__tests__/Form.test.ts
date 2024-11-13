import { expect, test } from 'vitest';
import Form from '../index';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('form without url', () => {
    expect(Form.formFor({}, {}, () => null)).toBe('<form method="post" action="#"></form>')
});

test('form with url', () => {
    expect(Form.formFor({}, { url: '/check' }, () => null)).toBe('<form method="post" action="/check"></form>')
})

test('form for template with input', () => {
    expect(Form.formFor(template, {}, (f) => {
        f.input('name');
        f.input('job', { as: 'textarea', rows: 50, cols: 50 });
    })).toBe('<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>')
});

test('form with wrong input', () => {
    expect(Form.formFor(template, {}, (f) => {
        f.input('name');
        f.input('age', { as: 'textarea', rows: 50, cols: 50 });
    })).toThrow();
});