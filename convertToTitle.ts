const alphabet = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function convertToTitle(columnNumber: number): string {
    let title = ''


    while (columnNumber > 0) {
        columnNumber--
        title = String.fromCharCode(65 + (columnNumber % 26)) + title
        columnNumber = Math.floor(columnNumber / 26)
    }


    return title
}


console.log(convertToTitle(701))