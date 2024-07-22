import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * Span component (`<span>`).
 */
export class Span extends ElementComponentWithChildren<HTMLSpanElement> {
    /**
     * Create `<span>` component.
     * @param text The text content for the span element.
     */
    constructor(text?: string) {
        super("span");
        !text || this.text(text);
    }
}

/**
 * Factory for `<span>` based components.
 */
export class SpanFactory<T> extends ComponentFactory<Span> {
    /**
     * Create, set up and return Span component.
     * @param text The text content for the span element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns Span component.
     */
    public span(text?: string, data?: T): Span {
        return this.setupComponent(new Span(text), data);
    }
}
