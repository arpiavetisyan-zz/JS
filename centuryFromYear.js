function centuryFromYear(year) {
    if (year % 100 == 0) {
        return year / 100
    } else {
        let result = parseInt(year / 100 + 1);
        return result;
    }
}