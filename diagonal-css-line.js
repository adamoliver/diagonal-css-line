function DiagonalLine(options) {

    this.settings = {
        x1: options.x1,
        x2: options.x2,
        y1: options.y1,
        y2: options.y2
    };

    this.draw = function() {

        var x1 = this.settings.x1,
            x2 = this.settings.x2,
            y1 = this.settings.y1,
            y2 = this.settings.y2;

        if (x2 < x1) {
            var temp = x1;
            x1 = x2;
            x2 = temp;
            temp = y1;
            y1 = y2;
            y2 = temp;
        }
        var line = document.createElement("div");
        line.className = "line";
        var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
        line.style.width = length + "px";

        var isIE7 = navigator.userAgent.indexOf("MSIE 7") > -1,
            isIE8 = navigator.userAgent.indexOf("MSIE 8") > -1;

        if (isIE7 || isIE8) {
            line.style.top = (y2 > y1) ? y1 + "px" : y2 + "px";
            line.style.left = x1 + "px";
            var nCos = (x2-x1)/length;
            var nSin = (y2-y1)/length;
            line.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + nCos + ", M12=" + -1*nSin + ", M21=" + nSin + ", M22=" + nCos + ")";
        } else {
            var angle = Math.atan((y2-y1)/(x2-x1));
            line.style.top = y1 + 0.5*length*Math.sin(angle) + "px";
            line.style.left = x1 - 0.5*length*(1 - Math.cos(angle)) + "px";
            line.style.transform = line.style.MozTransform = line.style.WebkitTransform = line.style.OTransform = line.style.msTransform = "rotate(" + angle + "rad)";
        }

        return line;

    };
}