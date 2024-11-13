import Tag from "./Tag";

class Form {
    formFor(template: Record<string, string>, options: { url?: string }, callback: (f: unknown) => unknown) {
        console.log({ template, callback });

        return new Tag('form', {action: options.url || "#", method: "post"}).toString();
    };
}

export default Form;
