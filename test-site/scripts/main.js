//document.querySelector 和 alert 是浏览器内置的函数，随时可用。
//alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。

/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}//点击任意位置会触发alert()；
*/

//10-19:把img元素的引用保存在myImage变量里，将其的点击事件与匿名函数绑定，执行函数体里的功能
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  //捕获标题变量
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  //设置标题变量的内容
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  //localStorage API ，它可以将数据存储在浏览器中供后续获取,用getItem和setItem方法
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');//根据name拿值
if(!storedName) {
   setUserName();//第一次进入页面，浏览器中没有存好的变量，弹出对话框
} else {
   setHeading(storedName);
   //如果有已经保存在浏览器中的名为'name'的变量，直接用它设为标题（刷新页面不会变null）
   }

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
//点击按钮将直接调用setUserName完成 '' 弹出对话框  输入名字修改标题''  这一功能