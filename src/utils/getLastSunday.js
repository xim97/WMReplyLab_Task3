export default function getLastSunday(date) {
    let result = new Date(date.getFullYear(), date.getMonth() + 1, 6);

    while (result.getDay() !== 0) {
        result.setDate(result.getDate() - 1);
    }
    return result;
}