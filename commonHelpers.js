import{a as b,S as M,i as v}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function p(e,o){const s="https://pixabay.com/api/",i={key:"44324365-be3070df1c049607fe38536c0",q:e,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await b.get(s,{params:i});return t}catch(t){console.error("Error fetching photos:",t)}}function g(e){return e.map(B).join("")}function B(e){return`<li class="gallery-item">
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
</li>`}const P="/goit-js-hw-12/assets/close-06de2d57.svg",r={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},y=new M(".gallery a",{captionsData:"alt",captionDelay:350});let c="",n=1,d=0;const S=15;r.searchForm.addEventListener("submit",E);r.loadMoreBtn.addEventListener("click",q);async function E(e){if(e.preventDefault(),l(r.loadMoreBtn),I(),c=e.target.elements.searchField.value.trim(),n=1,d=0,c===""){u("You forgot enter data for search","#ffa000");return}m(r.loader);try{const{totalHits:o,hits:s}=await p(c,n);x(o,s)}catch(o){L(o)}finally{h(),l(r.loader)}}async function q(){l(r.loadMoreBtn),m(r.loader),n++;try{const{hits:e}=await p(c,n),o=g(e);w(o),y.refresh(),F()}catch(e){L(e)}finally{h(),l(r.loader)}}function h(){if(d!==0){if(d!==n){m(r.loadMoreBtn);return}else u("We're sorry, but you've reached the end of search results.","#ffa000"),l(r.loadMoreBtn);r.searchForm.reset()}}function l(e){e.classList.add("visually-hidden")}function m(e){e.classList.remove("visually-hidden")}function L(e){console.log(e),u("An error occurred while fetching photos. Please try again later.","#EF4040")}function u(e,o){v.show({message:e,position:"topRight",backgroundColor:o,iconUrl:P,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function F(){const s=r.gallery.children[0].getBoundingClientRect().height*2;scrollBy({top:s,behavior:"smooth"})}function x(e,o){if(e===0){u("Sorry, there are no images matching your search query. Please try again!","#EF4040"),l(r.loader),l(r.loadMoreBtn),r.searchForm.reset();return}d=Math.ceil(e/S);const s=g(o);w(s),y.refresh(),h()}function I(){r.gallery.innerHTML=""}function w(e){r.gallery.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map
