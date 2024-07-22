import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * I component (`<i>`).
 */
export class I extends ElementComponentWithChildren<HTMLElement> {
    /**
     * Create <i> component.
     * @param text The text content for the i element.
     */
    constructor(text?: string) {
        super("i");
        !text || this.text(text);
    }
}

/**
 * Factory for `<i>` based components.
 */
export class IFactory<T> extends ComponentFactory<I> {
    /**
     * Create, set up and return I component.
     * @param text The text content for the i element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns I component.
     */
    public i(text?: string, data?: T): I {
        return this.setupComponent(new I(text), data);
    }
}
