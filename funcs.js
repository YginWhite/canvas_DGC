/*
makeChart - builds chart on user data
params:
    opt.data(array) - user data;
    opt.dx - offset X-axis relative canvas element;
    opt.dy - offset Y-axis relative canvas element;
    opt.xst - step on X - axis;
    opt.yst - step on Y -axis;
    opt.w - column width of drawing data;
    opt.wb - width between columns;
*/
var makeChart = function (opt) {
    //create canvas element
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    //set the size of canvas
    var H = 600, W = 700;
    canvas.height = 600;
    canvas.width = 700;

    //set the background fill
    var grad = ctx.createLinearGradient(0, 0, H, W);
    grad.addColorStop(0, 'grey');
    grad.addColorStop(0.5, 'black');
    grad.addColorStop(1, 'grey');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    //draw X, Y axises
    ctx.strokeStyle = "white";
    ctx.lineWidth = "3";
    ctx.beginPath();
    ctx.moveTo(opt.dx, opt.dy);
    ctx.lineTo(opt.dx, H - opt.dy);
    ctx.moveTo(opt.dx, H - opt.dy);
    ctx.lineTo(W - opt.dx, H - opt.dy);
    ctx.stroke();

    //darw text for Y axis
    ctx.fillStyle = "white";
    ctx.font = 'italic 10pt Arial';
    ctx.beginPath(); // for lines front of the text
    for (var i = 0; i < 10; i++) {
        if (i == 0) continue;
        ctx.fillText(opt.yst * i + '', opt.dx - 35, H - i * opt.yst - opt.dy);
        // draw lines
        ctx.moveTo(opt.dx - 6, H - i * opt.yst - opt.dy);
        ctx.lineTo(opt.dx + 2, H - i * opt.yst - opt.dy);
    };
    ctx.stroke();

    //darw data
    var coord = []; //for text on X axis
    ctx.fillStyle = 'blue';
    for (var i = 0; i < opt.data.length; i++) {
        var x = i * (opt.w + opt.wb) + opt.dx,
        h = opt.data[i],
        y = H - h - opt.dy;
        coord.push(x);
        ctx.fillRect(x, y, opt.w, h);
    }

    //draw text for X axis
    ctx.fillStyle = "white";
    for (var i = 0; i < coord.length; i++) {
        ctx.fillText(opt.data[i] + '', opt.dx / 2 + coord[i] - 25, H - opt.dy + 25);
        if (opt.text !== undefined) {
            ctx.fillText(opt.text[i] + '', opt.dx / 2 + coord[i] - 25, H - opt.dy + 25 + 20);
        }
    };

    //append to ...
    document.body.appendChild(canvas);
};