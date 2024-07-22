import { ComponentFactory, ElementComponentWithChildren, NativeDisabledAttr, mixinDOMAttributes } from "@vanilla-ts/core";


/**
 * Button component (`<button>`).
 */
export class Button extends ElementComponentWithChildren<HTMLButtonElement> { // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    /**
     * Create `<button>` component.
     * @param caption The caption for the button.
     */
    constructor(caption?: string) {
        super("button");
        !caption || this.text(caption);
    }
}

/** Mixin additional DOM attributes */
mixinDOMAttributes(
    Button,
    NativeDisabledAttr<HTMLButtonElement>
);

/** Augment class definition with the DOM attributes introduced by `mixinDOMAttributes()` above. */
export interface Button extends // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging,jsdoc/require-jsdoc
    NativeDisabledAttr<HTMLButtonElement> { }

/**
 * Factory for `<button>` based components.
 */
export class ButtonFactory<T> extends ComponentFactory<Button> {
    /**
     * Create, set up and return Button component.
     * @param caption The button caption.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns Button component.
     */
    public button(caption?: string, data?: T): Button {
        return this.setupComponent(new Button(caption), data);
    }
}
