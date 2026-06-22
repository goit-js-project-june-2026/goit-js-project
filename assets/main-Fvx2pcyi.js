(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const ye="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.25%206.125H10.2031L8.375%200.5L6.54688%206.125H0.5L5.42188%209.5L3.52344%2015.125L8.375%2011.6094L13.2266%2015.125L11.3281%209.5L16.25%206.125Z'%20stroke='url(%23paint0_linear_148_6995)'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6995'%20x1='2.42377'%20y1='1.54501'%20x2='12.853'%20y2='15.5249'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",he="data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.88L6.02%2011.9C2.38%208.68%200%206.51%200%203.85C0%201.68%201.68%200%203.85%200C5.04%200%206.23%200.56%207%201.47C7.77%200.56%208.96%200%2010.15%200C12.32%200%2014%201.68%2014%203.85C14%206.51%2011.62%208.68%207.98%2011.9L7%2012.88Z'%20fill='%23F87719'/%3e%3c/svg%3e",ve="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2876%2015.7505C13.1692%2015.751%2013.0537%2015.7141%2012.9575%2015.6451L8.43602%2012.3671L3.91458%2015.6451C3.81798%2015.7151%203.7016%2015.7527%203.58227%2015.7522C3.46294%2015.7518%203.34684%2015.7134%203.25076%2015.6427C3.15467%2015.5719%203.08358%2015.4724%203.04776%2015.3586C3.01194%2015.2447%203.01324%2015.1225%203.05149%2015.0094L4.81493%209.78628L0.244616%206.6521C0.14562%206.58429%200.0709031%206.48659%200.0313829%206.37329C-0.00813729%206.25999%20-0.01039%206.13702%200.024954%206.02235C0.060298%205.90768%200.131386%205.80732%200.227832%205.73592C0.324278%205.66453%200.441028%205.62585%200.561022%205.62554H6.19938L7.90094%200.389013C7.9376%200.275959%208.00912%200.177419%208.10525%200.107532C8.20138%200.0376441%208.31717%200%208.43602%200C8.55487%200%208.67067%200.0376441%208.7668%200.107532C8.86292%200.177419%208.93445%200.275959%208.9711%200.389013L10.6727%205.6273H16.311C16.4312%205.62724%2016.5482%205.66565%2016.6449%205.7369C16.7416%205.80816%2016.813%205.90851%2016.8486%206.02327C16.8842%206.13803%2016.882%206.26116%2016.8426%206.37464C16.8031%206.48811%2016.7283%206.58596%2016.6292%206.65386L12.0571%209.78628L13.8195%2015.008C13.8481%2015.0926%2013.8561%2015.1827%2013.8429%2015.271C13.8298%2015.3592%2013.7958%2015.4431%2013.7438%2015.5156C13.6919%2015.5882%2013.6234%2015.6473%2013.5441%2015.6881C13.4647%2015.729%2013.3768%2015.7504%2013.2876%2015.7505Z'%20fill='url(%23paint0_linear_148_6990)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6990'%20x1='2.06104'%20y1='1.12555'%20x2='13.311'%20y2='16.1255'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",be="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%207.3125H10.8281L9%201.6875L7.17188%207.3125H1.125L6.04688%2010.6875L4.14844%2016.3125L9%2012.7969L13.8516%2016.3125L11.9531%2010.6875L16.875%207.3125Z'%20stroke='url(%23paint0_linear_148_6991)'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%201.6875V12.7969L4.14844%2016.3125L6.04688%2010.6875L1.125%207.3125H7.17188L9%201.6875Z'%20fill='url(%23paint1_linear_148_6991)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6991'%20x1='3.04877'%20y1='2.73251'%20x2='13.478'%20y2='16.7124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_148_6991'%20x1='2.08688'%20y1='2.73251'%20x2='12.1506'%20y2='9.47748'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Le="/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",_e="/goit-js-project/assets/logo-PQe6D84w.svg",we="/goit-js-project/assets/trailer-not-found-BstZulyb.png";function V(e){return new URL(Object.assign({"../img/empty.svg":ye,"../img/favorite.svg":he,"../img/full.svg":ve,"../img/half.svg":be,"../img/library-hero-fixed.svg":Le,"../img/logo.svg":_e,"../img/trailer-not-found.png":we})[`../img/${e}`],import.meta.url).href}function ee(e,t="star-icon"){const r=Math.round((e||0)/2*2)/2,n=5,o=Math.floor(r),a=r-o>=.5?1:0,c=n-o-a;let l="";for(let d=0;d<o;d++)l+=`<img src="${V("full.svg")}" alt="full star" class="${t}" />`;a>0&&(l+=`<img src="${V("half.svg")}" alt="half star" class="${t}" />`);for(let d=0;d<c;d++)l+=`<img src="${V("empty.svg")}" alt="empty star" class="${t}" />`;return l}const L="c488ba78584000b673e8c43a91229884",_="https://api.themoviedb.org/3",Me="https://image.tmdb.org/t/p";let U=null;async function I(e,t="TMDB API error"){const r=await fetch(e);if(!r.ok)throw new Error(`${t}: ${r.status}`);return r.json()}async function Ee(e="day"){const t=`${_}/trending/movie/${e}?api_key=${L}`;return I(t,"TMDB trending error")}async function Ne(e=1){const t=`${_}/trending/movie/day?api_key=${L}&page=${e}`;return I(t,"TMDB trending movies error")}async function Oe(e,t=1){const r=`${_}/search/movie?api_key=${L}&query=${encodeURIComponent(e)}&page=${t}`;return I(r,"TMDB search error")}async function Ge(e=1){const t=`${_}/movie/upcoming?api_key=${L}&page=${e}`;return I(t,"TMDB upcoming error")}async function Re(){if(U)return U;const e=`${_}/genre/movie/list?api_key=${L}`;return U=(await I(e,"TMDB genres error")).genres.reduce((r,n)=>(r[n.id]=n.name,r),{}),U}async function ke(e=[]){const t=await Re();return e.map(r=>t[r]).filter(Boolean)}function De(e,t,r){const n=document.getElementById("tui-pagination-container");if(!n)return;n.innerHTML="";const o=document.createElement("button");o.classList.add("tui-page-btn","tui-prev"),e===1&&(o.disabled=!0),o.addEventListener("click",()=>{e>1&&r(e-1)}),n.appendChild(o),Pe(e,t).forEach(l=>{if(l==="..."){const Y=document.createElement("span");Y.classList.add("pagination-dots"),Y.textContent="...",n.appendChild(Y);return}const d=document.createElement("button");d.classList.add("tui-page-btn"),l===e&&d.classList.add("tui-is-selected"),d.textContent=String(l).padStart(2,"0"),d.addEventListener("click",()=>{r(l)}),n.appendChild(d)});const c=document.createElement("button");c.classList.add("tui-page-btn","tui-next"),e===t&&(c.disabled=!0),c.addEventListener("click",()=>{e<t&&r(e+1)}),n.appendChild(c)}function Pe(e,t){return t<=5?Array.from({length:t},(r,n)=>n+1):e<=5?[1,2,3,4,5,"...",20]:e>=t-2?[1,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t]}const We={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",53:"Thriller",10752:"War",37:"Western"},y=document.getElementById("movieGrid"),oe=document.querySelector(".search-bar"),ie=document.getElementById("search-film"),Z=document.getElementById("search-query");function ze(e){return!e||e.length===0?"Unknown":e.slice(0,2).map(t=>We[t]||"Film").join(", ")}function Ye(e){return e?`https://image.tmdb.org/t/p/w500${e}`:""}function Ve(e=[]){if(y){if(y.className="cat-movie-grid",e.length===0){y.innerHTML=`
      <li class="cat-movie-empty">
        No movies found.
      </li>
    `;return}y.innerHTML=e.map(t=>{const r=t.release_date?t.release_date.slice(0,4):"N/A",n=ee(t.vote_average,"cat-movie-star"),o=ze(t.genre_ids),a=Ye(t.poster_path);return`
        <li class="cat-movie-card" data-movie-id="${t.id}">
          <img
            class="cat-movie-poster"
            src="${a}"
            alt="${t.title||"Movie poster"}"
            loading="lazy"
            decoding="async"
          >

          <div class="cat-movie-info">
            <h3 class="cat-movie-title">${t.title||"Untitled"}</h3>

            <div class="cat-movie-meta">
              <div class="cat-movie-text">
                <span class="cat-movie-genre">${o}</span>
                <span class="cat-movie-year"> | ${r}</span>
              </div>

              <div class="cat-movie-stars">${n}</div>
            </div>
          </div>
        </li>
      `}).join("")}}async function D(e=1,t=null){try{let r;t?r=await Oe(t,e):r=await Ne(e),Ve(r.results);const n=Math.min(r.total_pages,500);De(e,n,o=>{D(o,t),window.scrollTo({top:0,behavior:"smooth"})})}catch(r){console.error("Catalog loading error:",r),y&&(y.innerHTML=`
        <li class="cat-movie-empty">
          Something went wrong. Please try again later.
        </li>
      `)}}function Ze(){y&&D(1)}oe&&ie&&oe.addEventListener("submit",e=>{e.preventDefault();const t=ie.value.trim()||(Z==null?void 0:Z.value.trim())||"";if(!t){D(1);return}D(1,t)});Ze();const te="my-library",T=document.querySelector("[data-movie-modal]"),k=document.querySelector("[data-movie-modal-overlay]"),$=document.querySelector("[data-movie-modal-close]"),A=document.querySelector("[data-movie-modal-content]"),Ke="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster";function F(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ae(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(1):"0.0"}function re(){try{const e=JSON.parse(localStorage.getItem(te));return Array.isArray(e)?e:[]}catch{return[]}}function se(e){try{return localStorage.setItem(te,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("library:updated")),!0}catch(t){return console.error("Library could not be saved",t),!1}}function Je(){return re()}function Xe(e){return re().some(t=>Number(t.id)===Number(e))}function Qe(e){return{id:e.id,title:e.title||e.name||e.original_title||"Untitled",original_title:e.original_title||e.title||"Untitled",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",release_date:e.release_date||"",vote_average:e.vote_average||0,vote_count:e.vote_count||0,popularity:e.popularity||0,overview:e.overview||"",genres:$e(e.genres)}}function $e(e){return Array.isArray(e)?[...new Set(e.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean))]:[]}function et(e){const t=Qe(e),r=re();return r.some(o=>Number(o.id)===Number(t.id))?!se(r.filter(a=>Number(a.id)!==Number(t.id))):se([...r,t])}async function tt(e){const t=await fetch(`${_}/movie/${e}?api_key=${L}`);if(!t.ok)throw new Error("Movie details could not be loaded");return t.json()}function rt(e){return e.poster_path?`${Me}/w500${e.poster_path}`:Ke}function nt(e){const t=$e(e.genres);return t.length===0?"Unknown":t.join(", ")}function ot(e){var r;const t=Xe(e.id);A.innerHTML=`
    <img
      class="movie-modal__poster"
      src="${rt(e)}"
      alt="${F(e.title||"Movie poster")}"
    />

    <div class="movie-modal__info">
      <h2 class="movie-modal__title" id="movie-modal-title">
        ${F(e.title||e.original_title||"Untitled")}
      </h2>

      <dl class="movie-modal__stats">
        <div>
          <dt>Vote / Votes</dt>
          <dd>
            <span class="movie-modal__rating">${ae(e.vote_average)}</span>
            / ${Number(e.vote_count||0)}
          </dd>
        </div>
        <div>
          <dt>Popularity</dt>
          <dd>${ae(e.popularity)}</dd>
        </div>
        <div>
          <dt>Genre</dt>
          <dd>${F(nt(e))}</dd>
        </div>
      </dl>

      <h3 class="movie-modal__subtitle">About</h3>
      <p class="movie-modal__overview">
        ${F(e.overview||"No description available.")}
      </p>

      <button class="movie-modal__library-button" type="button" data-library-toggle>
        ${t?"Remove from My Library":"Add to My Library"}
      </button>
    </div>
  `,(r=A.querySelector("[data-library-toggle]"))==null||r.addEventListener("click",n=>{const o=et(e);n.currentTarget.textContent=o?"Remove from My Library":"Add to My Library"})}function it(){A.innerHTML=`
    <div class="movie-modal__message">
      <h2 id="movie-modal-title">OOPS...</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  `}function Se(e){e.key==="Escape"&&q()}function at(){document.addEventListener("keydown",Se),k==null||k.addEventListener("click",q),$==null||$.addEventListener("click",q)}function st(){document.removeEventListener("keydown",Se),k==null||k.removeEventListener("click",q),$==null||$.removeEventListener("click",q)}function lt(){T&&(T.classList.remove("is-hidden"),document.body.classList.add("modal-open"),at())}function q(){T&&(T.classList.add("is-hidden"),document.body.classList.remove("modal-open"),st())}async function ne(e){if(!(!T||!A||!e)){lt(),A.innerHTML='<p class="movie-modal__loading">Loading...</p>';try{const t=await tt(e);ot(t)}catch(t){console.error(t),it()}}}function ct(e){const t=e.target.closest("[data-movie-id]");t&&ne(t.dataset.movieId)}document.addEventListener("click",ct);const P=9,dt="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster",ut=new URL("/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",import.meta.url).href,mt=`url("${ut}")`;let f=[],O=[],u="all",B=P;const i={hero:document.querySelector(".js-library-hero"),heroContent:document.querySelector(".js-library-hero-content"),list:document.querySelector(".js-library-list"),empty:document.querySelector(".js-library-empty"),loadMore:document.querySelector(".js-library-load-more"),filter:document.querySelector(".library-filter"),filterButton:document.querySelector(".js-library-filter-button")||document.querySelector(".library-filter__button"),filterMenu:document.querySelector(".js-library-filter-menu")||document.querySelector(".library-filter__menu")};function E(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ft(e){return e.poster_path?`${Me}/w500${e.poster_path}`:dt}function pt(e){return e.release_date?e.release_date.slice(0,4):"Unknown"}function z(e){return Array.isArray(e.genres)?e.genres.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean):[]}function gt(e){const t=z(e);return t.length?t.join(", "):"Genre unknown"}function yt(e){const t=Number(e.vote_average),r=Number.isFinite(t)?t:0;return Math.min(100,Math.max(0,r*10))}function ht(){!i.hero||!i.heroContent||(i.hero.style.backgroundImage=mt,i.hero.style.backgroundPosition="center",i.hero.style.backgroundSize="cover",i.heroContent.innerHTML=`
    <h1 class="library-hero__title">Create Your Dream Cinema</h1>
    <p class="library-hero__text">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films. This guide helps you bring the cinema experience into
      your own home with cozy seating, dim lighting, and movie theater snacks.
    </p>
  `)}function vt(){const e=new Set;return f.forEach(t=>{z(t).forEach(r=>e.add(r))}),[...e].sort((t,r)=>t.localeCompare(r))}function bt(){var e,t;return i.filterMenu?((e=i.filterButton)==null?void 0:e.getAttribute("aria-expanded"))==="true"||((t=i.filter)==null?void 0:t.classList.contains("is-open")):!1}function j(e){var t;!i.filterButton||!i.filterMenu||(i.filterButton.setAttribute("aria-expanded",String(e)),i.filterMenu.hidden=!e,i.filterMenu.style.display=e?"block":"none",(t=i.filter)==null||t.classList.toggle("is-open",e))}function xe(){var r;if(!i.filterButton||!i.filterMenu)return;const e=vt();i.filterButton.textContent=u==="all"?"Genre":u,i.filterButton.disabled=f.length===0,i.filterButton.setAttribute("aria-expanded","false"),i.filterMenu.hidden=!0,i.filterMenu.style.display="none",(r=i.filter)==null||r.classList.remove("is-open"),i.filter&&(i.filter.hidden=f.length===0);const t=e.map(n=>`
        <li>
          <button
            class="${u===n?"is-selected":""}"
            type="button"
            data-genre="${E(n)}"
          >
            ${E(n)}
          </button>
        </li>
      `).join("");i.filterMenu.innerHTML=`
    <li>
      <button
        class="${u==="all"?"is-selected":""}"
        type="button"
        data-genre="all"
      >
        All genres
      </button>
    </li>
    ${t}
  `}function Ce(){O=u==="all"?[...f]:f.filter(e=>z(e).includes(u))}function Lt(e){const t=e.title||e.original_title||"Untitled",r=Number(e.vote_average||0).toFixed(1);return`
    <li class="movie-card" data-movie-id="${e.id}">
      <button class="movie-card__button" type="button" aria-label="Open ${E(t)} details">
        <img class="movie-card__poster" src="${ft(e)}" alt="${E(t)} poster" />

        <span class="movie-card__gradient"></span>

        <span class="movie-card__info">
          <span class="movie-card__title">${E(t)}</span>

          <span class="movie-card__footer">
            <span class="movie-card__meta">
              ${E(gt(e))} | ${pt(e)}
            </span>

            <span
              class="movie-card__rating"
              style="--rating: ${yt(e)}%"
              aria-label="Rating ${r} out of 10"
            >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </span>
        </span>
      </button>
    </li>
  `}function J(){if(!i.list||!i.empty||!i.loadMore)return;const e=O.slice(0,B);i.list.innerHTML=e.map(Lt).join("");const t=f.length===0,r=f.length>0&&O.length===0;i.empty.hidden=!t&&!r,i.list.hidden=t||r,i.loadMore.hidden=t||r||B>=O.length}function X(){f=Je(),u!=="all"&&!f.some(e=>z(e).includes(u))&&(u="all"),B=P,Ce(),xe(),J()}function _t(){var e,t,r;(e=i.loadMore)==null||e.addEventListener("click",()=>{B+=P,J()}),(t=i.filterButton)==null||t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),!(!i.filterMenu||i.filterButton.disabled)&&j(!bt())}),(r=i.filterMenu)==null||r.addEventListener("click",n=>{n.stopPropagation();const o=n.target.closest("[data-genre]");o&&(n.preventDefault(),u=o.dataset.genre,B=P,j(!1),Ce(),xe(),J())}),document.addEventListener("click",n=>{n.target.closest(".library-filter")||j(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&j(!1)}),window.addEventListener("library:updated",X),window.addEventListener("storage",n=>{n.key===te&&X()})}function wt(){!i.hero&&!i.list||(ht(),X(),_t())}wt();function Mt(e){const t=e.querySelector(".search-bar-year-btn"),r=e.querySelector(".search-bar-year-list"),n=e.querySelector(".search-bar-year-value");!t||!r||(t.addEventListener("click",o=>{o.stopPropagation();const a=e.classList.toggle("is-open");t.setAttribute("aria-expanded",String(a))}),r.querySelectorAll(".search-bar-year-item").forEach(o=>{o.addEventListener("click",()=>{r.querySelectorAll(".search-bar-year-item").forEach(a=>{a.classList.remove("search-bar-year-item--selected"),a.removeAttribute("aria-selected")}),o.classList.add("search-bar-year-item--selected"),o.setAttribute("aria-selected","true"),n.textContent=o.dataset.value,e.classList.add("has-value"),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}))}document.querySelectorAll(".search-bar-year").forEach(Mt);document.addEventListener("click",()=>{document.querySelectorAll(".search-bar-year.is-open").forEach(e=>{e.classList.remove("is-open"),e.querySelector(".search-bar-year-btn").setAttribute("aria-expanded","false")})});document.querySelectorAll('[data-field="film"] .search-bar-input').forEach(e=>{const t=e.closest(".search-bar-input-wrap");e.addEventListener("input",()=>{t.classList.toggle("has-value",e.value.length>0)})});document.querySelectorAll(".search-bar-clear").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".search-bar-input-wrap"),r=t.querySelector(".search-bar-input");r.value="",t.classList.remove("has-value")})});const Et="https://image.tmdb.org/t/p/original",Te="my-library",s={section:document.querySelector(".upcoming"),status:document.querySelector(".upcoming__status"),wrapper:document.querySelector(".upcoming__wrapper"),image:document.querySelector(".movie-img"),title:document.querySelector(".movie-title"),date:document.querySelector(".upcoming-date"),vote:document.querySelector(".vote"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),overview:document.querySelector(".overview"),button:document.querySelector(".upcoming .btn")};let h=null;function Ae(){return JSON.parse(localStorage.getItem(Te))||[]}function le(e){localStorage.setItem(Te,JSON.stringify(e))}function qe(e){return Ae().some(t=>t.id===e)}function Be(){h&&(s.button.textContent=qe(h.id)?"Remove from My Library":"Add to my Library")}function kt(){if(!h)return;const e=Ae();if(qe(h.id)){const r=e.filter(n=>n.id!==h.id);le(r)}else le([...e,h]);Be()}function $t(e){const t=new Date,r=t.getMonth(),n=t.getFullYear();return e.filter(o=>{if(!o.release_date)return!1;const a=new Date(o.release_date);return a.getMonth()===r&&a.getFullYear()===n})}function St(e){return e[Math.floor(Math.random()*e.length)]}function ce(e){s.status.textContent=e,s.status.classList.remove("is-hidden"),s.wrapper.classList.add("is-hidden")}function xt(){s.status.classList.add("is-hidden"),s.wrapper.classList.remove("is-hidden")}function Ct(e){const t=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;return`
    <span class="vote-pill">${t}</span>
    <span class="vote-separator">/</span>
    <span class="vote-pill">${r}</span>
  `}async function Tt(e){const t=await ke(e.genre_ids);h={...e,genres:t},s.image.src=e.backdrop_path?`${Et}${e.backdrop_path}`:"./img/no-poster.png",s.image.alt=e.title||"movie backdrop",s.title.textContent=e.title||"Unknown title",s.date.textContent=e.release_date||"Unknown",s.vote.innerHTML=Ct(e),s.popularity.textContent=e.popularity?e.popularity.toFixed(1):"0.0",s.genre.textContent=t.length?t.join(", "):"Unknown",s.overview.textContent=e.overview||"No overview available.",Be(),xt()}async function At(){if(s.section)try{const t=(await Ge()).results||[],r=$t(t);if(!r.length){ce("No upcoming movie is available right now.");return}const n=St(r);await Tt(n),s.button.addEventListener("click",kt)}catch(e){console.error("Upcoming error:",e),ce("No upcoming movie is available right now.")}}document.addEventListener("DOMContentLoaded",At);let v=null,W=[],Q="";function He(){return window.innerWidth<768?"mobile":"large"}function qt(e){return e?`https://image.tmdb.org/t/p/${window.innerWidth<768?"w342":"w500"}${e}`:""}function Bt(e){return`
    <div class="weekly-rating">
      ${ee(e,"weekly-star")}
    </div>
  `}async function Ht(){if(v=document.querySelector("#weekly-movie"),!!v)try{W=(await Ee("week")).results||[],await Ie(W)}catch(e){console.error("Weekly Trends Error:",e)}}async function Ie(e){Q=He();const t=Q==="mobile"?e.slice(0,1):e.slice(0,3),r=await Promise.all(t.map(async n=>{var l,d;const o=await ke(n.genre_ids||[]),a=o.length>0?o.slice(0,2).join(", "):"Unknown genre",c=((l=n.release_date)==null?void 0:l.slice(0,4))||((d=n.first_air_date)==null?void 0:d.slice(0,4))||"N/A";return`
        <article class="weekly-card" data-movie-id="${n.id}">
          <img
            class="weekly-image"
            src="${qt(n.poster_path)}"
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
                ${a} | ${c}
              </p>

              ${Bt(n.vote_average)}
            </div>
          </div>
        </article>
      `}));v.innerHTML=r.join(""),It()}function It(){v.dataset.listenerAttached!=="true"&&(v.addEventListener("click",e=>{const t=e.target.closest("[data-movie-id]");t&&ne(t.dataset.movieId)}),v.dataset.listenerAttached="true")}window.addEventListener("resize",()=>{if(!v||W.length===0)return;He()!==Q&&Ie(W)});const b=document.querySelector("[data-trailer-modal]"),S=document.querySelector("[data-trailer-overlay]"),x=document.querySelector("[data-trailer-close]"),m=document.querySelector("[data-trailer-frame]"),C=document.querySelector("[data-trailer-status]"),p=document.querySelector("[data-trailer-error]");let G=0;function Ut(e=[]){const t=e.filter(r=>r.site==="YouTube"&&/^[\w-]{6,20}$/.test(r.key||""));return t.find(r=>r.type==="Trailer"&&r.official)||t.find(r=>r.type==="Trailer")||t.find(r=>r.type==="Teaser")||t[0]}async function Ft(e){const t=await fetch(`${_}/movie/${e}/videos?api_key=${L}`);if(!t.ok)throw new Error("Trailer could not be loaded");const r=await t.json();return Ut(r==null?void 0:r.results)}function Ue(e){e.key==="Escape"&&H()}function jt(){document.addEventListener("keydown",Ue),S==null||S.addEventListener("click",H),x==null||x.addEventListener("click",H)}function Nt(){document.removeEventListener("keydown",Ue),S==null||S.removeEventListener("click",H),x==null||x.removeEventListener("click",H)}function Ot(e){C&&(C.textContent=e,C.hidden=!1,p&&(p.hidden=!0))}function de(){C&&(C.hidden=!0),p&&(p.hidden=!1)}function Gt(){return!b||!m?!1:(b.classList.remove("is-hidden"),document.body.classList.add("modal-open"),m.hidden=!0,m.src="",p&&(p.hidden=!0),Ot("Loading trailer..."),jt(),!0)}function H(){!b||!m||(G+=1,b.classList.add("is-hidden"),document.body.classList.remove("modal-open"),m.src="",m.hidden=!0,p&&(p.hidden=!0),Nt())}async function Rt(e){if(!e||!Gt())return;const t=++G;try{const r=await Ft(e);if(t!==G||b!=null&&b.classList.contains("is-hidden"))return;if(!r){de();return}C.hidden=!0,m.title=`${r.name||"Movie"} trailer`,m.src=`https://www.youtube-nocookie.com/embed/${r.key}?autoplay=1&rel=0`,m.hidden=!1}catch(r){if(t!==G)return;console.error(r),de()}}const K=document.querySelector(".scroll-up");K&&(K.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{K.classList.toggle("is-visible",window.scrollY>300)},{passive:!0}));const ue=document.querySelector(".loader-overlay");function Dt(){ue&&ue.classList.add("is-hidden")}Dt();const w=document.getElementById("teamModalOverlay"),me=document.getElementById("openTeamModal"),fe=document.getElementById("closeTeamModal");if(w&&me&&fe){const e=()=>{w.classList.remove("hidden"),document.body.style.overflow="hidden"},t=()=>{w.classList.add("hidden"),document.body.style.overflow=""};me.addEventListener("click",e),fe.addEventListener("click",t),w.addEventListener("click",r=>{r.target===w&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!w.classList.contains("hidden")&&t()})}const pe="cinemania-color-mode";function Pt(){Wt(),zt(),Yt()}function Wt(){const e=window.location.pathname;let t="home";e.includes("catalog")&&(t="catalog"),e.includes("library")&&(t="library"),document.querySelectorAll("[data-page]").forEach(n=>{n.classList.toggle("active",n.dataset.page===t)})}function zt(){const e=document.querySelector("#menuToggle"),t=document.querySelector(".mobile-nav");!e||!t||(e.addEventListener("click",r=>{r.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("nav-open")}),document.addEventListener("click",r=>{const n=t.contains(r.target),o=e.contains(r.target);!n&&!o&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}))}function Yt(){const e=document.querySelector(".theme-toggle");if(!e)return;const r=localStorage.getItem(pe)==="light";document.body.classList.toggle("light-theme",r),e.classList.toggle("active",r),e.addEventListener("click",()=>{const n=!document.body.classList.contains("light-theme");document.body.classList.toggle("light-theme",n),e.classList.toggle("active",n),localStorage.setItem(pe,n?"light":"dark")})}const Vt=1279,ge=192,Zt="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";let g=null,N=null;window.addEventListener("resize",Qt);async function Kt(){if(document.getElementById("hero"))try{const t=await Ee("day");if(!(t!=null&&t.results)){g=null,R();return}const r=t.results.filter(o=>o.backdrop_path);if(r.length===0){g=null,R();return}const n=Math.floor(Math.random()*r.length);g=r[n],je(g)}catch(t){console.error("Hero error:",t),g=null,R()}}function M(e){return new URL(Object.assign({"../img/empty.svg":ye,"../img/favorite.svg":he,"../img/full.svg":ve,"../img/half.svg":be,"../img/library-hero-fixed.svg":Le,"../img/logo.svg":_e,"../img/trailer-not-found.png":we})[`../img/${e}`],import.meta.url).href}function Jt(){return window.innerWidth<=Vt}function Xt(e){return e?window.innerWidth<768?`https://image.tmdb.org/t/p/w780${e}`:`https://image.tmdb.org/t/p/w1280${e}`:""}function Fe(e){const t=(e==null?void 0:e.trim())||"No description";return!Jt()||t.length<=ge?t:`${t.slice(0,ge).trimEnd()}...`}function Qt(){N&&cancelAnimationFrame(N),N=requestAnimationFrame(()=>{if(N=null,g){je(g);return}R()})}function je(e){const t=document.getElementById("hero");if(!t)return;const r=Xt(e.backdrop_path),n=e.title||e.name||"Movie";t.innerHTML=`
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

          ${er(e.vote_average)}

          <p class="hero-overview">
            ${Fe(e.overview)}
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
  `,tr(e)}function R(){var l;const e=document.getElementById("hero");if(!e)return;const t=M("hero-mobile.jpg"),r=M("hero-mobile@2x.jpg"),n=M("hero-tablet.jpg"),o=M("hero-tablet@2x.jpg"),a=M("hero-desktop.jpg"),c=M("hero-desktop@2x.jpg");e.innerHTML=`
    <picture class="hero-bg-picture">
      <source media="(min-width: 1280px)" srcset="${a} 1x, ${c} 2x" />
      <source media="(min-width: 768px)" srcset="${n} 1x, ${o} 2x" />

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
            ${Fe(Zt)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  `,(l=e.querySelector(".btn-primary"))==null||l.addEventListener("click",()=>{window.location.href="./catalog.html"})}function er(e){return!e&&e!==0?"":`
    <div class="hero-rating" aria-label="Movie rating">
      ${ee(e,"hero-rating-star")}
    </div>
  `}function tr(e){const t=document.getElementById("hero");if(!t||!(e!=null&&e.id))return;const r=t.querySelector("[data-trailer-id]"),n=t.querySelector("[data-movie-id]");r==null||r.addEventListener("click",o=>{o.preventDefault(),Rt(e.id)}),n==null||n.addEventListener("click",o=>{o.preventDefault(),ne(e.id)})}document.addEventListener("DOMContentLoaded",()=>{Pt(),Kt(),Ht()});
