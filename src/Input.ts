import { DirnameAttr, ElementComponentVoid, HTMLInputTypes, NameAttr, NativeDisabledAttr, ReadonlyAttr, RequiredAttr, ValueAttr, mixinDOMAttributes } from "@vanilla-ts/core";


/**
 * Abstract base Input component (`<input>`).\
 * __Note:__ This class has mixins for the properties `readonly`, `required`, `dirName` and `value`,
 * however, some input elements don't support these attributes, but since the vast majority supports
 * them, they are included here. Nevertheless some derived classes may have to override properties,
 * e.g. `readonly` isn't supported for checkboxes and `dirName` isn't supported for `datetime-local`
 * elements.
 */
export abstract class Input<EventMap extends HTMLElementEventMap = HTMLElementEventMap> extends ElementComponentVoid<HTMLInputElement, EventMap> { // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    protected type: HTMLInputTypes;

    /**
     * Create Input component.
     * @param type The type (attribute) of the input component.
     * @param id The id (attribute) of the input component.
     * @param value The value of the input element.
     * @param name The name (attribute) of the input component.
     */
    constructor(type: HTMLInputTypes, id?: string, value?: string, name?: string) {
        super("input");
        this.type = type;
        this._dom.type = this.type;
        !id || this.id(id);
        // Otherwise this will be "on" (for checkboxes, radiobuttons, ...).
        // this.value(value ? value : ""); // eslint-disable-line @typescript-eslint/no-unsafe-call
        !value || this.value(value);
        !name || this.name(name);
    }

    /**
     * Get type (attribute) of the input element.
     */
    public get Type(): HTMLInputTypes {
        return this.type;
    }

    static {
        /** Mixin additional DOM attributes. */
        mixinDOMAttributes(
            Input,
            DirnameAttr<HTMLInputElement>,
            NameAttr<HTMLInputElement>,
            ValueAttr<HTMLInputElement>,
            NativeDisabledAttr<HTMLInputElement>,
            RequiredAttr<HTMLInputElement>,
            ReadonlyAttr<HTMLInputElement>
        );
    }
}

/** Augment class definition with the DOM attributes introduced by `mixinDOMAttributes()` above. */
export interface Input<EventMap extends HTMLElementEventMap = HTMLElementEventMap> extends // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    DirnameAttr<HTMLInputElement, EventMap>,
    NameAttr<HTMLInputElement, EventMap>,
    ValueAttr<HTMLInputElement, EventMap>,
    NativeDisabledAttr<HTMLInputElement, EventMap>,
    RequiredAttr<HTMLInputElement, EventMap>,
    ReadonlyAttr<HTMLInputElement, EventMap> { }
