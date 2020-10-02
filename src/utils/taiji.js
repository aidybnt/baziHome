export function taiJi(s, ctx) {
  return runTaiji(s, ctx);
}

function runTaiji(s, ctx) {
  // 可以根据自己的想要的速度传参,s越大速度越快
  let v = s / 30000;
  let i = 1;

  function fillTaiji() {
    // let c = document.getElementById('myCanvas');
    // let c = document.getElementById(id);
    // console.log(c);
    // let ctx = c.getContext("2d");
    // console.log(ctx);
    ctx.clearRect(0, 0, 150, 150);
    // 此处保存原始坐标
    ctx.save();
    ctx.translate(75, 75);
    // var time = new Date();
    // ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() )
    //旋转，可以控制旋转方向
    ctx.rotate(((-2 * Math.PI) * v) * i++);
    if (i === 36000) {
      i = 1;
    }
    //绘制左侧的白色半圆直径都是150
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(0, 0, 75, 1.5 * Math.PI, Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();
    //绘制右侧的黑色半圆
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(0, 0, 75, Math.PI / 2, 1.5 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    //绘制下面的黑色圆
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(0, 37.5, 37.5, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    //绘制上面的白色圆
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(0, -37.5, 37.5, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    //绘制两个小圆
    ctx.fillStyle = "FFFFFF";
    ctx.beginPath();
    ctx.arc(0, 37.5, 9, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    //绘制黑色小圆
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(0, -37.5, 9, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    // 此处恢复原始坐标
    window.requestAnimationFrame(fillTaiji)
    // window.requestAnimationFrame()
    // 告诉浏览器——你希望执行一个动画，
    // 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    // 该方法需要传入一个回调函数作为参数，
    // 该回调函数会在浏览器下一次重绘之前执行
  }

  window.requestAnimationFrame(fillTaiji)
}