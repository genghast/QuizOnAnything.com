import { retrieve } from "./localData";
export function scoreCount(topic) {
    const categoryObj = retrieve(topic);
    let count = 0;
    categoryObj.forEach((element) => {
        if (element.answered === element.answer) {
            count++;
        }
    });
    return count;
}

export function numberAttempted(topic) {}

export function verifyAllAnswered(array) {
    return array.every((obj) => "answered" in obj);
}
