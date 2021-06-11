// Chinese (Traditional)

import { Locale } from "../locale";
export class zh_TW implements Locale {
  atX0SecondsPastTheMinuteGt20(): string {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string {
    return null;
  }
  monthX0ThroughMonthX1(): string {
    return null;
  }
  commaYearX0ThroughYearX1(): string {
    return ", 从%s年至%s年";
  }
  yearX0ThroughYearX1(): string {
    return "从%s年至%s年";
  }
  use24HourTimeFormatByDefault() {
    return false;
  }
  everyMinute() {
    return "每分鐘";
  }
  everyHour() {
    return "每小時";
  }
  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "產生正規表達式描述時發生了錯誤，請檢查 cron 表達式語法。";
  }
  atSpace() {
    return "在 ";
  }
  everyMinuteBetweenX0AndX1() {
    return "在 %s 和 %s 之間的每分鐘";
  }
  at() {
    return "在";
  }
  spaceAnd() {
    return " 和";
  }
  everySecond() {
    return "每秒";
  }
  everyX0Seconds() {
    return "每 %s 秒";
  }
  secondsX0ThroughX1PastTheMinute() {
    return "在每分鐘的 %s 到 %s 秒";
  }
  atX0SecondsPastTheMinute() {
    return "在每分鐘的 %s 秒";
  }
  everyX0Minutes() {
    return "每 %s 分鐘";
  }
  minutesX0ThroughX1PastTheHour() {
    return "在每小時的 %s 到 %s 分鐘";
  }
  atX0MinutesPastTheHour() {
    return "在每小時的 %s 分";
  }
  everyX0Hours() {
    return "每 %s 小時";
  }
  betweenX0AndX1() {
    return "在 %s 和 %s 之間";
  }
  atX0() {
    return "在 %s";
  }
  commaEveryDay() {
    return ", 每天";
  }
  everyDay() {
    return "每天";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", 每週的每 %s 天";
  }
  everyX0DaysOfTheWeek() {
    return "每週的每 %s 天";
  }
  commaX0ThroughX1() {
    return ", %s 到 %s";
  }
  x0ThroughX1() {
    return "%s 到 %s";
  }
  first() {
    return "第一個";
  }
  second() {
    return "第二個";
  }
  third() {
    return "第三個";
  }
  fourth() {
    return "第四個";
  }
  fifth() {
    return "第五個";
  }
  commaOnThe() {
    return ", 在每月 ";
  }
  onThe() {
    return "在每月 ";
  }
  spaceX0OfTheMonth() {
    return "%s ";
  }
  lastDay() {
    return "最後一天";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", 每月的最後一個 %s ";
  }
  commaOnlyOnX0() {
    return ", 僅在 %s";
  }
  commaAndOnX0() {
    return ", 和 %s";
  }
  commaEveryX0Months() {
    return ", 每 %s 月";
  }
  everyX0Months() {
    return "每 %s 月";
  }
  commaEveryMonth(): string {
    return ", 每個月";
  }
  everyMonth(): string {
    return "每個月";
  }
  commaOnlyInX0() {
    return ", 僅在 %s";
  }
  onlyInX0() {
    return "僅在 %s";
  }
  commaOnlyInMonthX0() {
    return ", 僅在%s";
  }
  onlyInMonthX0() {
    return "僅在%s";
  }
  commaOnlyInYearX0() {
    return ", 僅在 %s 年";
  }
  onlyInYearX0() {
    return "僅在 %s 年";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", 每月的最後一天";
  }
  lastDayOfTheMonth() {
    return "每月的最後一天";
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", 每月的最後一個工作日";
  }
  lastWeekdayOfTheMonth() {
    return "每個月的最後一個工作日";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s 這個月的最後一天的前幾天";
  }
  daysBeforeTheLastDayOfTheMonth() {
    return "%s 這個月的最後一天的前幾天";
  }
  firstWeekday() {
    return "第一個工作日";
  }
  weekdayNearestDayX0() {
    return "最接近 %s 號的工作日";
  }
  commaOnTheX0OfTheMonth() {
    return ", 每月的 %s ";
  }
  theX0OfTheMonth() {
    return "每月的 %s ";
  }
  commaEveryX0Days() {
    return ", 每 %s 天";
  }
  everyX0Days() {
    return "每 %s 天";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", 在每月的 %s 和 %s 之間";
  }
  betweenDayX0AndX1OfTheMonth() {
    return "在每月的 %s 和 %s 之間";
  }
  commaOnDayX0OfTheMonth() {
    return ", 每月的 %s";
  }
  onDayX0OfTheMonth() {
    return "每月的 %s";
  }
  commaOnDayX0() {
    return "，第%s天";
  }
  onDayX0() {
    return "第%s天";
  }
  commaOnDayX0OfEveryMonth(): string {
    return "，每個月的第%s天";
  }
  onDayX0OfEveryMonth(): string {
    return "每月的第%s天";
  }
  commaOnDayX0OfEveryX0Months(): string {
    return "，在第%s天，每%t個月一次";
  }
  onDayX0OfEveryX0Months(): string {
    return "第%s天，每%t個月";
  }
  commaEveryX0Years() {
    return ", 每 %s 年";
  }
  everyX0Years() {
    return "每 %s 年";
  }
  commaStartingX0() {
    return ", %s 開始";
  }
  dayX0() {
    return " %s 號";
  }
  daysOfTheWeek() {
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  }
  monthsOfTheYear() {
    return ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  }
}
