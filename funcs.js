/*
makeChart - builds chart on user data
params:
    opt.data(array) - user data;
    opt.dx - offset X-asis relative canvas element;
    opt.dy - offset Y-asis relative canvas element;
    opt.xst - step on X - asis;
    opt.yst - step on Y -asis;
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

    //draw X, Y asises
    ctx.strokeStyle = "white";
    ctx.lineWidth = "3";
    ctx.beginPath();
    ctx.moveTo(opt.dx, opt.dy);
    ctx.lineTo(opt.dx, H - opt.dy);
    ctx.moveTo(opt.dx, H - opt.dy);
    ctx.lineTo(W - opt.dx, H - opt.dy);
    ctx.stroke();

    //darw text for X asis
    ctx.fillStyle = "white";
    ctx.font = 'italic 10pt Arial';
    for (var i = 0; i < 12; i++) {
        ctx.fillText(opt.xst * i + '', opt.dy, H - i * opt.xst - opt.dy);
    };

    //darw data
    ctx.fillStyle = 'blue';
    for (var i = 0; i < opt.data.length; i++) {
        var x = i * 50 + opt.dx,
        w = 30,
        h = opt.data[i],
        y = H - h - opt.dy;
        ctx.fillRect(x, y, w, h);
    }

    //append to ...
    document.body.appendChild(canvas);
};