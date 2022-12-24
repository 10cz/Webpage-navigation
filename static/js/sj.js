// 定义 getTime 函数，用于获取当前的时间
function getTime() {
  var date = new Date(); // 创建一个新的日期对象
  var hour = date.getHours(); // 获取小时
  hour = hour < 10 ? '0' + hour : hour; // 使用三目运算符检查是否小于 10，并在必要时在前面添加 0
  var minute = date.getMinutes(); // 获取分钟
  minute = minute < 10 ? '0' + minute : minute; // 使用三目运算符检查是否小于 10，并在必要时在前面添加 0
  var seconds = date.getSeconds(); // 获取秒
  seconds = seconds < 10 ? '0' + seconds : seconds; // 使用三目运算符检查是否小于 10，并在必要时在前面添加 0
  return hour + ':' + minute + ':' + seconds; // 返回时间字符串
}

// 使用 setInterval 函数定义定时器，每秒钟调用 getTime 函数一次
setInterval(function() {
  document.querySelector('.c1a').innerHTML = getTime(); // 将返回的时间显示在 class 为 c1a 的元素中
}, 1000)

// 定义 WIDGET 变量，该变量是一个对象，包含一个名为 CONFIG 的对象，该对象包含了一些配置信息

WIDGET = {
    "CONFIG": {
      "modules": "01234",
      "background": "5",
      "tmpColor": "FFFFFF",
      "tmpSize": "16",
      "cityColor": "FFFFFF",
      "citySize": "16",
      "aqiColor": "FFFFFF",
      "aqiSize": "16",
      "weatherIconSize": "24",
      "alertIconSize": "18",
      "padding": "10px 10px 10px 10px",
      "shadow": "0",
      "language": "auto",
      "fixed": "true",
      "vertical": "top",
      "horizontal": "left",
      "left": "10",
      "top": "20",
      "key": "328956dc7d8a4d3aa6d3715684ed5c91"
    }
  }




// 设置倒计时的目标日期
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// 每隔一秒更新一次倒计时
var x = setInterval(function() {

  // 获取当前日期和时间
  var now = new Date().getTime();

  // 计算时间差
  var distance = countDownDate - now;

  // 计算天、小时、分钟和秒
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 将结果写入计时器文本
  document.getElementById("timer").innerHTML = days + "天 " + hours + "小时 "
  + minutes + "分钟 " + seconds + "秒 ";

  // 如果倒计时结束，请在计时器文本中写入文本
  if (distance < 0) {
    clearInterval(x);
    
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
