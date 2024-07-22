import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * Em component (`<em>`).
 */
export class Em extends ElementComponentWithChildren<HTMLElement> {
    /**
     * Create `<em>` component.
     * @param text The text content for the em element.
     */
    constructor(text?: string) {
        super("em");
        !text || this.text(text);
    }
}

/**
 * Factory for `<em>` based components.
 */
export class EmFactory<T> extends ComponentFactory<Em> {
    /**
     * Create, set up and return Em component.
     * @param text The text content for the em element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns Em component.
     */
    public em(text?: string, data?: T): Em {
        return this.setupComponent(new Em(text), data);
    }
}
