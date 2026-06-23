(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const be="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.25%206.125H10.2031L8.375%200.5L6.54688%206.125H0.5L5.42188%209.5L3.52344%2015.125L8.375%2011.6094L13.2266%2015.125L11.3281%209.5L16.25%206.125Z'%20stroke='url(%23paint0_linear_148_6995)'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6995'%20x1='2.42377'%20y1='1.54501'%20x2='12.853'%20y2='15.5249'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Le="data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.88L6.02%2011.9C2.38%208.68%200%206.51%200%203.85C0%201.68%201.68%200%203.85%200C5.04%200%206.23%200.56%207%201.47C7.77%200.56%208.96%200%2010.15%200C12.32%200%2014%201.68%2014%203.85C14%206.51%2011.62%208.68%207.98%2011.9L7%2012.88Z'%20fill='%23F87719'/%3e%3c/svg%3e",_e="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2876%2015.7505C13.1692%2015.751%2013.0537%2015.7141%2012.9575%2015.6451L8.43602%2012.3671L3.91458%2015.6451C3.81798%2015.7151%203.7016%2015.7527%203.58227%2015.7522C3.46294%2015.7518%203.34684%2015.7134%203.25076%2015.6427C3.15467%2015.5719%203.08358%2015.4724%203.04776%2015.3586C3.01194%2015.2447%203.01324%2015.1225%203.05149%2015.0094L4.81493%209.78628L0.244616%206.6521C0.14562%206.58429%200.0709031%206.48659%200.0313829%206.37329C-0.00813729%206.25999%20-0.01039%206.13702%200.024954%206.02235C0.060298%205.90768%200.131386%205.80732%200.227832%205.73592C0.324278%205.66453%200.441028%205.62585%200.561022%205.62554H6.19938L7.90094%200.389013C7.9376%200.275959%208.00912%200.177419%208.10525%200.107532C8.20138%200.0376441%208.31717%200%208.43602%200C8.55487%200%208.67067%200.0376441%208.7668%200.107532C8.86292%200.177419%208.93445%200.275959%208.9711%200.389013L10.6727%205.6273H16.311C16.4312%205.62724%2016.5482%205.66565%2016.6449%205.7369C16.7416%205.80816%2016.813%205.90851%2016.8486%206.02327C16.8842%206.13803%2016.882%206.26116%2016.8426%206.37464C16.8031%206.48811%2016.7283%206.58596%2016.6292%206.65386L12.0571%209.78628L13.8195%2015.008C13.8481%2015.0926%2013.8561%2015.1827%2013.8429%2015.271C13.8298%2015.3592%2013.7958%2015.4431%2013.7438%2015.5156C13.6919%2015.5882%2013.6234%2015.6473%2013.5441%2015.6881C13.4647%2015.729%2013.3768%2015.7504%2013.2876%2015.7505Z'%20fill='url(%23paint0_linear_148_6990)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6990'%20x1='2.06104'%20y1='1.12555'%20x2='13.311'%20y2='16.1255'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",we="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%207.3125H10.8281L9%201.6875L7.17188%207.3125H1.125L6.04688%2010.6875L4.14844%2016.3125L9%2012.7969L13.8516%2016.3125L11.9531%2010.6875L16.875%207.3125Z'%20stroke='url(%23paint0_linear_148_6991)'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%201.6875V12.7969L4.14844%2016.3125L6.04688%2010.6875L1.125%207.3125H7.17188L9%201.6875Z'%20fill='url(%23paint1_linear_148_6991)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6991'%20x1='3.04877'%20y1='2.73251'%20x2='13.478'%20y2='16.7124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_148_6991'%20x1='2.08688'%20y1='2.73251'%20x2='12.1506'%20y2='9.47748'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Me="/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",Ee="/goit-js-project/assets/logo-PQe6D84w.svg",ke="/goit-js-project/assets/trailer-not-found-ChebzOnG.jpg";function K(e){return new URL(Object.assign({"../img/empty.svg":be,"../img/favorite.svg":Le,"../img/full.svg":_e,"../img/half.svg":we,"../img/library-hero-fixed.svg":Me,"../img/logo.svg":Ee,"../img/trailer-not-found.jpg":ke})[`../img/${e}`],import.meta.url).href}function re(e,t="star-icon"){const r=Math.round((e||0)/2*2)/2,n=5,i=Math.floor(r),s=r-i>=.5?1:0,c=n-i-s;let l="";for(let d=0;d<i;d++)l+=`<img src="${K("full.svg")}" alt="full star" class="${t}" />`;s>0&&(l+=`<img src="${K("half.svg")}" alt="half star" class="${t}" />`);for(let d=0;d<c;d++)l+=`<img src="${K("empty.svg")}" alt="empty star" class="${t}" />`;return l}const L="c488ba78584000b673e8c43a91229884",_="https://api.themoviedb.org/3",$e="https://image.tmdb.org/t/p";let U=null;async function H(e,t="TMDB API error"){const r=await fetch(e);if(!r.ok)throw new Error(`${t}: ${r.status}`);return r.json()}async function Se(e="day"){const t=`${_}/trending/movie/${e}?api_key=${L}`;return H(t,"TMDB trending error")}async function De(e=1){const t=`${_}/trending/movie/day?api_key=${L}&page=${e}`;return H(t,"TMDB trending movies error")}async function Pe(e,t=1,r=""){let n=`${_}/search/movie?api_key=${L}&query=${encodeURIComponent(e)}&page=${t}`;return r&&(n+=`&primary_release_year=${encodeURIComponent(r)}`),H(n,"TMDB search error")}async function We(e=1){const t=`${_}/movie/upcoming?api_key=${L}&page=${e}`;return H(t,"TMDB upcoming error")}async function ze(){if(U)return U;const e=`${_}/genre/movie/list?api_key=${L}`;return U=(await H(e,"TMDB genres error")).genres.reduce((r,n)=>(r[n.id]=n.name,r),{}),U}async function xe(e=[]){const t=await ze();return e.map(r=>t[r]).filter(Boolean)}function Ye(e,t,r){const n=document.getElementById("tui-pagination-container");if(!n)return;n.innerHTML="";const i=document.createElement("button");i.classList.add("tui-page-btn","tui-prev"),e===1&&(i.disabled=!0),i.addEventListener("click",()=>{e>1&&r(e-1)}),n.appendChild(i),Ve(e,t).forEach(l=>{if(l==="..."){const V=document.createElement("span");V.classList.add("pagination-dots"),V.textContent="...",n.appendChild(V);return}const d=document.createElement("button");d.classList.add("tui-page-btn"),l===e&&d.classList.add("tui-is-selected"),d.textContent=String(l).padStart(2,"0"),d.addEventListener("click",()=>{r(l)}),n.appendChild(d)});const c=document.createElement("button");c.classList.add("tui-page-btn","tui-next"),e===t&&(c.disabled=!0),c.addEventListener("click",()=>{e<t&&r(e+1)}),n.appendChild(c)}function Ve(e,t){return t<=5?Array.from({length:t},(r,n)=>n+1):e<=5?[1,2,3,4,5,"...",20]:e>=t-2?[1,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t]}const Ke={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",53:"Thriller",10752:"War",37:"Western"},u=document.getElementById("movieGrid"),ae=document.getElementById("tui-pagination-container"),se=document.querySelector(".search-bar"),ce=document.getElementById("search-film"),Z=document.getElementById("search-query"),J=document.querySelector(".search-bar-year-value");function Ze(e){return!e||e.length===0?"Unknown":e.slice(0,2).map(t=>Ke[t]||"Film").join(", ")}function Je(e){return e?`https://image.tmdb.org/t/p/w500${e}`:"./src/img/no-poster.png"}function Ce(){ae&&(ae.innerHTML="")}function Xe(){u&&(u.className="cat-movie-grid cat-movie-grid--empty",u.innerHTML=`
    <li class="cat-empty-message">
      <h2>OOPS...</h2>
      <p>We are very sorry!</p>
      <p>We don’t have any results matching your search.</p>
    </li>
  `,Ce())}function Qe(e=[]){if(u){if(u.className="cat-movie-grid",e.length===0){Xe();return}u.innerHTML=e.map(t=>{const r=t.release_date?t.release_date.slice(0,4):"N/A",n=re(t.vote_average,"cat-movie-star"),i=Ze(t.genre_ids),s=Je(t.poster_path);return`
        <li
          class="cat-movie-card"
          data-movie-id="${t.id}"
          role="button"
          tabindex="0"
        >
          <img
            class="cat-movie-poster"
            src="${s}"
            alt="${t.title||"Movie poster"}"
            loading="lazy"
          />
          <div class="cat-movie-info">
            <h3 class="cat-movie-title">${t.title||"Untitled"}</h3>
            <p class="cat-movie-meta">${i} | ${r}</p>
            <div class="cat-movie-rating">${n}</div>
          </div>
        </li>
      `}).join("")}}async function P(e=1,t=null,r=""){try{let n;t?n=await Pe(t,e,r):n=await De(e);const i=n.results||[];if(Qe(i),i.length===0)return;const s=Math.min(n.total_pages,500);Ye(e,s,c=>{P(c,t,r),window.scrollTo({top:0,behavior:"smooth"})})}catch(n){console.error("Catalog loading error:",n),u&&(u.className="cat-movie-grid cat-movie-grid--empty",u.innerHTML=`
        <li class="cat-empty-message">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>Something went wrong. Please try again later.</p>
        </li>
      `),Ce()}}function et(){u&&P(1)}se&&ce&&se.addEventListener("submit",e=>{e.preventDefault();const t=ce.value.trim()||(Z==null?void 0:Z.value.trim())||"",r=J==null?void 0:J.textContent.trim(),n=r&&r!=="Year"?r:"";if(!t){P(1);return}P(1,t,n)});u&&u.addEventListener("keydown",e=>{const t=e.target.closest("[data-movie-id]");t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),t.click())});et();const ne="my-library",T=document.querySelector("[data-movie-modal]"),k=document.querySelector("[data-movie-modal-overlay]"),$=document.querySelector("[data-movie-modal-close]"),A=document.querySelector("[data-movie-modal-content]"),tt="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster";function j(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function le(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(1):"0.0"}function ie(){try{const e=JSON.parse(localStorage.getItem(ne));return Array.isArray(e)?e:[]}catch{return[]}}function de(e){try{return localStorage.setItem(ne,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("library:updated")),!0}catch(t){return console.error("Library could not be saved",t),!1}}function rt(){return ie()}function nt(e){return ie().some(t=>Number(t.id)===Number(e))}function it(e){return{id:e.id,title:e.title||e.name||e.original_title||"Untitled",original_title:e.original_title||e.title||"Untitled",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",release_date:e.release_date||"",vote_average:e.vote_average||0,vote_count:e.vote_count||0,popularity:e.popularity||0,overview:e.overview||"",genres:Te(e.genres)}}function Te(e){return Array.isArray(e)?[...new Set(e.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean))]:[]}function ot(e){const t=it(e),r=ie();return r.some(i=>Number(i.id)===Number(t.id))?!de(r.filter(s=>Number(s.id)!==Number(t.id))):de([...r,t])}async function at(e){const t=await fetch(`${_}/movie/${e}?api_key=${L}`);if(!t.ok)throw new Error("Movie details could not be loaded");return t.json()}function st(e){return e.poster_path?`${$e}/w500${e.poster_path}`:tt}function ct(e){const t=Te(e.genres);return t.length===0?"Unknown":t.join(", ")}function lt(e){var r;const t=nt(e.id);A.innerHTML=`
    <img
      class="movie-modal__poster"
      src="${st(e)}"
      alt="${j(e.title||"Movie poster")}"
    />

    <div class="movie-modal__info">
      <h2 class="movie-modal__title" id="movie-modal-title">
        ${j(e.title||e.original_title||"Untitled")}
      </h2>

      <dl class="movie-modal__stats">
        <div>
          <dt>Vote / Votes</dt>
          <dd>
            <span class="movie-modal__rating">${le(e.vote_average)}</span>
            / ${Number(e.vote_count||0)}
          </dd>
        </div>
        <div>
          <dt>Popularity</dt>
          <dd>${le(e.popularity)}</dd>
        </div>
        <div>
          <dt>Genre</dt>
          <dd>${j(ct(e))}</dd>
        </div>
      </dl>

      <h3 class="movie-modal__subtitle">About</h3>
      <p class="movie-modal__overview">
        ${j(e.overview||"No description available.")}
      </p>

      <button class="movie-modal__library-button" type="button" data-library-toggle>
        ${t?"Remove from My Library":"Add to My Library"}
      </button>
    </div>
  `,(r=A.querySelector("[data-library-toggle]"))==null||r.addEventListener("click",n=>{const i=ot(e);n.currentTarget.textContent=i?"Remove from My Library":"Add to My Library"})}function dt(){A.innerHTML=`
    <div class="movie-modal__message">
      <h2 id="movie-modal-title">OOPS...</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  `}function Ae(e){e.key==="Escape"&&q()}function ut(){document.addEventListener("keydown",Ae),k==null||k.addEventListener("click",q),$==null||$.addEventListener("click",q)}function mt(){document.removeEventListener("keydown",Ae),k==null||k.removeEventListener("click",q),$==null||$.removeEventListener("click",q)}function ft(){T&&(T.classList.remove("is-hidden"),document.body.classList.add("modal-open"),ut())}function q(){T&&(T.classList.add("is-hidden"),document.body.classList.remove("modal-open"),mt())}async function oe(e){if(!(!T||!A||!e)){ft(),A.innerHTML='<p class="movie-modal__loading">Loading...</p>';try{const t=await at(e);lt(t)}catch(t){console.error(t),dt()}}}function pt(e){const t=e.target.closest("[data-movie-id]");t&&oe(t.dataset.movieId)}document.addEventListener("click",pt);const W=9,gt="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster",ht=new URL("/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",import.meta.url).href,yt=`url("${ht}")`;let p=[],G=[],m="all",I=W;const o={hero:document.querySelector(".js-library-hero"),heroContent:document.querySelector(".js-library-hero-content"),list:document.querySelector(".js-library-list"),empty:document.querySelector(".js-library-empty"),loadMore:document.querySelector(".js-library-load-more"),filter:document.querySelector(".library-filter"),filterButton:document.querySelector(".js-library-filter-button")||document.querySelector(".library-filter__button"),filterMenu:document.querySelector(".js-library-filter-menu")||document.querySelector(".library-filter__menu")};function E(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vt(e){return e.poster_path?`${$e}/w500${e.poster_path}`:gt}function bt(e){return e.release_date?e.release_date.slice(0,4):"Unknown"}function Y(e){return Array.isArray(e.genres)?e.genres.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean):[]}function Lt(e){const t=Y(e);return t.length?t.join(", "):"Genre unknown"}function _t(e){const t=Number(e.vote_average),r=Number.isFinite(t)?t:0;return Math.min(100,Math.max(0,r*10))}function wt(){!o.hero||!o.heroContent||(o.hero.style.backgroundImage=yt,o.hero.style.backgroundPosition="center",o.hero.style.backgroundSize="cover",o.heroContent.innerHTML=`
    <h1 class="library-hero__title">Create Your Dream Cinema</h1>
    <p class="library-hero__text">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films. This guide helps you bring the cinema experience into
      your own home with cozy seating, dim lighting, and movie theater snacks.
    </p>
  `)}function Mt(){const e=new Set;return p.forEach(t=>{Y(t).forEach(r=>e.add(r))}),[...e].sort((t,r)=>t.localeCompare(r))}function Et(){var e,t;return o.filterMenu?((e=o.filterButton)==null?void 0:e.getAttribute("aria-expanded"))==="true"||((t=o.filter)==null?void 0:t.classList.contains("is-open")):!1}function F(e){var t;!o.filterButton||!o.filterMenu||(o.filterButton.setAttribute("aria-expanded",String(e)),o.filterMenu.hidden=!e,o.filterMenu.style.display=e?"block":"none",(t=o.filter)==null||t.classList.toggle("is-open",e))}function qe(){var r;if(!o.filterButton||!o.filterMenu)return;const e=Mt();o.filterButton.textContent=m==="all"?"Genre":m,o.filterButton.disabled=p.length===0,o.filterButton.setAttribute("aria-expanded","false"),o.filterMenu.hidden=!0,o.filterMenu.style.display="none",(r=o.filter)==null||r.classList.remove("is-open"),o.filter&&(o.filter.hidden=p.length===0);const t=e.map(n=>`
        <li>
          <button
            class="${m===n?"is-selected":""}"
            type="button"
            data-genre="${E(n)}"
          >
            ${E(n)}
          </button>
        </li>
      `).join("");o.filterMenu.innerHTML=`
    <li>
      <button
        class="${m==="all"?"is-selected":""}"
        type="button"
        data-genre="all"
      >
        All genres
      </button>
    </li>
    ${t}
  `}function Ie(){G=m==="all"?[...p]:p.filter(e=>Y(e).includes(m))}function kt(e){const t=e.title||e.original_title||"Untitled",r=Number(e.vote_average||0).toFixed(1);return`
    <li class="movie-card" data-movie-id="${e.id}">
      <button class="movie-card__button" type="button" aria-label="Open ${E(t)} details">
        <img class="movie-card__poster" src="${vt(e)}" alt="${E(t)} poster" />

        <span class="movie-card__gradient"></span>

        <span class="movie-card__info">
          <span class="movie-card__title">${E(t)}</span>

          <span class="movie-card__footer">
            <span class="movie-card__meta">
              ${E(Lt(e))} | ${bt(e)}
            </span>

            <span
              class="movie-card__rating"
              style="--rating: ${_t(e)}%"
              aria-label="Rating ${r} out of 10"
            >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </span>
        </span>
      </button>
    </li>
  `}function Q(){if(!o.list||!o.empty||!o.loadMore)return;const e=G.slice(0,I);o.list.innerHTML=e.map(kt).join("");const t=p.length===0,r=p.length>0&&G.length===0;o.empty.hidden=!t&&!r,o.list.hidden=t||r,o.loadMore.hidden=t||r||I>=G.length}function ee(){p=rt(),m!=="all"&&!p.some(e=>Y(e).includes(m))&&(m="all"),I=W,Ie(),qe(),Q()}function $t(){var e,t,r;(e=o.loadMore)==null||e.addEventListener("click",()=>{I+=W,Q()}),(t=o.filterButton)==null||t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),!(!o.filterMenu||o.filterButton.disabled)&&F(!Et())}),(r=o.filterMenu)==null||r.addEventListener("click",n=>{n.stopPropagation();const i=n.target.closest("[data-genre]");i&&(n.preventDefault(),m=i.dataset.genre,I=W,F(!1),Ie(),qe(),Q())}),document.addEventListener("click",n=>{n.target.closest(".library-filter")||F(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&F(!1)}),window.addEventListener("library:updated",ee),window.addEventListener("storage",n=>{n.key===ne&&ee()})}function St(){!o.hero&&!o.list||(wt(),ee(),$t())}St();function xt(e){const t=e.querySelector(".search-bar-year-btn"),r=e.querySelector(".search-bar-year-list"),n=e.querySelector(".search-bar-year-value");!t||!r||(t.addEventListener("click",i=>{i.stopPropagation();const s=e.classList.toggle("is-open");t.setAttribute("aria-expanded",String(s))}),r.querySelectorAll(".search-bar-year-item").forEach(i=>{i.addEventListener("click",()=>{r.querySelectorAll(".search-bar-year-item").forEach(s=>{s.classList.remove("search-bar-year-item--selected"),s.removeAttribute("aria-selected")}),i.classList.add("search-bar-year-item--selected"),i.setAttribute("aria-selected","true"),n.textContent=i.dataset.value,e.classList.add("has-value"),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}))}document.querySelectorAll(".search-bar-year").forEach(xt);document.addEventListener("click",()=>{document.querySelectorAll(".search-bar-year.is-open").forEach(e=>{e.classList.remove("is-open"),e.querySelector(".search-bar-year-btn").setAttribute("aria-expanded","false")})});document.querySelectorAll('[data-field="film"] .search-bar-input').forEach(e=>{const t=e.closest(".search-bar-input-wrap");e.addEventListener("input",()=>{t.classList.toggle("has-value",e.value.length>0)})});document.querySelectorAll(".search-bar-clear").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".search-bar-input-wrap"),r=t.querySelector(".search-bar-input");r.value="",t.classList.remove("has-value")})});const Ct="https://image.tmdb.org/t/p",Be="my-library",a={section:document.querySelector(".upcoming"),status:document.querySelector(".upcoming__status"),wrapper:document.querySelector(".upcoming__wrapper"),image:document.querySelector(".movie-img"),title:document.querySelector(".movie-title"),date:document.querySelector(".upcoming-date"),vote:document.querySelector(".vote"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),overview:document.querySelector(".overview"),button:document.querySelector(".upcoming .btn")};let y=null;function He(){return JSON.parse(localStorage.getItem(Be))||[]}function ue(e){localStorage.setItem(Be,JSON.stringify(e))}function Ue(e){return He().some(t=>t.id===e)}function je(){!y||!a.button||(a.button.textContent=Ue(y.id)?"Remove from My Library":"Add to my Library")}function Tt(){if(!y)return;const e=He();if(Ue(y.id)){const r=e.filter(n=>n.id!==y.id);ue(r)}else ue([...e,y]);je()}function At(e){const t=new Date,r=t.getMonth(),n=t.getFullYear();return e.filter(i=>{if(!i.release_date)return!1;const s=new Date(i.release_date);return s.getMonth()===r&&s.getFullYear()===n})}function qt(e){return e[Math.floor(Math.random()*e.length)]}function me(e){!a.status||!a.wrapper||(a.status.textContent=e,a.status.classList.remove("is-hidden"),a.wrapper.classList.add("is-hidden"))}function It(){!a.status||!a.wrapper||(a.status.classList.add("is-hidden"),a.wrapper.classList.remove("is-hidden"))}function Bt(e){const t=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;return` ${t} / ${r} `}function O(e,t="w500"){return e?`${Ct}/${t}${e}`:"./src/img/no-poster.png"}async function Ht(e){const t=await xe(e.genre_ids);y={...e,genres:t},a.image&&(a.image.src=O(e.backdrop_path,"w500"),a.image.srcset=`
      ${O(e.backdrop_path,"w500")} 500w,
      ${O(e.backdrop_path,"w780")} 780w,
      ${O(e.backdrop_path,"w1280")} 1280w
    `,a.image.sizes="(max-width: 767px) 280px, (max-width: 1279px) 704px, 805px",a.image.alt=e.title||"movie backdrop",a.image.loading="eager",a.image.decoding="async",a.image.fetchPriority="high"),a.title&&(a.title.textContent=e.title||"Unknown title"),a.date&&(a.date.textContent=e.release_date||"Unknown"),a.vote&&(a.vote.innerHTML=Bt(e)),a.popularity&&(a.popularity.textContent=e.popularity?e.popularity.toFixed(1):"0.0"),a.genre&&(a.genre.textContent=t.length?t.join(", "):"Unknown"),a.overview&&(a.overview.textContent=e.overview||"No overview available."),je(),It()}async function Ut(){if(a.section)try{const t=(await We()).results||[],r=At(t);if(!r.length){me("No upcoming movie is available right now.");return}const n=qt(r);await Ht(n),a.button&&a.button.addEventListener("click",Tt)}catch(e){console.error("Upcoming error:",e),me("No upcoming movie is available right now.")}}document.addEventListener("DOMContentLoaded",Ut);let v=null,z=[],te="";function Fe(){return window.innerWidth<768?"mobile":"large"}function jt(e){return e?`https://image.tmdb.org/t/p/${window.innerWidth<768?"w342":"w500"}${e}`:""}function Ft(e){return`
    <div class="weekly-rating">
      ${re(e,"weekly-star")}
    </div>
  `}async function Ot(){if(v=document.querySelector("#weekly-movie"),!!v)try{z=(await Se("week")).results||[],await Oe(z)}catch(e){console.error("Weekly Trends Error:",e)}}async function Oe(e){te=Fe();const t=te==="mobile"?e.slice(0,1):e.slice(0,3),r=await Promise.all(t.map(async n=>{var l,d;const i=await xe(n.genre_ids||[]),s=i.length>0?i.slice(0,2).join(", "):"Unknown genre",c=((l=n.release_date)==null?void 0:l.slice(0,4))||((d=n.first_air_date)==null?void 0:d.slice(0,4))||"N/A";return`
        <article class="weekly-card" data-movie-id="${n.id}">
          <img
            class="weekly-image"
            src="${jt(n.poster_path)}"
            alt="${n.title||n.name||"Movie poster"}"
            loading="lazy"
            decoding="async"
          />

          <div class="weekly-info">
            <h3 class="weekly-name">
              ${n.title||n.name||"Untitled"}
            </h3>

            <div class="weekly-meta">
              <p class="weekly-text">
                ${s} | ${c}
              </p>

              ${Ft(n.vote_average)}
            </div>
          </div>
        </article>
      `}));v.innerHTML=r.join(""),Nt()}function Nt(){v.dataset.listenerAttached!=="true"&&(v.addEventListener("click",e=>{const t=e.target.closest("[data-movie-id]");t&&oe(t.dataset.movieId)}),v.dataset.listenerAttached="true")}window.addEventListener("resize",()=>{if(!v||z.length===0)return;Fe()!==te&&Oe(z)});const b=document.querySelector("[data-trailer-modal]"),S=document.querySelector("[data-trailer-overlay]"),x=document.querySelector("[data-trailer-close]"),f=document.querySelector("[data-trailer-frame]"),C=document.querySelector("[data-trailer-status]"),g=document.querySelector("[data-trailer-error]");let R=0;function Gt(e=[]){const t=e.filter(r=>r.site==="YouTube"&&/^[\w-]{6,20}$/.test(r.key||""));return t.find(r=>r.type==="Trailer"&&r.official)||t.find(r=>r.type==="Trailer")||t.find(r=>r.type==="Teaser")||t[0]}async function Rt(e){const t=await fetch(`${_}/movie/${e}/videos?api_key=${L}`);if(!t.ok)throw new Error("Trailer could not be loaded");const r=await t.json();return Gt(r==null?void 0:r.results)}function Ne(e){e.key==="Escape"&&B()}function Dt(){document.addEventListener("keydown",Ne),S==null||S.addEventListener("click",B),x==null||x.addEventListener("click",B)}function Pt(){document.removeEventListener("keydown",Ne),S==null||S.removeEventListener("click",B),x==null||x.removeEventListener("click",B)}function Wt(e){C&&(C.textContent=e,C.hidden=!1,g&&(g.hidden=!0))}function fe(){C&&(C.hidden=!0),g&&(g.hidden=!1)}function zt(){return!b||!f?!1:(b.classList.remove("is-hidden"),document.body.classList.add("modal-open"),f.hidden=!0,f.src="",g&&(g.hidden=!0),Wt("Loading trailer..."),Dt(),!0)}function B(){!b||!f||(R+=1,b.classList.add("is-hidden"),document.body.classList.remove("modal-open"),f.src="",f.hidden=!0,g&&(g.hidden=!0),Pt())}async function Yt(e){if(!e||!zt())return;const t=++R;try{const r=await Rt(e);if(t!==R||b!=null&&b.classList.contains("is-hidden"))return;if(!r){fe();return}C.hidden=!0,f.title=`${r.name||"Movie"} trailer`,f.src=`https://www.youtube-nocookie.com/embed/${r.key}?autoplay=1&rel=0`,f.hidden=!1}catch(r){if(t!==R)return;console.error(r),fe()}}const X=document.querySelector(".scroll-up");X&&(X.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{X.classList.toggle("is-visible",window.scrollY>300)},{passive:!0}));const pe=document.querySelector(".loader-overlay");function Vt(){pe&&pe.classList.add("is-hidden")}Vt();const w=document.getElementById("teamModalOverlay"),ge=document.getElementById("openTeamModal"),he=document.getElementById("closeTeamModal");if(w&&ge&&he){const e=()=>{w.classList.remove("hidden"),document.body.style.overflow="hidden"},t=()=>{w.classList.add("hidden"),document.body.style.overflow=""};ge.addEventListener("click",e),he.addEventListener("click",t),w.addEventListener("click",r=>{r.target===w&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!w.classList.contains("hidden")&&t()})}const ye="cinemania-color-mode";function Kt(){Zt(),Jt(),Xt()}function Zt(){const e=window.location.pathname;let t="home";e.includes("catalog")&&(t="catalog"),e.includes("library")&&(t="library"),document.querySelectorAll("[data-page]").forEach(n=>{n.classList.toggle("active",n.dataset.page===t)})}function Jt(){const e=document.querySelector("#menuToggle"),t=document.querySelector(".mobile-nav");!e||!t||(e.addEventListener("click",r=>{r.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("nav-open")}),document.addEventListener("click",r=>{const n=t.contains(r.target),i=e.contains(r.target);!n&&!i&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}))}function Xt(){const e=document.querySelector(".theme-toggle");if(!e)return;const r=localStorage.getItem(ye)==="light";document.body.classList.toggle("light-theme",r),e.classList.toggle("active",r),e.addEventListener("click",()=>{const n=!document.body.classList.contains("light-theme");document.body.classList.toggle("light-theme",n),e.classList.toggle("active",n),localStorage.setItem(ye,n?"light":"dark")})}const Qt=1279,ve=192,er="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";let h=null,N=null;window.addEventListener("resize",ir);async function tr(){if(document.getElementById("hero"))try{const t=await Se("day");if(!(t!=null&&t.results)){h=null,D();return}const r=t.results.filter(i=>i.backdrop_path);if(r.length===0){h=null,D();return}const n=Math.floor(Math.random()*r.length);h=r[n],Re(h)}catch(t){console.error("Hero error:",t),h=null,D()}}function M(e){return new URL(Object.assign({"../img/empty.svg":be,"../img/favorite.svg":Le,"../img/full.svg":_e,"../img/half.svg":we,"../img/library-hero-fixed.svg":Me,"../img/logo.svg":Ee,"../img/trailer-not-found.jpg":ke})[`../img/${e}`],import.meta.url).href}function rr(){return window.innerWidth<=Qt}function nr(e){return e?window.innerWidth<768?`https://image.tmdb.org/t/p/w780${e}`:`https://image.tmdb.org/t/p/w1280${e}`:""}function Ge(e){const t=(e==null?void 0:e.trim())||"No description";return!rr()||t.length<=ve?t:`${t.slice(0,ve).trimEnd()}...`}function ir(){N&&cancelAnimationFrame(N),N=requestAnimationFrame(()=>{if(N=null,h){Re(h);return}D()})}function Re(e){const t=document.getElementById("hero");if(!t)return;const r=nr(e.backdrop_path),n=e.title||e.name||"Movie";t.innerHTML=`
    <img
      class="hero-bg"
      src="${r}"
      alt="${n} background"
      fetchpriority="high"
      decoding="async"
      width="1280"
      height="660"
    />

    <div class="hero-overlay">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">${n}</h1>

          ${or(e.vote_average)}

          <p class="hero-overview">
            ${Ge(e.overview)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button" data-trailer-id="${e.id}">
              Watch trailer
            </button>

            <button class="btn btn-secondary" type="button" data-movie-id="${e.id}">
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  `,ar(e)}function D(){var l;const e=document.getElementById("hero");if(!e)return;const t=M("hero-mobile.jpg"),r=M("hero-mobile@2x.jpg"),n=M("hero-tablet.jpg"),i=M("hero-tablet@2x.jpg"),s=M("hero-desktop.jpg"),c=M("hero-desktop@2x.jpg");e.innerHTML=`
    <picture class="hero-bg-picture">
      <source media="(min-width: 1280px)" srcset="${s} 1x, ${c} 2x" />
      <source media="(min-width: 768px)" srcset="${n} 1x, ${i} 2x" />

      <img
        class="hero-bg"
        src="${t}"
        srcset="${t} 1x, ${r} 2x"
        alt="Cinema hero background"
        fetchpriority="high"
        decoding="async"
        width="1280"
        height="660"
      />
    </picture>

    <div class="hero-overlay">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Let's Make Your Own Cinema</h1>

          <p class="hero-overview">
            ${Ge(er)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  `,(l=e.querySelector(".btn-primary"))==null||l.addEventListener("click",()=>{window.location.href="./catalog.html"})}function or(e){return!e&&e!==0?"":`
    <div class="hero-rating" aria-label="Movie rating">
      ${re(e,"hero-rating-star")}
    </div>
  `}function ar(e){const t=document.getElementById("hero");if(!t||!(e!=null&&e.id))return;const r=t.querySelector("[data-trailer-id]"),n=t.querySelector("[data-movie-id]");r==null||r.addEventListener("click",i=>{i.preventDefault(),Yt(e.id)}),n==null||n.addEventListener("click",i=>{i.preventDefault(),oe(e.id)})}document.addEventListener("DOMContentLoaded",()=>{Kt(),tr(),Ot()});
