export const enumUtils = {
    status: change()
}

function change() {
    return (input) => {
        switch (input) {
            case 1:
            return "initialized";
            case 2:
            return "pending";
            case 3:
            return "done";
            case 4:
            return "failed";
        } 
    }
}
