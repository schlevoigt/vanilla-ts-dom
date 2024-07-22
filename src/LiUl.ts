import { ComponentFactory, ElementComponentWithChildren } from "@vanilla-ts/core";


/**
 * List item component (`<li>`) for unordered lists (`<ul>`).
 */
export class LiUl extends ElementComponentWithChildren<HTMLLIElement> {
    /**
     * Create `<li>` component.
     * @param text The text content for the li element.
     */
    constructor(text?: string) {
        super("li");
        !text || this.text(text);
    }
}

/**
 * Factory for `<li>` based components (for unordered lists (`<ul>`)).
 */
export class LiUlFactory<T> extends ComponentFactory<LiUl> {
    /**
     * Create, set up and return LiUl component.
     * @param text The text content for the li element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns LiUl component.
     */
    public liUl(text?: string, data?: T): LiUl {
        return this.setupComponent(new LiUl(text), data);
    }
}
