"use strict";(function(){Repos().getRepos(),getCopyrightYear()})();function Repos(){function a(){b(),d().then(function(a){a.forEach(function(a){var b=e(a),c=document.createRange().createContextualFragment(b);f(c)}),c(),j+=1})}function b(){h.classList.add("loading"),h.disabled=!0}function c(){h.classList.remove("loading"),j*6>k||(h.disabled=!1)}function d(){return fetch("".concat("https://api.github.com/users/Trendyol","/repos?page=").concat(j,"&per_page=").concat(6,"&sort=upload&type=owner&access_token=").concat("c31b5663c5cbf361a3f68c7226a89d8ce63fae26")).then(function(a){return a.json()}).then(function(a){return a})}function e(a){var b=a.description,c=a.forks_count,d=a.html_url,e=a.language,f=a.name,g=a.stargazers_count;"C#"===e&&(e="C-Sharp");var h="\n      <a href=\"".concat(d,"\" class=\"open-source__card\">\n          <div class=\"open-source__card__info\">\n              <h3 class=\"open-source__card__title\">").concat(f,"</h3>\n              <p class=\"open-source__card__exp\">\n                  ").concat(b||"","\n              </p>\n              <div class=\"open-source__card__interactions\">\n                ").concat(e?"<span class=\"open-source__card__interaction\">\n                      <span class=\"open-source__language open-source__language--".concat(e,"\"></span>\n                      ").concat(e,"\n                  </span>"):"","\n                  <span class=\"open-source__card__interaction\">\n                      <img src=\"./assets/star.svg\" alt=\"starred\" />\n                      ").concat(g,"\n                  </span>\n                  <span class=\"open-source__card__interaction\">\n                      <img src=\"./assets/fork.svg\" alt=\"starred\" />\n                      ").concat(c,"\n                  </span>\n              </div>\n          </div>\n      </a>");return h}function f(a){g.appendChild(a)}var g=document.querySelector(".open-source__cards"),h=document.querySelector(".open-source__show-more");h.addEventListener("click",function b(c){a(c),j*i>k&&h.removeEventListener("click",b)});var i=6,j=1,k=function(){fetch("".concat("https://api.github.com/users/Trendyol","?access_token=").concat("c31b5663c5cbf361a3f68c7226a89d8ce63fae26")).then(function(a){return a.json()}).then(function(a){k=a.public_repos})}();return{getRepos:a}}function getCopyrightYear(){var a=document.querySelector(".footer__copyright"),b=new Date().getFullYear();a.textContent=a.textContent.replace("{{y\u0131l}}",b)}

//# sourceMappingURL=main.js.map