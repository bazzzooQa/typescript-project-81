import Form from "./modules/Form";

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

console.log(new Form().formFor(template, {}, () => {}));

export default new Form();
