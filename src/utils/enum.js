export const enumUtils = {
    role: convertRoleToString()
}

function convertRoleToString() {
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