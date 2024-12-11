import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * Strong component (`<strong>`).
 */
export class Strong extends ElementComponentWithChildren<HTMLElement> {
    /**
     * Create `<strong>` component.
     * @param text The text content for the strong element.
     */
    constructor(text?: string) {
        super("strong");
        !text || this.text(text);
    }
}

/**
 * Factory for `<strong>` based components.
 */
export class StrongFactory<T> extends ComponentFactory<Strong> {
    /**
     * Create, set up and return Strong component.
     * @param text The text content for the strong element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns Strong component.
     */
    public strong(text?: string, data?: T): Strong {
        return this.setupComponent(new Strong(text), data);
    }
}
