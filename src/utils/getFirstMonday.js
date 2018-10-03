export default function getFirstMonday(date) {
    let result = new Date(date.getFullYear(), date.getMonth(), 1);

    while (result.getDay() !== 1) {
        result.setDate(result.getDate() - 1);
    }
    return result;
}