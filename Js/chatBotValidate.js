// Selecting elements to validate
var chatBotTextArea = document.querySelector(".chatBot .chatForm #chatTextBox")

function validateMessage() {
    if (chatBotTextArea.value == "" || chatBotTextArea.value == "Type here...")
        return false
    else
        return true
}

function timeStamp(time) {
    currentStamp = Date.now()
    if (time == 1)
        return currentStamp - 2 * 60 * 60
    if (time == 2)
        return currentStamp - 3 * 24 * 60 * 60
    if (time == 3)
        return currentStamp - 7 * 24 * 60 * 60
    else
        return 0
}

function keyWordArray(keyword) {
    const retArray = keyword.split(' ')
    return retArray
}