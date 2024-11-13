type attributesT = {
    [key: string | number | symbol]: unknown;
    value?: string;
}

class Tag {
    protected readonly singleTags = ['img', 'input', 'br'];
    protected readonly blockTags = ['label', 'div', 'form', 'textarea'];

    protected tagName!: string;
    protected attributes?: attributesT;
    protected value?: unknown;

    constructor(tagName: string, attributes?: attributesT, value?: unknown) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.value = value;
    }

    set children(value: Tag[]) {
        this.value = (this.value || '') + value.join('');
    };

    toString(): string {
        const getAttributesStr = (filterFn: (pair: [string, unknown]) => boolean): string => {
            return this.attributes && Object.keys(this.attributes).length > 0
                ? ' ' + Object.entries(this.attributes)
                    .filter(filterFn)
                    .map(([ key, value ]) => `${key}="${value}"`)
                    .join(' ')
                : '';
        };

        if (this.singleTags.includes(this.tagName)) {
            const attributesFilter = (pair: [string, unknown]) => Boolean(pair[1]);

            return `<${this.tagName}${getAttributesStr(attributesFilter)}>`;
        }

        if (this.blockTags.includes(this.tagName)) {
            const attributesFilter = (pair: [string, unknown]) => (pair[0] !== 'value' && Boolean(pair[1]));

            return `<${this.tagName}${getAttributesStr(attributesFilter)}>${this.attributes?.value || this.value || ''}</${this.tagName}>`;
        }

        return `Unsupported tag - ${this.tagName}`;
    }
}

export default Tag;