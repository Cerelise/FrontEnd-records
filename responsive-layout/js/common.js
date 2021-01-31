/*
 * @Author       : Cerelise
 * @Date         : 2020-08-21 11:54:43
 * @LastEditors  : Cerelise
 * @LastEditTime : 2020-08-22 08:25:15
 * @FilePath     : \web_deepLearn\responsive layout\js\common.js
 */
// 立即执行函数
(function (doc) {
  var oMenuBtn = doc.querySelector(".header .fa-bars"),
    oNav = doc.querySelector(".header .header-nav");

  var init = function () {
    setFontSize();
    bindEvent();
  };

  function bindEvent() {
    // 添加false防止冒泡
    window.addEventListener("resize", setFontSize, false);
    oMenuBtn.addEventListener("click", showNav, false);
  }

  function setFontSize() {
    var cWidth = doc.documentElement.clientWidth;
    if (cWidth <= 414) {
      doc.documentElement.style.fontSize = cWidth / 37.5 + "px";
    } else {
      const fontSize = doc.documentElement.style.fontSize;

      if (fontSize !== "50%") {
        doc.documentElement.style.fontSize = "50%";
      }
    }

    if (cWidth > 768) {
      oNav.style.display = "block";
    } else {
      oNav.style.display = "none";
    }
  }

  function showNav() {
    var isShow = oNav.style.display;

    if (isShow === "block") {
      oNav.style.display = "none";
    } else {
      oNav.style.display = "block";
    }
  }

  init();
})(document);
