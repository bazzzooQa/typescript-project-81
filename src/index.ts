import Form from "./modules/Form";

// Example of use:
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
console.log(new Form().formFor(template, {}, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
}));
// end //

export default new Form();
