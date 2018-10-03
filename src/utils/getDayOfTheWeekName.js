export default function getDatOFTheWeekName(number) {
    const namesOfDaysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вск"];
    return namesOfDaysOfWeek[number - 1];
}