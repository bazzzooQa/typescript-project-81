type attributesT = {
    [key: string | number | symbol]: unknown;
}

class Tag {
    protected readonly singleTags = ['img', 'input', 'br'];
    protected readonly blockTags = ['label', 'div', 'form'];

    protected tagName!: string;
    protected attributes?: object;
    protected value?: unknown;

    constructor(tagName: string, attributes?: attributesT, value?: unknown) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.value = value;
    }

    toString(): string {
        const attributes: string = this.attributes && Object.keys(this.attributes).length > 0
            ? ' ' + Object.entries(this.attributes)
                .map(([ key, value ]) => `${key}="${value}"`)
                .join(' ')
            : '';

        if (this.singleTags.includes(this.tagName)) {
            return `<${this.tagName}${attributes}/>`;
        }

        if (this.blockTags.includes(this.tagName)) {
            return `<${this.tagName}${attributes}>${this.value || ''}</${this.tagName}>`;
        }

        return `Unsupported tag - ${this.tagName}`;
    }
}

export default Tag;