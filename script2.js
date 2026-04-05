
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    ctx.beginPath();
    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
    ctx.stroke();
}


const canvas7 = document.getElementById('canvas7');


if (canvas7) {
    const ctx7 = canvas7.getContext('2d');

    
    let rad2 = ctx7.createRadialGradient(200, 75, 20, 200, 75, 100); 
    rad2.addColorStop(0, "yellow");
    rad2.addColorStop(1, "orange");
    ctx7.fillStyle = rad2;
    ctx7.fillRect(0, 0, 400, 150);

   
    ctx7.fillStyle = "navy";
    ctx7.fillRect(150, 25, 100, 100);

  
    drawStar(ctx7, 200, 75, 5, 30, 15);
}
