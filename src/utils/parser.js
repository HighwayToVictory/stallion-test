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

        let month = d.getUTCMonth() < 10 ? "0" + d.getUTCMonth() : d.getUTCMonth();
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

        return d.getFullYear() + "/" + 
            month + "/" + 
            day + " " + 
            hour + ":" + 
            minutes + ":" +
            seconds;
    }
}