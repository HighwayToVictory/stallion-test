export const enumUtils = {
    role: convert(),
    status: change()
}

function change() {
    return (input) => {
        switch (input) {
            case 1:
            return "Initialized";
            case 2:
            return "Pending";
            case 3:
            return "Done";
            case 4:
            return "Failed";
        } 
    }
}

function convert() {
    return (input) => {
        switch (input) {
            case 1:
            return "Admin";
            case 2:
            return "Developer";
            case 3:
            return "Viewer";
        }   
    }
}