import{a as L,S as w,i as b}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function f(e,r){const s="https://pixabay.com/api/",l={key:"44324365-be3070df1c049607fe38536c0",q:e,per_page:15,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await L.get(s,{params:l});return console.log(t),t}catch(t){console.error("Error fetching photos:",t)}}function m(e){return e.map(M).join("")}function M(e){return`<li class="gallery-item">
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
</li>`}const v="/goit-js-hw-12/assets/close-06de2d57.svg",o={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},h=new w(".gallery a",{captionsData:"alt",captionDelay:350});let c="",i=1,g=1;const P=15;o.searchForm.addEventListener("submit",S);async function S(e){if(e.preventDefault(),c=e.target.elements.searchField.value.trim(),i=1,c===""){o.gallery.innerHTML="",n("You forgot enter data for search","#ffa000");return}p(o.loader),d(o.loadMoreBtn);try{const{totalHits:r,hits:s}=await f(c,i);s.length===0&&(o.gallery.innerHTML="",n("Sorry, there are no images matching your search query. Please try again!","#EF4040")),g=Math.ceil(r/P);const l=m(s);o.gallery.innerHTML=l,h.refresh()}catch(r){console.log(r),n("An error occurred while fetching photos. Please try again later.","#EF4040")}y(),d(o.loader)}o.loadMoreBtn.addEventListener("click",E);async function E(){p(o.loader),i++;try{const{hits:e}=await f(c,i),r=m(e);o.gallery.insertAdjacentHTML("beforeend",r),h.refresh()}catch(e){console.log(e),n("An error occurred while fetching photos. Please try again later.","#EF4040")}d(o.loader),y()}function n(e,r){b.show({message:e,position:"topRight",backgroundColor:r,iconUrl:v,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function y(){i>=g?(d(o.loadMoreBtn),n("No more avaliable pictures","#ffa000"),o.searchForm.reset()):p(o.loadMoreBtn)}function d(e){e.classList.add("visually-hidden")}function p(e){e.classList.remove("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
