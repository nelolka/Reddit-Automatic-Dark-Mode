// ==UserScript==
// @name         Reddit Automatic Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Switches Reddit dark mode on and off automatically according to the system theme
// @author       Ed Qweqwe
// @match        *://*.reddit.com/*
// @icon         https://www.redditstatic.com/shreddit/assets/favicon/64x64.png
// @updateURL    https://raw.githubusercontent.com/nelolka/Reddit-Automatic-Dark-Mode/refs/heads/main/reddit_auto_dark_mode.user.js
// @downloadURL  https://raw.githubusercontent.com/nelolka/Reddit-Automatic-Dark-Mode/refs/heads/main/reddit_auto_dark_mode.user.js
// @homepageURL  https://github.com/nelolka/Reddit-Automatic-Dark-Mode/
// @supportURL   https://github.com/nelolka/Reddit-Automatic-Dark-Mode/issues/
// @source       https://github.com/nelolka/Reddit-Automatic-Dark-Mode/
// @run-at       document-start
// ==/UserScript==

(function() {
    function applyTheme(e) {
        document.documentElement.classList.toggle('theme-dark', e.matches);
        document.documentElement.classList.toggle('theme-light', !e.matches);
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(mq);

    mq.addEventListener("change", applyTheme);
})();
