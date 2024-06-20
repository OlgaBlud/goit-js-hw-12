import{S as u,i as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function m(e){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44324365-be3070df1c049607fe38536c0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>console.log("Error fetching photos:",r))}function f(e){return e.map(p).join("")}function p(e){return`<li class="gallery-item">
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
</li>`}const g="/goit-js-hw-12/assets/close-06de2d57.svg",d=document.querySelector(".search-form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:350});d.addEventListener("submit",L);function L(e){e.preventDefault();const s=e.target.elements.searchField.value.trim();if(s===""){l.innerHTML="",c("You forgot enter data for search","#ffa000");return}n.classList.remove("visually-hidden"),m(s).then(a=>{if(a.hits.length===0)l.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!","#EF4040");else{const r=f(a.hits);l.innerHTML=r,y.refresh()}n.classList.add("visually-hidden")}).catch(a=>{c("An error occurred while fetching photos. Please try again later.","#EF4040"),n.classList.add("visually-hidden")}),d.reset()}function c(e,s){h.show({message:e,position:"topRight",backgroundColor:s,iconUrl:g,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}
//# sourceMappingURL=commonHelpers.js.map
