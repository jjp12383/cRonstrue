import { Options, DayOfWeekData, DayOfMonthData } from "./options";
import { Locale } from "./i18n/locale";
import { LocaleLoader } from "./i18n/localeLoader";
export declare class ExpressionDescriptor {
    static locales: {
        [name: string]: Locale;
    };
    static specialCharacters: string[];
    expression: string;
    expressionParts: string[];
    options: Options;
    i18n: Locale;
    static toString(expression: string, { throwExceptionOnParseError, verbose, dayOfWeekStartIndexZero, use24HourTimeFormat, locale, modulos, }?: Options): string;
    static toObject(expression: string, { throwExceptionOnParseError, verbose, dayOfWeekStartIndexZero, use24HourTimeFormat, locale, modulos, }?: Options): object;
    static initialize(localesLoader: LocaleLoader): void;
    constructor(expression: string, options: Options);
    protected getFullDescription(): string;
    protected getPartsOfDescription(): {};
    protected getTimeOfDayDescription(skipGrammar: boolean): string;
    protected getSecondsDescription(): string;
    protected getMinutesDescription(): string;
    protected getHoursDescription(): string;
    protected getDayOfWeekDescription(skipGrammar: boolean): {
        description: string;
        data: DayOfWeekData;
    };
    protected getMonthDescription(skipGrammar: boolean): {
        description: string;
        data: object;
    };
    protected getDayOfMonthDescription(skipGrammar: boolean): {
        description: string;
        data: DayOfMonthData;
    };
    protected getYearDescription(skipGrammar: boolean): string;
    protected getSegmentDescription(expression: string, allDescription: string, getSingleItemDescription: (t: string) => string, getIncrementDescriptionFormat: (t: string) => string, getRangeDescriptionFormat: (t: string) => string, getDescriptionFormat: (t: string) => string): string;
    protected generateRangeSegmentDescription(rangeExpression: string, getRangeDescriptionFormat: (t: string) => string, getSingleItemDescription: (t: string) => string): string;
    protected formatTime(hourExpression: string, minuteExpression: string, secondExpression: string): string;
    protected transformVerbosity(description: string, useVerboseFormat: boolean): string;
    private getPeriod;
}
