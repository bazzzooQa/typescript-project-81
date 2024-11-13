import Tag from "./Tag";

class Form {
    private form: Tag = new Tag('form');
    private template: Record<string, string> = {};
    public error: Error | null = null;

    formFor(template: Record<string, string>, options: { url?: string }, callback: (f: Form) => void) {
       this.form = new Tag('form', {method: "post", action: options.url || "#", });
       this.template = template;

       callback(this);

       if (this.error) return this.error.message;

       return this.form.toString();
    };

    input(field: string, options: Record<string, string | number> = {}) {
        const { as, ...rest } = options;
        const tagName = as && typeof as === 'string' ? as : 'input';

        if (!Object.keys(this.template).includes(field)) {
            this.error = new Error(`Field ${field} does not exist in the template.`);
        } else {
            const getOptions = () => {
                const value = this.template[field];

                if (as === 'textarea') {
                    return {
                        cols: "20",
                        rows: "40",
                        name: field,
                        value,
                        ...rest,
                    }
                }

                return {
                    name: field,
                    type: 'text',
                    value,
                    ...rest,
                };
            };

            this.form.children = [
                new Tag('label', { for: field }, field.at(0)?.toUpperCase() + field.substring(1)),
                new Tag(tagName, getOptions()),
            ];
        }
    }

    submit(value: string = 'Save') {
        this.form.children = [new Tag('input', { type: 'submit', value })];
    }
}

export default Form;
