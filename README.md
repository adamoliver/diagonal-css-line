# This draws a line from given co-ordinates

## Example usage:

```
var newLine = new DiagonalLine({
    x1: this.resultPositions[i].x,
    y1: this.resultPositions[i].y,
    x2: this.centrePoint.x,
    y2: this.centrePoint.y
});

$('#example').append(newLine.draw());
```