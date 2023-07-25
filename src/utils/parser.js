export const parser = {
    parseDate: parseDate(),
    parseTime: parseTime()
}

function parseDate() {
    return (input) => {
        let d = new Date(input);

        return d.getFullYear() + " / " + d.getUTCMonth() + " / " + d.getDate();
    }
}

function parseTime() {
    return (input) => {
        let d = new Date(input);

        return d.getFullYear() + "/" + d.getUTCMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    }
}