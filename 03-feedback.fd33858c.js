!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("eaxEB"),l=document.querySelector(".feedback-form"),i=l.querySelector('input[name="email"]'),u=l.querySelector('textarea[name="message"]'),d="feedback-form-state",f=e(o)((function(){var e={email:i.value,message:u.value};localStorage.setItem(d,JSON.stringify(e))}),500);l.addEventListener("input",f),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(d);if(e){var t=JSON.parse(e);i.value=t.email,u.value=t.message}})),l.addEventListener("submit",(function(e){e.preventDefault();var t={email:i.value,message:u.value};console.log("Форма отправлена:",t),localStorage.removeItem(d),i.value="",u.value=""}))}();
//# sourceMappingURL=03-feedback.fd33858c.js.map