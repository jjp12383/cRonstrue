// Slovenian

import { Locale } from "../locale";
export class sl implements Locale {
  use24HourTimeFormatByDefault() {
    return true;
  }
  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "Pri generiranju opisa izraza je prišlo do napake. Preverite sintakso izraza cron.";
  }
  at() {
    return "Ob";
  }
  atSpace() {
    return "Ob ";
  }
  atX0() {
    return "ob %s";
  }
  atX0MinutesPastTheHour() {
    return "ob %s.";
  }
  atX0SecondsPastTheMinute() {
    return "ob %s.";
  }
  betweenX0AndX1() {
    return "od %s do %s";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", od %s. do %s. dne v mesecu";
  }
  betweenDayX0AndX1OfTheMonth() {
    return "od %s. do %s. dne v mesecu";
  }
  commaEveryDay() {
    return ", vsak dan";
  }
  everyDay() {
    return "vsak dan";
  }
  commaEveryX0Days() {
    return ", vsakih %s dni";
  }
  everyX0Days() {
    return "vsakih %s dni";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", vsakih %s dni v tednu";
  }
  everyX0DaysOfTheWeek() {
    return "vsakih %s dni v tednu";
  }
  commaEveryX0Months() {
    return ", vsakih %s mesecev";
  }
  everyX0Months() {
    return "vsakih %s mesecev";
  }
  commaEveryMonth(): string {
    return ", vsak mesec";
  }
  everyMonth(): string {
    return "vsak mesec";
  }
  commaEveryX0Years() {
    return ", vsakih %s let";
  }
  everyX0Years() {
    return "vsakih %s let";
  }
  commaOnDayX0OfTheMonth() {
    return ", %s. dan v mesecu";
  }
  onDayX0OfTheMonth() {
    return "%s. dan v mesecu";
  }
  commaOnDayX0() {
    return ", %s. dan";
  }
  onDayX0() {
    return "%s. dan";
  }
  commaOnDayX0OfEveryMonth(): string {
    return ", %s. dan vsakega meseca";
  }
  onDayX0OfEveryMonth(): string {
    return "%s. dan vsakega meseca";
  }
  commaOnDayX0OfEveryX0Months(): string {
    return ", %s. dan, vsakih %t mesecev";
  }
  onDayX0OfEveryX0Months(): string {
    return "%s. dan, vsakih %t mesecev";
  }
  commaOnlyInX0() {
    return ", samo v %s";
  }
  onlyInX0() {
    return "samo v %s";
  }
  commaOnlyOnX0() {
    return ", samo v %s";
  }
  commaAndOnX0() {
    return "in naprej %s";
  }
  commaOnThe() {
    return ", ";
  }
  onThe() {
    return " ";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", zadnji dan v mesecu";
  }
  lastDayOfTheMonth() {
    return "zadnji dan v mesecu";
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", zadnji delovni dan v mesecu";
  }
  lastWeekdayOfTheMonth() {
    return "zadnji delovni dan v mesecu";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s dni pred koncem meseca";
  }
  daysBeforeTheLastDayOfTheMonth() {
    return "%s dni pred koncem meseca";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", zadnji %s v mesecu";
  }
  commaOnTheX0OfTheMonth() {
    return ", %s v mesecu";
  }
  theX0OfTheMonth() {
    return "%s v mesecu";
  }
  commaX0ThroughX1() {
    return ", od %s do %s";
  }
  x0ThroughX1() {
    return "od %s do %s";
  }
  everyHour() {
    return "vsako uro";
  }
  everyMinute() {
    return "vsako minuto";
  }
  everyMinuteBetweenX0AndX1() {
    return "Vsako minuto od %s do %s";
  }
  everySecond() {
    return "vsako sekundo";
  }
  everyX0Hours() {
    return "vsakih %s ur";
  }
  everyX0Minutes() {
    return "vsakih %s minut";
  }
  everyX0Seconds() {
    return "vsakih %s sekund";
  }
  fifth() {
    return "peti";
  }
  first() {
    return "prvi";
  }
  firstWeekday() {
    return "prvi delovni dan";
  }
  fourth() {
    return "četrti";
  }
  minutesX0ThroughX1PastTheHour() {
    return "minute od %s do %s";
  }
  second() {
    return "drugi";
  }
  secondsX0ThroughX1PastTheMinute() {
    return "sekunde od %s do %s";
  }
  spaceAnd() {
    return " in";
  }
  spaceX0OfTheMonth() {
    return " %s v mesecu";
  }
  lastDay() {
    return "zadnjič";
  }
  third() {
    return "tretji";
  }
  weekdayNearestDayX0() {
    return "delovni dan, najbližji %s. dnevu";
  }
  commaMonthX0ThroughMonthX1(): string {
    return null;
  }
  monthX0ThroughMonthX1(): string {
    return null;
  }
  commaYearX0ThroughYearX1(): string {
    return null;
  }
  yearX0ThroughYearX1(): string {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string {
    return null;
  }
  atX0SecondsPastTheMinuteGt20(): string {
    return null;
  }
  commaStartingX0() {
    return ", začenši %s";
  }
  daysOfTheWeek() {
    return ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];
  }
  monthsOfTheYear() {
    return [
      "januar",
      "februar",
      "marec",
      "april",
      "maj",
      "junij",
      "julij",
      "avgust",
      "september",
      "oktober",
      "november",
      "december",
    ];
  }
}
