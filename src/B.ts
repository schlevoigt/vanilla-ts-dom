import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * B component (`<b>`).
 */
export class B extends ElementComponentWithChildren<HTMLElement> {
    /**
     * Create `<b>` component.
     * @param text The text content for the b element.
     */
    constructor(text?: string) {
        super("b");
        !text || this.text(text);
    }
}

/**
 * Factory for `<b>` based components.
 */
export class BFactory<T> extends ComponentFactory<B> {
    /**
     * Create, set up and return B component.
     * @param text The text content for the b element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns B component.
     */
    public b(text?: string, data?: T): B {
        return this.setupComponent(new B(text), data);
    }
}
