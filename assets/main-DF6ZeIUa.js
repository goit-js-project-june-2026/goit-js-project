(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const he="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.25%206.125H10.2031L8.375%200.5L6.54688%206.125H0.5L5.42188%209.5L3.52344%2015.125L8.375%2011.6094L13.2266%2015.125L11.3281%209.5L16.25%206.125Z'%20stroke='url(%23paint0_linear_148_6995)'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6995'%20x1='2.42377'%20y1='1.54501'%20x2='12.853'%20y2='15.5249'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ve="data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.88L6.02%2011.9C2.38%208.68%200%206.51%200%203.85C0%201.68%201.68%200%203.85%200C5.04%200%206.23%200.56%207%201.47C7.77%200.56%208.96%200%2010.15%200C12.32%200%2014%201.68%2014%203.85C14%206.51%2011.62%208.68%207.98%2011.9L7%2012.88Z'%20fill='%23F87719'/%3e%3c/svg%3e",be="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2876%2015.7505C13.1692%2015.751%2013.0537%2015.7141%2012.9575%2015.6451L8.43602%2012.3671L3.91458%2015.6451C3.81798%2015.7151%203.7016%2015.7527%203.58227%2015.7522C3.46294%2015.7518%203.34684%2015.7134%203.25076%2015.6427C3.15467%2015.5719%203.08358%2015.4724%203.04776%2015.3586C3.01194%2015.2447%203.01324%2015.1225%203.05149%2015.0094L4.81493%209.78628L0.244616%206.6521C0.14562%206.58429%200.0709031%206.48659%200.0313829%206.37329C-0.00813729%206.25999%20-0.01039%206.13702%200.024954%206.02235C0.060298%205.90768%200.131386%205.80732%200.227832%205.73592C0.324278%205.66453%200.441028%205.62585%200.561022%205.62554H6.19938L7.90094%200.389013C7.9376%200.275959%208.00912%200.177419%208.10525%200.107532C8.20138%200.0376441%208.31717%200%208.43602%200C8.55487%200%208.67067%200.0376441%208.7668%200.107532C8.86292%200.177419%208.93445%200.275959%208.9711%200.389013L10.6727%205.6273H16.311C16.4312%205.62724%2016.5482%205.66565%2016.6449%205.7369C16.7416%205.80816%2016.813%205.90851%2016.8486%206.02327C16.8842%206.13803%2016.882%206.26116%2016.8426%206.37464C16.8031%206.48811%2016.7283%206.58596%2016.6292%206.65386L12.0571%209.78628L13.8195%2015.008C13.8481%2015.0926%2013.8561%2015.1827%2013.8429%2015.271C13.8298%2015.3592%2013.7958%2015.4431%2013.7438%2015.5156C13.6919%2015.5882%2013.6234%2015.6473%2013.5441%2015.6881C13.4647%2015.729%2013.3768%2015.7504%2013.2876%2015.7505Z'%20fill='url(%23paint0_linear_148_6990)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6990'%20x1='2.06104'%20y1='1.12555'%20x2='13.311'%20y2='16.1255'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Le="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%207.3125H10.8281L9%201.6875L7.17188%207.3125H1.125L6.04688%2010.6875L4.14844%2016.3125L9%2012.7969L13.8516%2016.3125L11.9531%2010.6875L16.875%207.3125Z'%20stroke='url(%23paint0_linear_148_6991)'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%201.6875V12.7969L4.14844%2016.3125L6.04688%2010.6875L1.125%207.3125H7.17188L9%201.6875Z'%20fill='url(%23paint1_linear_148_6991)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6991'%20x1='3.04877'%20y1='2.73251'%20x2='13.478'%20y2='16.7124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_148_6991'%20x1='2.08688'%20y1='2.73251'%20x2='12.1506'%20y2='9.47748'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",_e="/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",we="/goit-js-project/assets/logo-PQe6D84w.svg",Me="/goit-js-project/assets/trailer-not-found-BstZulyb.png";function V(e){return new URL(Object.assign({"../img/empty.svg":he,"../img/favorite.svg":ve,"../img/full.svg":be,"../img/half.svg":Le,"../img/library-hero-fixed.svg":_e,"../img/logo.svg":we,"../img/trailer-not-found.png":Me})[`../img/${e}`],import.meta.url).href}function ee(e,t="star-icon"){const r=Math.round((e||0)/2*2)/2,n=5,o=Math.floor(r),a=r-o>=.5?1:0,l=n-o-a;let c="";for(let d=0;d<o;d++)c+=`<img src="${V("full.svg")}" alt="full star" class="${t}" />`;a>0&&(c+=`<img src="${V("half.svg")}" alt="half star" class="${t}" />`);for(let d=0;d<l;d++)c+=`<img src="${V("empty.svg")}" alt="empty star" class="${t}" />`;return c}const L="c488ba78584000b673e8c43a91229884",_="https://api.themoviedb.org/3",Ee="https://image.tmdb.org/t/p";let U=null;async function I(e,t="TMDB API error"){const r=await fetch(e);if(!r.ok)throw new Error(`${t}: ${r.status}`);return r.json()}async function ke(e="day"){const t=`${_}/trending/movie/${e}?api_key=${L}`;return I(t,"TMDB trending error")}async function Ge(e=1){const t=`${_}/trending/movie/day?api_key=${L}&page=${e}`;return I(t,"TMDB trending movies error")}async function Re(e,t=1){const r=`${_}/search/movie?api_key=${L}&query=${encodeURIComponent(e)}&page=${t}`;return I(r,"TMDB search error")}async function De(e=1){const t=`${_}/movie/upcoming?api_key=${L}&page=${e}`;return I(t,"TMDB upcoming error")}async function Pe(){if(U)return U;const e=`${_}/genre/movie/list?api_key=${L}`;return U=(await I(e,"TMDB genres error")).genres.reduce((r,n)=>(r[n.id]=n.name,r),{}),U}async function Se(e=[]){const t=await Pe();return e.map(r=>t[r]).filter(Boolean)}function We(e,t,r){const n=document.getElementById("tui-pagination-container");if(!n)return;n.innerHTML="";const o=document.createElement("button");o.classList.add("tui-page-btn","tui-prev"),e===1&&(o.disabled=!0),o.addEventListener("click",()=>{e>1&&r(e-1)}),n.appendChild(o),ze(e,t).forEach(c=>{if(c==="..."){const Y=document.createElement("span");Y.classList.add("pagination-dots"),Y.textContent="...",n.appendChild(Y);return}const d=document.createElement("button");d.classList.add("tui-page-btn"),c===e&&d.classList.add("tui-is-selected"),d.textContent=String(c).padStart(2,"0"),d.addEventListener("click",()=>{r(c)}),n.appendChild(d)});const l=document.createElement("button");l.classList.add("tui-page-btn","tui-next"),e===t&&(l.disabled=!0),l.addEventListener("click",()=>{e<t&&r(e+1)}),n.appendChild(l)}function ze(e,t){return t<=5?Array.from({length:t},(r,n)=>n+1):e<=5?[1,2,3,4,5,"...",20]:e>=t-2?[1,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t]}const Ye={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",53:"Thriller",10752:"War",37:"Western"},m=document.getElementById("movieGrid"),oe=document.getElementById("tui-pagination-container"),ie=document.querySelector(".search-bar"),ae=document.getElementById("search-film"),Z=document.getElementById("search-query");function Ve(e){return!e||e.length===0?"Unknown":e.slice(0,2).map(t=>Ye[t]||"Film").join(", ")}function Ze(e){return e?`https://image.tmdb.org/t/p/w500${e}`:""}function $e(){oe&&(oe.innerHTML="")}function Ke(){m&&(m.className="cat-movie-grid cat-movie-grid--empty",m.innerHTML=`
    <li class="cat-movie-empty">
      <p class="cat-movie-empty-oops">OOPS...</p>
      <p class="cat-movie-empty-sorry">We are very sorry!</p>
      <p class="cat-movie-empty-message">
        We don’t have any results matching your search.
      </p>
    </li>
  `,$e())}function Je(e=[]){if(m){if(m.className="cat-movie-grid",e.length===0){Ke();return}m.innerHTML=e.map(t=>{const r=t.release_date?t.release_date.slice(0,4):"N/A",n=ee(t.vote_average,"cat-movie-star"),o=Ve(t.genre_ids),a=Ze(t.poster_path);return`
        <li class="cat-movie-card" data-movie-id="${t.id}">
          <img
            class="cat-movie-poster"
            src="${a}"
            alt="${t.title||"Movie poster"}"
            loading="lazy"
            decoding="async"
          />

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
      `}).join("")}}async function D(e=1,t=null){try{let r;t?r=await Re(t,e):r=await Ge(e);const n=r.results||[];if(Je(n),n.length===0)return;const o=Math.min(r.total_pages,500);We(e,o,a=>{D(a,t),window.scrollTo({top:0,behavior:"smooth"})})}catch(r){console.error("Catalog loading error:",r),m&&(m.className="cat-movie-grid cat-movie-grid--empty",m.innerHTML=`
        <li class="cat-movie-empty">
          <p class="cat-movie-empty-oops">OOPS...</p>
          <p class="cat-movie-empty-sorry">We are very sorry!</p>
          <p class="cat-movie-empty-message">
            Something went wrong. Please try again later.
          </p>
        </li>
      `),$e()}}function Xe(){m&&D(1)}ie&&ae&&ie.addEventListener("submit",e=>{e.preventDefault();const t=ae.value.trim()||(Z==null?void 0:Z.value.trim())||"";if(!t){D(1);return}D(1,t)});Xe();const te="my-library",T=document.querySelector("[data-movie-modal]"),k=document.querySelector("[data-movie-modal-overlay]"),S=document.querySelector("[data-movie-modal-close]"),A=document.querySelector("[data-movie-modal-content]"),Qe="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster";function F(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function se(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(1):"0.0"}function re(){try{const e=JSON.parse(localStorage.getItem(te));return Array.isArray(e)?e:[]}catch{return[]}}function ce(e){try{return localStorage.setItem(te,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("library:updated")),!0}catch(t){return console.error("Library could not be saved",t),!1}}function et(){return re()}function tt(e){return re().some(t=>Number(t.id)===Number(e))}function rt(e){return{id:e.id,title:e.title||e.name||e.original_title||"Untitled",original_title:e.original_title||e.title||"Untitled",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",release_date:e.release_date||"",vote_average:e.vote_average||0,vote_count:e.vote_count||0,popularity:e.popularity||0,overview:e.overview||"",genres:xe(e.genres)}}function xe(e){return Array.isArray(e)?[...new Set(e.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean))]:[]}function nt(e){const t=rt(e),r=re();return r.some(o=>Number(o.id)===Number(t.id))?!ce(r.filter(a=>Number(a.id)!==Number(t.id))):ce([...r,t])}async function ot(e){const t=await fetch(`${_}/movie/${e}?api_key=${L}`);if(!t.ok)throw new Error("Movie details could not be loaded");return t.json()}function it(e){return e.poster_path?`${Ee}/w500${e.poster_path}`:Qe}function at(e){const t=xe(e.genres);return t.length===0?"Unknown":t.join(", ")}function st(e){var r;const t=tt(e.id);A.innerHTML=`
    <img
      class="movie-modal__poster"
      src="${it(e)}"
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
            <span class="movie-modal__rating">${se(e.vote_average)}</span>
            / ${Number(e.vote_count||0)}
          </dd>
        </div>
        <div>
          <dt>Popularity</dt>
          <dd>${se(e.popularity)}</dd>
        </div>
        <div>
          <dt>Genre</dt>
          <dd>${F(at(e))}</dd>
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
  `,(r=A.querySelector("[data-library-toggle]"))==null||r.addEventListener("click",n=>{const o=nt(e);n.currentTarget.textContent=o?"Remove from My Library":"Add to My Library"})}function ct(){A.innerHTML=`
    <div class="movie-modal__message">
      <h2 id="movie-modal-title">OOPS...</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  `}function Ce(e){e.key==="Escape"&&q()}function lt(){document.addEventListener("keydown",Ce),k==null||k.addEventListener("click",q),S==null||S.addEventListener("click",q)}function dt(){document.removeEventListener("keydown",Ce),k==null||k.removeEventListener("click",q),S==null||S.removeEventListener("click",q)}function ut(){T&&(T.classList.remove("is-hidden"),document.body.classList.add("modal-open"),lt())}function q(){T&&(T.classList.add("is-hidden"),document.body.classList.remove("modal-open"),dt())}async function ne(e){if(!(!T||!A||!e)){ut(),A.innerHTML='<p class="movie-modal__loading">Loading...</p>';try{const t=await ot(e);st(t)}catch(t){console.error(t),ct()}}}function mt(e){const t=e.target.closest("[data-movie-id]");t&&ne(t.dataset.movieId)}document.addEventListener("click",mt);const P=9,pt="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster",ft=new URL("/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",import.meta.url).href,gt=`url("${ft}")`;let f=[],N=[],u="all",B=P;const i={hero:document.querySelector(".js-library-hero"),heroContent:document.querySelector(".js-library-hero-content"),list:document.querySelector(".js-library-list"),empty:document.querySelector(".js-library-empty"),loadMore:document.querySelector(".js-library-load-more"),filter:document.querySelector(".library-filter"),filterButton:document.querySelector(".js-library-filter-button")||document.querySelector(".library-filter__button"),filterMenu:document.querySelector(".js-library-filter-menu")||document.querySelector(".library-filter__menu")};function E(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function yt(e){return e.poster_path?`${Ee}/w500${e.poster_path}`:pt}function ht(e){return e.release_date?e.release_date.slice(0,4):"Unknown"}function z(e){return Array.isArray(e.genres)?e.genres.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean):[]}function vt(e){const t=z(e);return t.length?t.join(", "):"Genre unknown"}function bt(e){const t=Number(e.vote_average),r=Number.isFinite(t)?t:0;return Math.min(100,Math.max(0,r*10))}function Lt(){!i.hero||!i.heroContent||(i.hero.style.backgroundImage=gt,i.hero.style.backgroundPosition="center",i.hero.style.backgroundSize="cover",i.heroContent.innerHTML=`
    <h1 class="library-hero__title">Create Your Dream Cinema</h1>
    <p class="library-hero__text">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films. This guide helps you bring the cinema experience into
      your own home with cozy seating, dim lighting, and movie theater snacks.
    </p>
  `)}function _t(){const e=new Set;return f.forEach(t=>{z(t).forEach(r=>e.add(r))}),[...e].sort((t,r)=>t.localeCompare(r))}function wt(){var e,t;return i.filterMenu?((e=i.filterButton)==null?void 0:e.getAttribute("aria-expanded"))==="true"||((t=i.filter)==null?void 0:t.classList.contains("is-open")):!1}function j(e){var t;!i.filterButton||!i.filterMenu||(i.filterButton.setAttribute("aria-expanded",String(e)),i.filterMenu.hidden=!e,i.filterMenu.style.display=e?"block":"none",(t=i.filter)==null||t.classList.toggle("is-open",e))}function Te(){var r;if(!i.filterButton||!i.filterMenu)return;const e=_t();i.filterButton.textContent=u==="all"?"Genre":u,i.filterButton.disabled=f.length===0,i.filterButton.setAttribute("aria-expanded","false"),i.filterMenu.hidden=!0,i.filterMenu.style.display="none",(r=i.filter)==null||r.classList.remove("is-open"),i.filter&&(i.filter.hidden=f.length===0);const t=e.map(n=>`
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
  `}function Ae(){N=u==="all"?[...f]:f.filter(e=>z(e).includes(u))}function Mt(e){const t=e.title||e.original_title||"Untitled",r=Number(e.vote_average||0).toFixed(1);return`
    <li class="movie-card" data-movie-id="${e.id}">
      <button class="movie-card__button" type="button" aria-label="Open ${E(t)} details">
        <img class="movie-card__poster" src="${yt(e)}" alt="${E(t)} poster" />

        <span class="movie-card__gradient"></span>

        <span class="movie-card__info">
          <span class="movie-card__title">${E(t)}</span>

          <span class="movie-card__footer">
            <span class="movie-card__meta">
              ${E(vt(e))} | ${ht(e)}
            </span>

            <span
              class="movie-card__rating"
              style="--rating: ${bt(e)}%"
              aria-label="Rating ${r} out of 10"
            >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </span>
        </span>
      </button>
    </li>
  `}function J(){if(!i.list||!i.empty||!i.loadMore)return;const e=N.slice(0,B);i.list.innerHTML=e.map(Mt).join("");const t=f.length===0,r=f.length>0&&N.length===0;i.empty.hidden=!t&&!r,i.list.hidden=t||r,i.loadMore.hidden=t||r||B>=N.length}function X(){f=et(),u!=="all"&&!f.some(e=>z(e).includes(u))&&(u="all"),B=P,Ae(),Te(),J()}function Et(){var e,t,r;(e=i.loadMore)==null||e.addEventListener("click",()=>{B+=P,J()}),(t=i.filterButton)==null||t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),!(!i.filterMenu||i.filterButton.disabled)&&j(!wt())}),(r=i.filterMenu)==null||r.addEventListener("click",n=>{n.stopPropagation();const o=n.target.closest("[data-genre]");o&&(n.preventDefault(),u=o.dataset.genre,B=P,j(!1),Ae(),Te(),J())}),document.addEventListener("click",n=>{n.target.closest(".library-filter")||j(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&j(!1)}),window.addEventListener("library:updated",X),window.addEventListener("storage",n=>{n.key===te&&X()})}function kt(){!i.hero&&!i.list||(Lt(),X(),Et())}kt();function St(e){const t=e.querySelector(".search-bar-year-btn"),r=e.querySelector(".search-bar-year-list"),n=e.querySelector(".search-bar-year-value");!t||!r||(t.addEventListener("click",o=>{o.stopPropagation();const a=e.classList.toggle("is-open");t.setAttribute("aria-expanded",String(a))}),r.querySelectorAll(".search-bar-year-item").forEach(o=>{o.addEventListener("click",()=>{r.querySelectorAll(".search-bar-year-item").forEach(a=>{a.classList.remove("search-bar-year-item--selected"),a.removeAttribute("aria-selected")}),o.classList.add("search-bar-year-item--selected"),o.setAttribute("aria-selected","true"),n.textContent=o.dataset.value,e.classList.add("has-value"),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}))}document.querySelectorAll(".search-bar-year").forEach(St);document.addEventListener("click",()=>{document.querySelectorAll(".search-bar-year.is-open").forEach(e=>{e.classList.remove("is-open"),e.querySelector(".search-bar-year-btn").setAttribute("aria-expanded","false")})});document.querySelectorAll('[data-field="film"] .search-bar-input').forEach(e=>{const t=e.closest(".search-bar-input-wrap");e.addEventListener("input",()=>{t.classList.toggle("has-value",e.value.length>0)})});document.querySelectorAll(".search-bar-clear").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".search-bar-input-wrap"),r=t.querySelector(".search-bar-input");r.value="",t.classList.remove("has-value")})});const $t="https://image.tmdb.org/t/p/original",qe="my-library",s={section:document.querySelector(".upcoming"),status:document.querySelector(".upcoming__status"),wrapper:document.querySelector(".upcoming__wrapper"),image:document.querySelector(".movie-img"),title:document.querySelector(".movie-title"),date:document.querySelector(".upcoming-date"),vote:document.querySelector(".vote"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),overview:document.querySelector(".overview"),button:document.querySelector(".upcoming .btn")};let h=null;function Be(){return JSON.parse(localStorage.getItem(qe))||[]}function le(e){localStorage.setItem(qe,JSON.stringify(e))}function He(e){return Be().some(t=>t.id===e)}function Ie(){h&&(s.button.textContent=He(h.id)?"Remove from My Library":"Add to my Library")}function xt(){if(!h)return;const e=Be();if(He(h.id)){const r=e.filter(n=>n.id!==h.id);le(r)}else le([...e,h]);Ie()}function Ct(e){const t=new Date,r=t.getMonth(),n=t.getFullYear();return e.filter(o=>{if(!o.release_date)return!1;const a=new Date(o.release_date);return a.getMonth()===r&&a.getFullYear()===n})}function Tt(e){return e[Math.floor(Math.random()*e.length)]}function de(e){s.status.textContent=e,s.status.classList.remove("is-hidden"),s.wrapper.classList.add("is-hidden")}function At(){s.status.classList.add("is-hidden"),s.wrapper.classList.remove("is-hidden")}function qt(e){const t=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;return`
    <span class="vote-pill">${t}</span>
    <span class="vote-separator">/</span>
    <span class="vote-pill">${r}</span>
  `}async function Bt(e){const t=await Se(e.genre_ids);h={...e,genres:t},s.image.src=e.backdrop_path?`${$t}${e.backdrop_path}`:"./img/no-poster.png",s.image.alt=e.title||"movie backdrop",s.title.textContent=e.title||"Unknown title",s.date.textContent=e.release_date||"Unknown",s.vote.innerHTML=qt(e),s.popularity.textContent=e.popularity?e.popularity.toFixed(1):"0.0",s.genre.textContent=t.length?t.join(", "):"Unknown",s.overview.textContent=e.overview||"No overview available.",Ie(),At()}async function Ht(){if(s.section)try{const t=(await De()).results||[],r=Ct(t);if(!r.length){de("No upcoming movie is available right now.");return}const n=Tt(r);await Bt(n),s.button.addEventListener("click",xt)}catch(e){console.error("Upcoming error:",e),de("No upcoming movie is available right now.")}}document.addEventListener("DOMContentLoaded",Ht);let v=null,W=[],Q="";function Ue(){return window.innerWidth<768?"mobile":"large"}function It(e){return e?`https://image.tmdb.org/t/p/${window.innerWidth<768?"w342":"w500"}${e}`:""}function Ut(e){return`
    <div class="weekly-rating">
      ${ee(e,"weekly-star")}
    </div>
  `}async function Ft(){if(v=document.querySelector("#weekly-movie"),!!v)try{W=(await ke("week")).results||[],await Fe(W)}catch(e){console.error("Weekly Trends Error:",e)}}async function Fe(e){Q=Ue();const t=Q==="mobile"?e.slice(0,1):e.slice(0,3),r=await Promise.all(t.map(async n=>{var c,d;const o=await Se(n.genre_ids||[]),a=o.length>0?o.slice(0,2).join(", "):"Unknown genre",l=((c=n.release_date)==null?void 0:c.slice(0,4))||((d=n.first_air_date)==null?void 0:d.slice(0,4))||"N/A";return`
        <article class="weekly-card" data-movie-id="${n.id}">
          <img
            class="weekly-image"
            src="${It(n.poster_path)}"
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
                ${a} | ${l}
              </p>

              ${Ut(n.vote_average)}
            </div>
          </div>
        </article>
      `}));v.innerHTML=r.join(""),jt()}function jt(){v.dataset.listenerAttached!=="true"&&(v.addEventListener("click",e=>{const t=e.target.closest("[data-movie-id]");t&&ne(t.dataset.movieId)}),v.dataset.listenerAttached="true")}window.addEventListener("resize",()=>{if(!v||W.length===0)return;Ue()!==Q&&Fe(W)});const b=document.querySelector("[data-trailer-modal]"),$=document.querySelector("[data-trailer-overlay]"),x=document.querySelector("[data-trailer-close]"),p=document.querySelector("[data-trailer-frame]"),C=document.querySelector("[data-trailer-status]"),g=document.querySelector("[data-trailer-error]");let G=0;function Ot(e=[]){const t=e.filter(r=>r.site==="YouTube"&&/^[\w-]{6,20}$/.test(r.key||""));return t.find(r=>r.type==="Trailer"&&r.official)||t.find(r=>r.type==="Trailer")||t.find(r=>r.type==="Teaser")||t[0]}async function Nt(e){const t=await fetch(`${_}/movie/${e}/videos?api_key=${L}`);if(!t.ok)throw new Error("Trailer could not be loaded");const r=await t.json();return Ot(r==null?void 0:r.results)}function je(e){e.key==="Escape"&&H()}function Gt(){document.addEventListener("keydown",je),$==null||$.addEventListener("click",H),x==null||x.addEventListener("click",H)}function Rt(){document.removeEventListener("keydown",je),$==null||$.removeEventListener("click",H),x==null||x.removeEventListener("click",H)}function Dt(e){C&&(C.textContent=e,C.hidden=!1,g&&(g.hidden=!0))}function ue(){C&&(C.hidden=!0),g&&(g.hidden=!1)}function Pt(){return!b||!p?!1:(b.classList.remove("is-hidden"),document.body.classList.add("modal-open"),p.hidden=!0,p.src="",g&&(g.hidden=!0),Dt("Loading trailer..."),Gt(),!0)}function H(){!b||!p||(G+=1,b.classList.add("is-hidden"),document.body.classList.remove("modal-open"),p.src="",p.hidden=!0,g&&(g.hidden=!0),Rt())}async function Wt(e){if(!e||!Pt())return;const t=++G;try{const r=await Nt(e);if(t!==G||b!=null&&b.classList.contains("is-hidden"))return;if(!r){ue();return}C.hidden=!0,p.title=`${r.name||"Movie"} trailer`,p.src=`https://www.youtube-nocookie.com/embed/${r.key}?autoplay=1&rel=0`,p.hidden=!1}catch(r){if(t!==G)return;console.error(r),ue()}}const K=document.querySelector(".scroll-up");K&&(K.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{K.classList.toggle("is-visible",window.scrollY>300)},{passive:!0}));const me=document.querySelector(".loader-overlay");function zt(){me&&me.classList.add("is-hidden")}zt();const w=document.getElementById("teamModalOverlay"),pe=document.getElementById("openTeamModal"),fe=document.getElementById("closeTeamModal");if(w&&pe&&fe){const e=()=>{w.classList.remove("hidden"),document.body.style.overflow="hidden"},t=()=>{w.classList.add("hidden"),document.body.style.overflow=""};pe.addEventListener("click",e),fe.addEventListener("click",t),w.addEventListener("click",r=>{r.target===w&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!w.classList.contains("hidden")&&t()})}const ge="cinemania-color-mode";function Yt(){Vt(),Zt(),Kt()}function Vt(){const e=window.location.pathname;let t="home";e.includes("catalog")&&(t="catalog"),e.includes("library")&&(t="library"),document.querySelectorAll("[data-page]").forEach(n=>{n.classList.toggle("active",n.dataset.page===t)})}function Zt(){const e=document.querySelector("#menuToggle"),t=document.querySelector(".mobile-nav");!e||!t||(e.addEventListener("click",r=>{r.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("nav-open")}),document.addEventListener("click",r=>{const n=t.contains(r.target),o=e.contains(r.target);!n&&!o&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}))}function Kt(){const e=document.querySelector(".theme-toggle");if(!e)return;const r=localStorage.getItem(ge)==="light";document.body.classList.toggle("light-theme",r),e.classList.toggle("active",r),e.addEventListener("click",()=>{const n=!document.body.classList.contains("light-theme");document.body.classList.toggle("light-theme",n),e.classList.toggle("active",n),localStorage.setItem(ge,n?"light":"dark")})}const Jt=1279,ye=192,Xt="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";let y=null,O=null;window.addEventListener("resize",rr);async function Qt(){if(document.getElementById("hero"))try{const t=await ke("day");if(!(t!=null&&t.results)){y=null,R();return}const r=t.results.filter(o=>o.backdrop_path);if(r.length===0){y=null,R();return}const n=Math.floor(Math.random()*r.length);y=r[n],Ne(y)}catch(t){console.error("Hero error:",t),y=null,R()}}function M(e){return new URL(Object.assign({"../img/empty.svg":he,"../img/favorite.svg":ve,"../img/full.svg":be,"../img/half.svg":Le,"../img/library-hero-fixed.svg":_e,"../img/logo.svg":we,"../img/trailer-not-found.png":Me})[`../img/${e}`],import.meta.url).href}function er(){return window.innerWidth<=Jt}function tr(e){return e?window.innerWidth<768?`https://image.tmdb.org/t/p/w780${e}`:`https://image.tmdb.org/t/p/w1280${e}`:""}function Oe(e){const t=(e==null?void 0:e.trim())||"No description";return!er()||t.length<=ye?t:`${t.slice(0,ye).trimEnd()}...`}function rr(){O&&cancelAnimationFrame(O),O=requestAnimationFrame(()=>{if(O=null,y){Ne(y);return}R()})}function Ne(e){const t=document.getElementById("hero");if(!t)return;const r=tr(e.backdrop_path),n=e.title||e.name||"Movie";t.innerHTML=`
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

          ${nr(e.vote_average)}

          <p class="hero-overview">
            ${Oe(e.overview)}
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
  `,or(e)}function R(){var c;const e=document.getElementById("hero");if(!e)return;const t=M("hero-mobile.jpg"),r=M("hero-mobile@2x.jpg"),n=M("hero-tablet.jpg"),o=M("hero-tablet@2x.jpg"),a=M("hero-desktop.jpg"),l=M("hero-desktop@2x.jpg");e.innerHTML=`
    <picture class="hero-bg-picture">
      <source media="(min-width: 1280px)" srcset="${a} 1x, ${l} 2x" />
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
            ${Oe(Xt)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  `,(c=e.querySelector(".btn-primary"))==null||c.addEventListener("click",()=>{window.location.href="./catalog.html"})}function nr(e){return!e&&e!==0?"":`
    <div class="hero-rating" aria-label="Movie rating">
      ${ee(e,"hero-rating-star")}
    </div>
  `}function or(e){const t=document.getElementById("hero");if(!t||!(e!=null&&e.id))return;const r=t.querySelector("[data-trailer-id]"),n=t.querySelector("[data-movie-id]");r==null||r.addEventListener("click",o=>{o.preventDefault(),Wt(e.id)}),n==null||n.addEventListener("click",o=>{o.preventDefault(),ne(e.id)})}document.addEventListener("DOMContentLoaded",()=>{Yt(),Qt(),Ft()});
