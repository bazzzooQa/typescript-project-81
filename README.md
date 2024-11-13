## Hexlet tests and linter status:
[![Actions Status](https://github.com/bazzzooQa/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/bazzzooQa/typescript-project-81/actions)

[![Test Coverage](https://api.codeclimate.com/v1/badges/95c179f668cb78b3a9b3/test_coverage)](https://codeclimate.com/github/bazzzooQa/typescript-project-81/test_coverage)

### Example of how to use:
```javascript
import Form from '@hexlet/code';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

Form.formFor(template, {}, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
});
```
