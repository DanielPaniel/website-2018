var targetElement = document.getElementById("trianglePattern");
var pattern = Trianglify({
    height: targetElement.offsetHeight,
    width: targetElement.offsetWidth,
    cell_size: 100,
    variance: 1
});
pattern.canvas(targetElement);


function veganHotdogClasses() {
    var CSScomponentClass = "c-CSSOnlyVeganHotDogGraphic__condiments";
    var classes = [CSScomponentClass + "--none",
    CSScomponentClass + "--ketchup",
    CSScomponentClass + "--mustard",
    CSScomponentClass + "--picklemayo"];

    var veganHotdogClasses = document.getElementById("veganHotDogCondiments").classList;

    var activeClass = 0;
    for (var i = 0; i <= classes.length; i ++) {
        if (veganHotdogClasses.contains(classes[i])) {
            newClass = i+1;
            if (newClass == classes.length) {
                newClass = 0;
            }
            veganHotdogClasses.replace(classes[i], classes[newClass]);
            break;
        }
    }
}
