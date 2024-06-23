import{a as M,S as b,i as v}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function m(e,o){const s="https://pixabay.com/api/",l={key:"44324365-be3070df1c049607fe38536c0",q:e,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await M.get(s,{params:l});return t}catch(t){console.error("Error fetching photos:",t)}}function p(e){return e.map(B).join("")}function B(e){return`<li class="gallery-item">
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
</li>`}const P="/goit-js-hw-12/assets/close-06de2d57.svg",r={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},g=new b(".gallery a",{captionsData:"alt",captionDelay:350});let c="",i=1,f=1;const S=15;r.searchForm.addEventListener("submit",E);async function E(e){if(e.preventDefault(),c=e.target.elements.searchField.value.trim(),i=1,c===""){r.gallery.innerHTML="",d("You forgot enter data for search","#ffa000");return}h(r.loader),n(r.loadMoreBtn);try{const{totalHits:o,hits:s}=await m(c,i);if(o===0){r.gallery.innerHTML="",d("Sorry, there are no images matching your search query. Please try again!","#EF4040"),n(r.loader);return}f=Math.ceil(o/S);const l=p(s);r.gallery.innerHTML=l,g.refresh(),L()}catch(o){w(o)}y(),n(r.loader)}r.loadMoreBtn.addEventListener("click",q);async function q(){n(r.loadMoreBtn),h(r.loader),i++;try{const{hits:e}=await m(c,i),o=p(e);r.gallery.insertAdjacentHTML("beforeend",o),g.refresh(),L(),H()}catch(e){w(e)}y(),n(r.loader)}function y(){i>=f?n(r.loadMoreBtn):h(r.loadMoreBtn)}function L(){f===i&&(d("We're sorry, but you've reached the end of search results.","#ffa000"),r.searchForm.reset())}function n(e){e.classList.add("visually-hidden")}function h(e){e.classList.remove("visually-hidden")}function w(e){console.log(e),d("An error occurred while fetching photos. Please try again later.","#EF4040")}function d(e,o){v.show({message:e,position:"topRight",backgroundColor:o,iconUrl:P,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function H(){const s=r.gallery.children[0].getBoundingClientRect().height*2;scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
