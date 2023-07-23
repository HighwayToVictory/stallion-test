export const parser = {
    parseDate: parseDate()
}

function parseDate() {
    return (input) => {
        let d = new Date(input);

        return d.getFullYear() + " / " + d.getUTCMonth() + " / " + d.getDate();
    }
}