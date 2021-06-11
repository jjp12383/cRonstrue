export interface Locale {
  // TODO: Circle back and use null/undefined aware types for optionals below in TypeScript 2.0: https://github.com/Microsoft/TypeScript/pull/7140
  // TODO: These locale translations would be a good use for ES6 template strings except we sometimes concatenate multiple transactions together before
  //       doing the actual template replacement.

  setPeriodBeforeTime?(): boolean;
  pm?(): string;
  am?(): string;
  use24HourTimeFormatByDefault(): boolean;
  anErrorOccuredWhenGeneratingTheExpressionD(): string;
  everyMinute(): string;
  everyHour(): string;
  atSpace(): string;
  everyMinuteBetweenX0AndX1(): string;
  at(): string;
  spaceAnd(): string;
  everySecond(): string;
  everyX0Seconds(): string;
  secondsX0ThroughX1PastTheMinute(): string;
  atX0SecondsPastTheMinute(): string;
  atX0SecondsPastTheMinuteGt20(): string; // optional
  everyX0Minutes(): string;
  minutesX0ThroughX1PastTheHour(): string;
  atX0MinutesPastTheHour(): string;
  atX0MinutesPastTheHourGt20(): string; // optional
  everyX0Hours(): string;
  betweenX0AndX1(): string;
  atX0(): string;
  commaEveryDay(): string;
  everyDay(): string;
  commaEveryX0DaysOfTheWeek(): string;
  everyX0DaysOfTheWeek(): string;
  commaX0ThroughX1(): string;
  x0ThroughX1(): string;
  commaMonthX0ThroughMonthX1(): string; // optional
  monthX0ThroughMonthX1(): string; // optional
  commaYearX0ThroughYearX1(): string; // optional
  yearX0ThroughYearX1(): string; // optional
  first(): string;
  second(): string;
  third(): string;
  fourth(): string;
  fifth(): string;
  commaOnThe(): string;
  onThe(): string;
  spaceX0OfTheMonth(): string;
  lastDay(): string;
  commaOnTheLastX0OfTheMonth(): string;
  commaOnlyOnX0(): string;
  commaAndOnX0(): string;
  commaEveryX0Months(): string;
  everyX0Months(): string;
  commaEveryMonth(): string;
  everyMonth(): string;
  commaOnlyInX0(): string;
  onlyInX0(): string;
  commaOnlyInMonthX0?(): string;
  onlyInMonthX0?(): string;
  commaOnlyInYearX0?(): string;
  onlyInYearX0?(): string;
  commaOnTheLastDayOfTheMonth(): string;
  lastDayOfTheMonth(): string;
  commaOnTheLastWeekdayOfTheMonth(): string;
  lastWeekdayOfTheMonth(): string;
  commaDaysBeforeTheLastDayOfTheMonth(): string;
  daysBeforeTheLastDayOfTheMonth(): string;
  firstWeekday(): string;
  weekdayNearestDayX0(): string;
  commaOnTheX0OfTheMonth(): string;
  theX0OfTheMonth(): string;
  commaEveryX0Days(): string;
  everyX0Days(): string;
  commaBetweenDayX0AndX1OfTheMonth(): string;
  betweenDayX0AndX1OfTheMonth(): string;
  commaOnDayX0OfTheMonth(): string;
  onDayX0OfTheMonth(): string;
  commaOnDayX0OfEveryMonth(): string;
  onDayX0OfEveryMonth(): string;
  commaOnDayX0(): string;
  onDayX0(): string;
  commaOnDayX0OfEveryX0Months(): string;
  onDayX0OfEveryX0Months(): string;
  commaEveryX0Years(): string;
  everyX0Years(): string;
  commaStartingX0(): string;
  dayX0?(): string;
  daysOfTheWeek(): string[];
  monthsOfTheYear(): string[];
}
