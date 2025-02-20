import { ComponentFactory, ElementComponentWithChildren, Phrase } from "@vanilla-ts/core";


/**
 * A component (`<a>`).
 */
export class A<EventMap extends HTMLElementEventMap = HTMLElementEventMap> extends ElementComponentWithChildren<HTMLAnchorElement, EventMap> {
    /**
     * Create A component.
     * @param phrase The phrasing content for the `<a>` element.
     */
    constructor(...phrase: Phrase[]) {
        super("a");
        !phrase || this.phrase(...phrase);
    }
}

/**
 * Factory for A components.
 */
export class AFactory<T> extends ComponentFactory<A> {
    /**
     * Create, set up and return A component.
     * @param phrase The phrasing content for the `<a>` element.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns A component.
     */
    public a(phrase?: Phrase | Phrase[], data?: T): A {
        return this.setupComponent(
            !phrase
                ? new A()
                : Array.isArray(phrase)
                    ? new A(...phrase)
                    : new A(phrase),
            data
        );
    }
}
