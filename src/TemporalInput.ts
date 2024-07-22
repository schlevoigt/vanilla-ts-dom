import { ComponentFactory, DataListAttr, HTMLInputTypes, MinMaxAttr, StepAttr, mixinDOMAttributes } from "@vanilla-ts/core";
import { Input } from "./Input.js";


/**
 * Types of TemporalInput component.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month
 */
export enum TemporalType {
    /** Date. */
    "Date" = 0,
    /** Time. */
    "Time" = 1,
    /** Time with seconds. */
    "TimeSeconds" = 2,
    /** Date and time (hh:mm). */
    "DateTime" = 3,
    /** Date and time with seconds (hh:mm:ss). */
    "DateTimeSeconds" = 4,
    /** Week. */
    "Week" = 5,
    /** Month. */
    "Month" = 6,
}

/**
 * Input component (`<input>`) for temporal types (`date`, `datetime-local`, `time` etc.), extended
 * with `Min`, `Min`, `Step` and 'DataList' getters/setters and set methods.
 */
export class TemporalInput extends Input { // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    /**
     * Builds the input component.
     * @param temporalType The type (attribute) of the temporal input.
     * @param id The id (attribute) of the temporal input.
     * @param value The value of the temporal input.
     * @param name The name (attribute) of the temporal input.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month
     */
    constructor(temporalType: TemporalType, id?: string, value?: string, name?: string) {
        let type: HTMLInputTypes = "date";
        let step: string | undefined = undefined;
        switch (temporalType) {
            case TemporalType.Time:
                type = "time";
                break;
            case TemporalType.TimeSeconds:
                type = "time";
                step = "1";
                break;
            case TemporalType.DateTime:
                type = "datetime-local";
                break;
            case TemporalType.DateTimeSeconds:
                type = "datetime-local";
                step = "1";
                break;
            case TemporalType.Week:
                type = "week";
                break;
            case TemporalType.Month:
                type = "month";
                break;
        }
        super(type, id, value, name);
        step !== undefined
            ? this.step(step)
            : undefined;
    }

    /**
     * Increments the input control's value by the value given by the `Step` attribute. If the
     * optional parameter is used, it will will increment the input control's value by that value.
     * @param n Value to decrement the value by.
     * @returns This instance.
     */
    public stepUp(n?: number): this {
        this._dom.stepUp(n);
        return this;
    }

    /**
     * Decrements the input control's value by the value given by the `Step` attribute. If the
     * optional parameter is used, it will will decrement the input control's value by that value.
     * @param n Value to decrement the value by.
     * @returns This instance.
     */
    public stepDown(n?: number): this {
        this._dom.stepDown(n);
        return this;
    }
}

/** Mixin additional DOM attributes */
mixinDOMAttributes(
    TemporalInput,
    MinMaxAttr<HTMLInputElement>,
    StepAttr<HTMLInputElement>,
    DataListAttr<HTMLInputElement>
);

/** Augment class definition with the DOM attributes introduced by `mixinDOMAttributes()` above. */
export interface TemporalInput extends // eslint-disable-line @typescript-eslint/no-unsafe-declaration-merging
    MinMaxAttr<HTMLInputElement>,
    StepAttr<HTMLInputElement>,
    DataListAttr<HTMLInputElement> { }

/**
 * Factory for temporal `<input>` components.
 */
export class TemporalInputFactory<T> extends ComponentFactory<TemporalInput> {
    /**
     * Create and return TemporalInput component.
     * @param temporalType The type (attribute) of the temporal input.
     * @param id The id (attribute) of the temporal input.
     * @param value The value of the temporal input.
     * @param name The name (attribute) of the temporal input.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month
     * @param data Optional arbitrary data passed to the `setupComponent()` function of the factory.
     * @returns TemporalInput component.
     */
    public temporalInput(temporalType: TemporalType, id?: string, value?: string, name?: string, data?: T): TemporalInput {
        return this.setupComponent(new TemporalInput(temporalType, id, value, name), data);
    }
}
