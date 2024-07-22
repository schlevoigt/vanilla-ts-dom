import { ComponentFactory, DataListAttr, MinMaxLengthAttr, PlaceholderAttr, mixinDOMAttributes } from "@vanilla-ts/core";
import { Input } from "./Input.js";


/**
 * Text input component (`<input type="text">`) extended with  `MinLength`, `MaxLength` `DataList`
 * and `Placeholder` getters/setters and set methods.
 */
export class TextInput extends Input { // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    /**
     * Builds the input component.
     * @param id The id (attribute) of the text input.
     * @param value The value of the text input.
     * @param name The name (attribute) of the text input.
     */
    constructor(id?: string, value?: string, name?: string) {
        super("text", id, value, name);
    }
}

/** Mixin additional DOM attributes */
mixinDOMAttributes(
    TextInput,
    MinMaxLengthAttr<HTMLInputElement>,
    PlaceholderAttr<HTMLInputElement>,
    DataListAttr<HTMLInputElement>
);

/** Augment class definition with the DOM attributes introduced by `mixinDOMAttributes()` above. */
export interface TextInput extends // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    MinMaxLengthAttr<HTMLInputElement>,
    PlaceholderAttr<HTMLInputElement>,
    DataListAttr<HTMLInputElement> { }

/**
 * Factory for `<input type="text">` components.
 */
export class TextInputFactory<T> extends ComponentFactory<TextInput> {
    /**
     * Create and return TextInput component.
     * @param id The id (attribute) of the text input.
     * @param value The value of the text input.
     * @param name The name (attribute) of the text input.
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns TextInput component.
     */
    public textInput(id?: string, value?: string, name?: string, data?: T): TextInput {
        return this.setupComponent(new TextInput(id, value, name), data);
    }
}
