import { ComponentFactory, ElementComponentWithChildren, ValueAttr, mixinDOMAttributes } from "@vanilla-ts/core";


/**
 * List item component (`<li>`) for ordered lists (`<ol>`).
 */
export class LiOl extends ElementComponentWithChildren<HTMLLIElement> { // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    /**
     * Create <li> component.
     * @param text The text content for the li element.
     * @param value The numeric value for the li element.
     */
    constructor(text?: string, value?: number) {
        super("li");
        !text || this.text(text);
        value !== undefined
            ? this.value(value)
            : undefined;
    }
}

/** Mixin additional DOM attributes */
mixinDOMAttributes(
    LiOl,
    ValueAttr<HTMLLIElement>
);

/** Augment class definition with the DOM attributes introduced by `mixinDOMAttributes()` above. */
export interface LiOl extends // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    ValueAttr<HTMLLIElement> { }

/**
 * Factory for `<li>` based components (for ordered lists (`<ol>`)).
 */
export class LiOlFactory<T> extends ComponentFactory<LiOl> {
    /**
     * Create, set up and return LiOl component.
     * @param text The text content for the li element.
     * @param value The numeric value for the li element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns LiOl component.
     */
    public liOl(text?: string, value?: number, data?: T): LiOl {
        return this.setupComponent(new LiOl(text, value), data);
    }
}
