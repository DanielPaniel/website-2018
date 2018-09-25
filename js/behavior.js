var targetElement = document.getElementById("trianglePattern");
var pattern = Trianglify({
    height: targetElement.offsetHeight,
    width: targetElement.offsetWidth,
    cell_size: 200,
    variance: 1
});
pattern.canvas(targetElement);


function randomVeganHotdogCondiment() {
    var CSScomponentClass = "c-CSSOnlyVeganHotDogGraphic__condiments";
    var classes = [CSScomponentClass + "--none",
    CSScomponentClass + "--ketchup",
    CSScomponentClass + "--mustard",
    CSScomponentClass + "--picklemayo"];

    var veganHotdogClasses = document.getElementById("veganHotDogCondiments").classList;
    var newCondiment = Math.floor(Math.random() * Math.floor(classes.length));

    for (var i = 0; i <= classes.length; i ++) {
        if (veganHotdogClasses.contains(classes[i])) {
            veganHotdogClasses.replace(classes[i], classes[newCondiment]);
            break;
        }
    }
}
function eatVeganHotdog() {
    var CSScomponentClass = "c-biteAnimation";
    var classes = [CSScomponentClass + "--noBite",
    CSScomponentClass + "--biteOne",
    CSScomponentClass + "--biteTwo",
    CSScomponentClass + "--eaten"];

    var animationClasses = document.getElementById("veganHotDogBiteAnimation").classList;
    var newClass = 0;
    for (var i = 0; i <= classes.length; i ++) {
        if (animationClasses.contains(classes[i])) {
            newClass = i+1;
            if (newClass == classes.length) {
                newClass = 0;
                randomVeganHotdogCondiment();
            }
            animationClasses.replace(classes[i], classes[newClass]);
            break;
        }
    }
}
