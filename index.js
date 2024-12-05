// ==UserScript==
// @name         关闭广告
// @namespace    http://tampermonkey.net/
// @version      2024-12-05
// @description  try to take over the world!
// @author       You
// @match        https://www.iyf.tv/play/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iyf.tv
// @grant        none
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个按钮并添加到页面
    const button = document.createElement('button');
    button.textContent = '移除广告';
    button.style.position = 'fixed';
    button.style.top = '20px'; // 调整位置
    button.style.right = '20px'; // 调整位置
    button.style.zIndex = '9999'; // 增加 z-index 值
    button.style.padding = '10px';
    button.style.backgroundColor = '#ff4757';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // 添加按钮点击事件
    button.addEventListener('click', () => {
        $("#main-player > div.publicbox.ng-star-inserted").remove();
        $("#main-player > vg-overlay-play > div > div > div").click();

    });

    // 将按钮添加到页面
    document.body.appendChild(button);

    setInterval(() => {
        const adElement = $("#main-player > div.publicbox.ng-star-inserted");
        if (adElement.length) {
            adElement.remove();
            $("#main-player > vg-overlay-play > div > div > div").click();
        }
        const targetElement = document.querySelector(".ps.pggf");

        if (targetElement) {
            // 如果目标元素存在，删除所有 class 为 "ps pggf" 的元素
            const elementsToRemove = document.querySelectorAll('.ps.pggf');
            elementsToRemove.forEach(element => element.remove());
        }
        //dabf d-block block-mt ng-star-inserted
        const targetElement2 = document.querySelector(".dabf.d-block.block-mt.ng-star-inserted");

        if (targetElement2) {
            // 如果目标元素存在，删除所有 class 为 "ps pggf" 的元素
            const elementsToRemove = document.querySelectorAll('.dabf.d-block.block-mt.ng-star-inserted');
            elementsToRemove.forEach(element => element.remove());
        }
        // 每隔1秒检查并删除元素
        //vg-vvk-p ng-star-inserted
        const targetElement3 = document.querySelector(".vg-vvk-p.ng-star-inserted");

        if (targetElement3) {
            // 如果目标元素存在，删除所有 class 为 "ps pggf" 的元素
            const elementsToRemove = document.querySelectorAll('.vg-vvk-p.ng-star-inserted');
            elementsToRemove.forEach(element => element.remove());
        }
    }, 1000); // 10000毫秒 = 10秒
})();
