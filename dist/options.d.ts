export interface Options {
    throwExceptionOnParseError?: boolean;
    verbose?: boolean;
    dayOfWeekStartIndexZero?: boolean;
    use24HourTimeFormat?: boolean;
    locale?: string;
    modulos?: ModuloOptions;
}
export interface DayOfWeekData {
    days?: string[];
    day?: string;
    occurs?: string;
    daysOfWeek?: string[];
    textDays?: string[];
    occurOptions?: string[];
}
export interface DayOfMonthData {
    days?: string[];
    occurs?: string;
}
export interface ModuloOptions {
    dayModulo: number;
    weekModulo: number;
    monthModulo: number;
}
