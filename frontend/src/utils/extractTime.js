export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

// función auxiliar para rellenar números de un solo dígito con un cero a la izquierda
function padZero(number) {
    return number.toString().padStart(2, "0");
}