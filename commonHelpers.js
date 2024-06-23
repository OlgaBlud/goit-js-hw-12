import{a as M,S as b,i as v}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function m(e,r){const s="https://pixabay.com/api/",n={key:"44324365-be3070df1c049607fe38536c0",q:e,per_page:15,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await M.get(s,{params:n});return console.log(t),t}catch(t){console.error("Error fetching photos:",t)}}function h(e){return e.map(P).join("")}function P(e){return`<li class="gallery-item">
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
</li>`}const S="/goit-js-hw-12/assets/close-06de2d57.svg",o={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},g=new b(".gallery a",{captionsData:"alt",captionDelay:350});let c="",l=1,f=1;const B=15;o.searchForm.addEventListener("submit",E);async function E(e){if(e.preventDefault(),c=e.target.elements.searchField.value.trim(),l=1,c===""){o.gallery.innerHTML="",d("You forgot enter data for search","#ffa000");return}p(o.loader),i(o.loadMoreBtn);try{const{totalHits:r,hits:s}=await m(c,l);s.length===0&&(o.gallery.innerHTML="",d("Sorry, there are no images matching your search query. Please try again!","#EF4040")),f=Math.ceil(r/B);const n=h(s);o.gallery.innerHTML=n,g.refresh(),L()}catch(r){w(r)}y(),i(o.loader)}o.loadMoreBtn.addEventListener("click",q);async function q(){i(o.loadMoreBtn),p(o.loader),l++;try{const{hits:e}=await m(c,l),r=h(e);o.gallery.insertAdjacentHTML("beforeend",r),g.refresh(),L()}catch(e){w(e)}y(),i(o.loader)}function y(){l>=f?i(o.loadMoreBtn):p(o.loadMoreBtn)}function L(){f===l&&(d("We're sorry, but you've reached the end of search results.","#ffa000"),o.searchForm.reset())}function i(e){e.classList.add("visually-hidden")}function p(e){e.classList.remove("visually-hidden")}function w(e){console.log(e),d("An error occurred while fetching photos. Please try again later.","#EF4040")}function d(e,r){v.show({message:e,position:"topRight",backgroundColor:r,iconUrl:S,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}
//# sourceMappingURL=commonHelpers.js.map
