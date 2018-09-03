function veganHotdogClasses() {
    var classes = ["c-veganHotdogContainer__veganHotdog--none",
                    "c-veganHotdogContainer__veganHotdog--ketchup",
                    "c-veganHotdogContainer__veganHotdog--mustard"];

    var veganHotdogClasses = document.getElementById("veganHotdog").classList;

    var activeClass = 0;
    for (var i = 0; i <= classes.length; i ++) {
        if (veganHotdogClasses.contains(classes[i])) {
            newClass = i+1;
            if (newClass == classes.length) {
                newClass = 0;
            }
            veganHotdog.classList.replace(classes[i], classes[newClass]);
            break;
        }
    }
}
