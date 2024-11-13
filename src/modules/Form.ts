import Tag from "./Tag";

class Form {
    private form: Tag = new Tag('form');
    private template: Record<string, string> = {};
    private error: Error | null = null;

    formFor(template: Record<string, string>, options: { url?: string }, callback: (f: Form) => void) {
       this.form = new Tag('form', {action: options.url || "#", method: "post"});
       this.template = template;

       callback(this);

       if (this.error) {
        return this.error.message;
       }

       return this.form.toString();
    };

    input(field: string, options?: Record<string, string | number>) {
        // option 'as'
        const tagName = options
            && options.as
            && typeof options.as === 'string'
                ? options.as
                : 'input';

        if (!Object.keys(this.template).includes(field)) {
            this.error = new Error(`Field ${field} does not exist in the template.`);
        } else {
            this.form.children = [
                new Tag('label', { for: field }, field.at(0)?.toUpperCase() + field.substring(1)),
                new Tag(tagName, { name: field, type: 'text', ...options }, this.template[field]),
            ];
        }
    }

    submit(value: string = 'Save') {
        this.form.children = [new Tag('input', { type: 'submit', value })];
    }
}

export default Form;
