import{a as v,S as B,i as P}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function m(e,o){const s="https://pixabay.com/api/",i={key:"44324365-be3070df1c049607fe38536c0",q:e,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await v.get(s,{params:i});return t}catch(t){console.error("Error fetching photos:",t)}}function p(e){return e.map(S).join("")}function S(e){return`<li class="gallery-item">
  <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
  /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${e.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${e.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${e.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const E="/goit-js-hw-12/assets/close-06de2d57.svg",r={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},g=new B(".gallery a",{captionsData:"alt",captionDelay:350});let c="",n=1,f=1;const q=15;r.searchForm.addEventListener("submit",F);r.loadMoreBtn.addEventListener("click",x);async function F(e){if(e.preventDefault(),c=e.target.elements.searchField.value.trim(),n=1,c===""){M(),d("You forgot enter data for search","#ffa000"),l(r.loadMoreBtn);return}h(r.loader),l(r.loadMoreBtn);try{const{totalHits:o,hits:s}=await m(c,n);O(o,s)}catch(o){w(o)}finally{y(),l(r.loader)}}async function x(){l(r.loadMoreBtn),h(r.loader),n++;try{const{hits:e}=await m(c,n),o=p(e);b(o),g.refresh(),L(),I()}catch(e){w(e)}finally{y(),l(r.loader)}}function y(){n>=f?l(r.loadMoreBtn):h(r.loadMoreBtn)}function L(){f===n&&(d("We're sorry, but you've reached the end of search results.","#ffa000"),r.searchForm.reset())}function l(e){e.classList.add("visually-hidden")}function h(e){e.classList.remove("visually-hidden")}function w(e){console.log(e),d("An error occurred while fetching photos. Please try again later.","#EF4040")}function d(e,o){P.show({message:e,position:"topRight",backgroundColor:o,iconUrl:E,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function I(){const s=r.gallery.children[0].getBoundingClientRect().height*2;scrollBy({top:s,behavior:"smooth"})}function O(e,o){if(e===0){M(),d("Sorry, there are no images matching your search query. Please try again!","#EF4040"),l(r.loader),r.searchForm.reset();return}f=Math.ceil(e/q);const s=p(o);b(s),g.refresh(),L()}function M(){r.gallery.innerHTML=""}function b(e){r.gallery.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map
