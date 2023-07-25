export const statusUtil = {
    status: convert()
}

function convert() {
    return (input) => {
        if (input >= 200 && input < 300) {
            return "Successful operation.";
        } else {
            return "Operation failed!";
        }
    }
}