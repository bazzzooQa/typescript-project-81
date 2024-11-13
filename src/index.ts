import Form from "./modules/Form";

// Example of use:
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
console.log(new Form().formFor(template, {}, (f) => {
    f.input('name');
    f.input('age', { as: 'textarea', rows: 50, cols: 50 });
    f.submit();
}));
// end //

export default new Form();
