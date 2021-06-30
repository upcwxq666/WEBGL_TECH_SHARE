
function main() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    if (!ctx) {
        console.log('不支持canvas 2d上下文');
    }

    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
    ctx.fillRect(100, 100, 200, 200);  
}
   
