export function formatDate(date) {
    return date.match(/\d+-\d+-\d+/);
}

export function formatStr(str) {
    return str.replace(/[_]/, " ");
}