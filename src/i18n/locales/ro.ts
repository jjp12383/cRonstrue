// Romanian

import { Locale } from "../locale";
export class ro implements Locale {
  use24HourTimeFormatByDefault() {
    return true;
  }

  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "Eroare la generarea descrierii. Verificați sintaxa.";
  }
  at() {
    return "La";
  }
  atSpace() {
    return "La ";
  }
  atX0() {
    return "la %s";
  }
  atX0MinutesPastTheHour() {
    return "la și %s minute";
  }
  atX0SecondsPastTheMinute() {
    return "la și %s secunde";
  }
  betweenX0AndX1() {
    return "între %s și %s";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", între zilele %s și %s ale lunii";
  }
  betweenDayX0AndX1OfTheMonth() {
    return "între zilele %s și %s ale lunii";
  }
  commaEveryDay() {
    return ", în fiecare zi";
  }
  everyDay() {
    return "în fiecare zi";
  }
  commaEveryX0Days() {
    return ", la fiecare %s zile";
  }
  everyX0Days() {
    return "la fiecare %s zile";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", la fiecare a %s-a zi a săptămânii";
  }
  everyX0DaysOfTheWeek() {
    return "la fiecare a %s-a zi a săptămânii";
  }
  commaEveryX0Months() {
    return ", la fiecare %s luni";
  }
  everyX0Months() {
    return "la fiecare %s luni";
  }
  commaEveryMonth(): string {
    return ", in fiecare luna";
  }
  everyMonth(): string {
    return "in fiecare luna";
  }
  commaEveryX0Years() {
    return ", o dată la %s ani";
  }
  everyX0Years() {
    return "o dată la %s ani";
  }
  commaOnDayX0OfTheMonth() {
    return ", în ziua %s a lunii";
  }
  onDayX0OfTheMonth() {
    return "în ziua %s a lunii";
  }
  commaOnDayX0() {
    return ", în ziua %s";
  }
  onDayX0() {
    return "ziua %s";
  }
  commaOnDayX0OfEveryMonth(): string {
    return ", în ziua %s a fiecărei luni";
  }
  onDayX0OfEveryMonth(): string {
    return "ziua %s a fiecărei luni";
  }
  commaOnDayX0OfEveryX0Months(): string {
    return ", în ziua %s, la fiecare %t luni";
  }
  onDayX0OfEveryX0Months(): string {
    return "ziua %s, la fiecare %t luni";
  }
  commaOnlyInX0() {
    return ", doar în %s";
  }
  onlyInX0() {
    return "doar în %s";
  }
  commaOnlyOnX0() {
    return ", doar %s";
  }
  commaAndOnX0() {
    return ", și %s";
  }
  commaOnThe() {
    return ", în ";
  }
  onThe() {
    return "în ";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", în ultima zi a lunii";
  }
  lastDayOfTheMonth() {
    return "ultima zi a lunii"
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", în ultima zi lucrătoare a lunii";
  }
  lastWeekdayOfTheMonth() {
    return "ultima zi lucrătoare a lunii";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s zile înainte de ultima zi a lunii";
  }
  daysBeforeTheLastDayOfTheMonth() {
    return "%s zile înainte de ultima zi a lunii";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", în ultima %s a lunii";
  }
  commaOnTheX0OfTheMonth() {
    return ", în %s a lunii";
  }
  theX0OfTheMonth() {
    return "%s a lunii";
  }
  commaX0ThroughX1() {
    return ", de %s până %s";
  }
  x0ThroughX1() {
    return "de %s până %s";
  }
  everyHour() {
    return "în fiecare oră";
  }
  everyMinute() {
    return "în fiecare minut";
  }
  everyMinuteBetweenX0AndX1() {
    return "În fiecare minut între %s și %s";
  }
  everySecond() {
    return "în fiecare secundă";
  }
  everyX0Hours() {
    return "la fiecare %s ore";
  }
  everyX0Minutes() {
    return "la fiecare %s minute";
  }
  everyX0Seconds() {
    return "la fiecare %s secunde";
  }
  fifth() {
    return "a cincea";
  }
  first() {
    return "prima";
  }
  firstWeekday() {
    return "prima zi a săptămânii";
  }
  fourth() {
    return "a patra";
  }
  minutesX0ThroughX1PastTheHour() {
    return "între minutele %s și %s";
  }
  second() {
    return "a doua";
  }
  secondsX0ThroughX1PastTheMinute() {
    return "între secunda %s și secunda %s";
  }
  spaceAnd() {
    return " și";
  }
  spaceX0OfTheMonth() {
    return " %s a lunii";
  }
  lastDay() {
    return "ultima zi";
  }
  third() {
    return "a treia";
  }
  weekdayNearestDayX0() {
    return "cea mai apropiată zi a săptămânii de ziua %s";
  }
  commaMonthX0ThroughMonthX1() {
    return ", din %s până în %s";
  }
  monthX0ThroughMonthX1() {
    return "din %s până în %s";
  }
  commaYearX0ThroughYearX1() {
    return ", din %s până în %s";
  }
  yearX0ThroughYearX1() {
    return "din %s până în %s";
  }
  atX0MinutesPastTheHourGt20() {
    return "la și %s de minute";
  }
  atX0SecondsPastTheMinuteGt20() {
    return "la și %s de secunde";
  }
  commaStartingX0() {
    return ", pornire %s";
  }
  daysOfTheWeek() {
    return ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];
  }
  monthsOfTheYear() {
    return [
      "ianuarie",
      "februarie",
      "martie",
      "aprilie",
      "mai",
      "iunie",
      "iulie",
      "august",
      "septembrie",
      "octombrie",
      "noiembrie",
      "decembrie",
    ];
  }
}
