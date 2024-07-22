import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * Paragraph component (`<p>`).
 */
export class P extends ElementComponentWithChildren<HTMLParagraphElement> {
    /**
     * Create `<p>` component.
     * @param text The text content for the p element.
     */
    constructor(text?: string) {
        super("p");
        !text || this.text(text);
    }
}

/**
 * Factory for `<p>` based components.
 */
export class PFactory<T> extends ComponentFactory<P> {
    /**
     * Create, set up and return P component.
     * @param text The text content for the p element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns P component.
     */
    public p(text?: string, data?: T): P {
        return this.setupComponent(new P(text), data);
    }
}
