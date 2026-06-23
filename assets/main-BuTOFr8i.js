(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const ve="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.25%206.125H10.2031L8.375%200.5L6.54688%206.125H0.5L5.42188%209.5L3.52344%2015.125L8.375%2011.6094L13.2266%2015.125L11.3281%209.5L16.25%206.125Z'%20stroke='url(%23paint0_linear_148_6995)'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6995'%20x1='2.42377'%20y1='1.54501'%20x2='12.853'%20y2='15.5249'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",be="data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.88L6.02%2011.9C2.38%208.68%200%206.51%200%203.85C0%201.68%201.68%200%203.85%200C5.04%200%206.23%200.56%207%201.47C7.77%200.56%208.96%200%2010.15%200C12.32%200%2014%201.68%2014%203.85C14%206.51%2011.62%208.68%207.98%2011.9L7%2012.88Z'%20fill='%23F87719'/%3e%3c/svg%3e",Le="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2876%2015.7505C13.1692%2015.751%2013.0537%2015.7141%2012.9575%2015.6451L8.43602%2012.3671L3.91458%2015.6451C3.81798%2015.7151%203.7016%2015.7527%203.58227%2015.7522C3.46294%2015.7518%203.34684%2015.7134%203.25076%2015.6427C3.15467%2015.5719%203.08358%2015.4724%203.04776%2015.3586C3.01194%2015.2447%203.01324%2015.1225%203.05149%2015.0094L4.81493%209.78628L0.244616%206.6521C0.14562%206.58429%200.0709031%206.48659%200.0313829%206.37329C-0.00813729%206.25999%20-0.01039%206.13702%200.024954%206.02235C0.060298%205.90768%200.131386%205.80732%200.227832%205.73592C0.324278%205.66453%200.441028%205.62585%200.561022%205.62554H6.19938L7.90094%200.389013C7.9376%200.275959%208.00912%200.177419%208.10525%200.107532C8.20138%200.0376441%208.31717%200%208.43602%200C8.55487%200%208.67067%200.0376441%208.7668%200.107532C8.86292%200.177419%208.93445%200.275959%208.9711%200.389013L10.6727%205.6273H16.311C16.4312%205.62724%2016.5482%205.66565%2016.6449%205.7369C16.7416%205.80816%2016.813%205.90851%2016.8486%206.02327C16.8842%206.13803%2016.882%206.26116%2016.8426%206.37464C16.8031%206.48811%2016.7283%206.58596%2016.6292%206.65386L12.0571%209.78628L13.8195%2015.008C13.8481%2015.0926%2013.8561%2015.1827%2013.8429%2015.271C13.8298%2015.3592%2013.7958%2015.4431%2013.7438%2015.5156C13.6919%2015.5882%2013.6234%2015.6473%2013.5441%2015.6881C13.4647%2015.729%2013.3768%2015.7504%2013.2876%2015.7505Z'%20fill='url(%23paint0_linear_148_6990)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6990'%20x1='2.06104'%20y1='1.12555'%20x2='13.311'%20y2='16.1255'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",_e="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%207.3125H10.8281L9%201.6875L7.17188%207.3125H1.125L6.04688%2010.6875L4.14844%2016.3125L9%2012.7969L13.8516%2016.3125L11.9531%2010.6875L16.875%207.3125Z'%20stroke='url(%23paint0_linear_148_6991)'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%201.6875V12.7969L4.14844%2016.3125L6.04688%2010.6875L1.125%207.3125H7.17188L9%201.6875Z'%20fill='url(%23paint1_linear_148_6991)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_148_6991'%20x1='3.04877'%20y1='2.73251'%20x2='13.478'%20y2='16.7124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_148_6991'%20x1='2.08688'%20y1='2.73251'%20x2='12.1506'%20y2='9.47748'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F84119'/%3e%3cstop%20offset='1'%20stop-color='%23F89F19'%20stop-opacity='0.68'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",we="/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",Me="/goit-js-project/assets/logo-PQe6D84w.svg",Ee="/goit-js-project/assets/trailer-not-found-BstZulyb.png";function V(e){return new URL(Object.assign({"../img/empty.svg":ve,"../img/favorite.svg":be,"../img/full.svg":Le,"../img/half.svg":_e,"../img/library-hero-fixed.svg":we,"../img/logo.svg":Me,"../img/trailer-not-found.png":Ee})[`../img/${e}`],import.meta.url).href}function te(e,t="star-icon"){const r=Math.round((e||0)/2*2)/2,n=5,o=Math.floor(r),a=r-o>=.5?1:0,s=n-o-a;let l="";for(let d=0;d<o;d++)l+=`<img src="${V("full.svg")}" alt="full star" class="${t}" />`;a>0&&(l+=`<img src="${V("half.svg")}" alt="half star" class="${t}" />`);for(let d=0;d<s;d++)l+=`<img src="${V("empty.svg")}" alt="empty star" class="${t}" />`;return l}const L="c488ba78584000b673e8c43a91229884",_="https://api.themoviedb.org/3",ke="https://image.tmdb.org/t/p";let U=null;async function H(e,t="TMDB API error"){const r=await fetch(e);if(!r.ok)throw new Error(`${t}: ${r.status}`);return r.json()}async function Se(e="day"){const t=`${_}/trending/movie/${e}?api_key=${L}`;return H(t,"TMDB trending error")}async function Re(e=1){const t=`${_}/trending/movie/day?api_key=${L}&page=${e}`;return H(t,"TMDB trending movies error")}async function De(e,t=1,r=""){let n=`${_}/search/movie?api_key=${L}&query=${encodeURIComponent(e)}&page=${t}`;return r&&(n+=`&primary_release_year=${encodeURIComponent(r)}`),H(n,"TMDB search error")}async function Pe(e=1){const t=`${_}/movie/upcoming?api_key=${L}&page=${e}`;return H(t,"TMDB upcoming error")}async function We(){if(U)return U;const e=`${_}/genre/movie/list?api_key=${L}`;return U=(await H(e,"TMDB genres error")).genres.reduce((r,n)=>(r[n.id]=n.name,r),{}),U}async function $e(e=[]){const t=await We();return e.map(r=>t[r]).filter(Boolean)}function Ye(e,t,r){const n=document.getElementById("tui-pagination-container");if(!n)return;n.innerHTML="";const o=document.createElement("button");o.classList.add("tui-page-btn","tui-prev"),e===1&&(o.disabled=!0),o.addEventListener("click",()=>{e>1&&r(e-1)}),n.appendChild(o),ze(e,t).forEach(l=>{if(l==="..."){const z=document.createElement("span");z.classList.add("pagination-dots"),z.textContent="...",n.appendChild(z);return}const d=document.createElement("button");d.classList.add("tui-page-btn"),l===e&&d.classList.add("tui-is-selected"),d.textContent=String(l).padStart(2,"0"),d.addEventListener("click",()=>{r(l)}),n.appendChild(d)});const s=document.createElement("button");s.classList.add("tui-page-btn","tui-next"),e===t&&(s.disabled=!0),s.addEventListener("click",()=>{e<t&&r(e+1)}),n.appendChild(s)}function ze(e,t){return t<=5?Array.from({length:t},(r,n)=>n+1):e<=5?[1,2,3,4,5,"...",20]:e>=t-2?[1,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t]}const Ve={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",53:"Thriller",10752:"War",37:"Western"},m=document.getElementById("movieGrid"),ie=document.getElementById("tui-pagination-container"),ae=document.querySelector(".search-bar"),se=document.getElementById("search-film"),Z=document.getElementById("search-query"),K=document.querySelector(".search-bar-year-value");function Ze(e){return!e||e.length===0?"Unknown":e.slice(0,2).map(t=>Ve[t]||"Film").join(", ")}function Ke(e){return e?`https://image.tmdb.org/t/p/w500${e}`:""}function xe(){ie&&(ie.innerHTML="")}function Je(){m&&(m.className="cat-movie-grid cat-movie-grid--empty",m.innerHTML=`
    <li class="cat-empty-message">
      <h2>OOPS...</h2>
      <p>We are very sorry!</p>
      <p>We don’t have any results matching your search.</p>
    </li>
  `,xe())}function Xe(e=[]){if(m){if(m.className="cat-movie-grid",e.length===0){Je();return}m.innerHTML=e.map(t=>{const r=t.release_date?t.release_date.slice(0,4):"N/A",n=te(t.vote_average,"cat-movie-star"),o=Ze(t.genre_ids);return`
        <li class="cat-movie-card">
          <img
            class="cat-movie-poster"
            src="${Ke(t.poster_path)}"
            alt="${t.title||"Movie poster"}"
            loading="lazy"
          />
          <div class="cat-movie-info">
            <h3 class="cat-movie-title">${t.title||"Untitled"}</h3>
            <p class="cat-movie-meta">${o} | ${r}</p>
            <div class="cat-movie-rating">${n}</div>
          </div>
        </li>
      `}).join("")}}async function D(e=1,t=null,r=""){try{let n;t?n=await De(t,e,r):n=await Re(e);const o=n.results||[];if(Xe(o),o.length===0)return;const a=Math.min(n.total_pages,500);Ye(e,a,s=>{D(s,t,r),window.scrollTo({top:0,behavior:"smooth"})})}catch(n){console.error("Catalog loading error:",n),m&&(m.className="cat-movie-grid cat-movie-grid--empty",m.innerHTML=`
        <li class="cat-empty-message">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>Something went wrong. Please try again later.</p>
        </li>
      `),xe()}}function Qe(){m&&D(1)}ae&&se&&ae.addEventListener("submit",e=>{e.preventDefault();const t=se.value.trim()||(Z==null?void 0:Z.value.trim())||"",r=K==null?void 0:K.textContent.trim(),n=r&&r!=="Year"?r:"";if(!t){D(1);return}D(1,t,n)});Qe();const re="my-library",T=document.querySelector("[data-movie-modal]"),k=document.querySelector("[data-movie-modal-overlay]"),S=document.querySelector("[data-movie-modal-close]"),A=document.querySelector("[data-movie-modal-content]"),et="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster";function F(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ce(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(1):"0.0"}function ne(){try{const e=JSON.parse(localStorage.getItem(re));return Array.isArray(e)?e:[]}catch{return[]}}function le(e){try{return localStorage.setItem(re,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("library:updated")),!0}catch(t){return console.error("Library could not be saved",t),!1}}function tt(){return ne()}function rt(e){return ne().some(t=>Number(t.id)===Number(e))}function nt(e){return{id:e.id,title:e.title||e.name||e.original_title||"Untitled",original_title:e.original_title||e.title||"Untitled",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",release_date:e.release_date||"",vote_average:e.vote_average||0,vote_count:e.vote_count||0,popularity:e.popularity||0,overview:e.overview||"",genres:Ce(e.genres)}}function Ce(e){return Array.isArray(e)?[...new Set(e.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean))]:[]}function ot(e){const t=nt(e),r=ne();return r.some(o=>Number(o.id)===Number(t.id))?!le(r.filter(a=>Number(a.id)!==Number(t.id))):le([...r,t])}async function it(e){const t=await fetch(`${_}/movie/${e}?api_key=${L}`);if(!t.ok)throw new Error("Movie details could not be loaded");return t.json()}function at(e){return e.poster_path?`${ke}/w500${e.poster_path}`:et}function st(e){const t=Ce(e.genres);return t.length===0?"Unknown":t.join(", ")}function ct(e){var r;const t=rt(e.id);A.innerHTML=`
    <img
      class="movie-modal__poster"
      src="${at(e)}"
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
            <span class="movie-modal__rating">${ce(e.vote_average)}</span>
            / ${Number(e.vote_count||0)}
          </dd>
        </div>
        <div>
          <dt>Popularity</dt>
          <dd>${ce(e.popularity)}</dd>
        </div>
        <div>
          <dt>Genre</dt>
          <dd>${F(st(e))}</dd>
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
  `,(r=A.querySelector("[data-library-toggle]"))==null||r.addEventListener("click",n=>{const o=ot(e);n.currentTarget.textContent=o?"Remove from My Library":"Add to My Library"})}function lt(){A.innerHTML=`
    <div class="movie-modal__message">
      <h2 id="movie-modal-title">OOPS...</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  `}function Te(e){e.key==="Escape"&&q()}function dt(){document.addEventListener("keydown",Te),k==null||k.addEventListener("click",q),S==null||S.addEventListener("click",q)}function ut(){document.removeEventListener("keydown",Te),k==null||k.removeEventListener("click",q),S==null||S.removeEventListener("click",q)}function mt(){T&&(T.classList.remove("is-hidden"),document.body.classList.add("modal-open"),dt())}function q(){T&&(T.classList.add("is-hidden"),document.body.classList.remove("modal-open"),ut())}async function oe(e){if(!(!T||!A||!e)){mt(),A.innerHTML='<p class="movie-modal__loading">Loading...</p>';try{const t=await it(e);ct(t)}catch(t){console.error(t),lt()}}}function pt(e){const t=e.target.closest("[data-movie-id]");t&&oe(t.dataset.movieId)}document.addEventListener("click",pt);const P=9,ft="https://placehold.co/500x750/111111/f8f8f8?text=No+Poster",gt=new URL("/goit-js-project/assets/library-hero-fixed-CU0yHl5m.svg",import.meta.url).href,yt=`url("${gt}")`;let f=[],N=[],u="all",B=P;const i={hero:document.querySelector(".js-library-hero"),heroContent:document.querySelector(".js-library-hero-content"),list:document.querySelector(".js-library-list"),empty:document.querySelector(".js-library-empty"),loadMore:document.querySelector(".js-library-load-more"),filter:document.querySelector(".library-filter"),filterButton:document.querySelector(".js-library-filter-button")||document.querySelector(".library-filter__button"),filterMenu:document.querySelector(".js-library-filter-menu")||document.querySelector(".library-filter__menu")};function E(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ht(e){return e.poster_path?`${ke}/w500${e.poster_path}`:ft}function vt(e){return e.release_date?e.release_date.slice(0,4):"Unknown"}function Y(e){return Array.isArray(e.genres)?e.genres.map(t=>typeof t=="string"?t:t==null?void 0:t.name).filter(Boolean):[]}function bt(e){const t=Y(e);return t.length?t.join(", "):"Genre unknown"}function Lt(e){const t=Number(e.vote_average),r=Number.isFinite(t)?t:0;return Math.min(100,Math.max(0,r*10))}function _t(){!i.hero||!i.heroContent||(i.hero.style.backgroundImage=yt,i.hero.style.backgroundPosition="center",i.hero.style.backgroundSize="cover",i.heroContent.innerHTML=`
    <h1 class="library-hero__title">Create Your Dream Cinema</h1>
    <p class="library-hero__text">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films. This guide helps you bring the cinema experience into
      your own home with cozy seating, dim lighting, and movie theater snacks.
    </p>
  `)}function wt(){const e=new Set;return f.forEach(t=>{Y(t).forEach(r=>e.add(r))}),[...e].sort((t,r)=>t.localeCompare(r))}function Mt(){var e,t;return i.filterMenu?((e=i.filterButton)==null?void 0:e.getAttribute("aria-expanded"))==="true"||((t=i.filter)==null?void 0:t.classList.contains("is-open")):!1}function j(e){var t;!i.filterButton||!i.filterMenu||(i.filterButton.setAttribute("aria-expanded",String(e)),i.filterMenu.hidden=!e,i.filterMenu.style.display=e?"block":"none",(t=i.filter)==null||t.classList.toggle("is-open",e))}function Ae(){var r;if(!i.filterButton||!i.filterMenu)return;const e=wt();i.filterButton.textContent=u==="all"?"Genre":u,i.filterButton.disabled=f.length===0,i.filterButton.setAttribute("aria-expanded","false"),i.filterMenu.hidden=!0,i.filterMenu.style.display="none",(r=i.filter)==null||r.classList.remove("is-open"),i.filter&&(i.filter.hidden=f.length===0);const t=e.map(n=>`
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
  `}function qe(){N=u==="all"?[...f]:f.filter(e=>Y(e).includes(u))}function Et(e){const t=e.title||e.original_title||"Untitled",r=Number(e.vote_average||0).toFixed(1);return`
    <li class="movie-card" data-movie-id="${e.id}">
      <button class="movie-card__button" type="button" aria-label="Open ${E(t)} details">
        <img class="movie-card__poster" src="${ht(e)}" alt="${E(t)} poster" />

        <span class="movie-card__gradient"></span>

        <span class="movie-card__info">
          <span class="movie-card__title">${E(t)}</span>

          <span class="movie-card__footer">
            <span class="movie-card__meta">
              ${E(bt(e))} | ${vt(e)}
            </span>

            <span
              class="movie-card__rating"
              style="--rating: ${Lt(e)}%"
              aria-label="Rating ${r} out of 10"
            >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </span>
        </span>
      </button>
    </li>
  `}function X(){if(!i.list||!i.empty||!i.loadMore)return;const e=N.slice(0,B);i.list.innerHTML=e.map(Et).join("");const t=f.length===0,r=f.length>0&&N.length===0;i.empty.hidden=!t&&!r,i.list.hidden=t||r,i.loadMore.hidden=t||r||B>=N.length}function Q(){f=tt(),u!=="all"&&!f.some(e=>Y(e).includes(u))&&(u="all"),B=P,qe(),Ae(),X()}function kt(){var e,t,r;(e=i.loadMore)==null||e.addEventListener("click",()=>{B+=P,X()}),(t=i.filterButton)==null||t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),!(!i.filterMenu||i.filterButton.disabled)&&j(!Mt())}),(r=i.filterMenu)==null||r.addEventListener("click",n=>{n.stopPropagation();const o=n.target.closest("[data-genre]");o&&(n.preventDefault(),u=o.dataset.genre,B=P,j(!1),qe(),Ae(),X())}),document.addEventListener("click",n=>{n.target.closest(".library-filter")||j(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&j(!1)}),window.addEventListener("library:updated",Q),window.addEventListener("storage",n=>{n.key===re&&Q()})}function St(){!i.hero&&!i.list||(_t(),Q(),kt())}St();function $t(e){const t=e.querySelector(".search-bar-year-btn"),r=e.querySelector(".search-bar-year-list"),n=e.querySelector(".search-bar-year-value");!t||!r||(t.addEventListener("click",o=>{o.stopPropagation();const a=e.classList.toggle("is-open");t.setAttribute("aria-expanded",String(a))}),r.querySelectorAll(".search-bar-year-item").forEach(o=>{o.addEventListener("click",()=>{r.querySelectorAll(".search-bar-year-item").forEach(a=>{a.classList.remove("search-bar-year-item--selected"),a.removeAttribute("aria-selected")}),o.classList.add("search-bar-year-item--selected"),o.setAttribute("aria-selected","true"),n.textContent=o.dataset.value,e.classList.add("has-value"),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}))}document.querySelectorAll(".search-bar-year").forEach($t);document.addEventListener("click",()=>{document.querySelectorAll(".search-bar-year.is-open").forEach(e=>{e.classList.remove("is-open"),e.querySelector(".search-bar-year-btn").setAttribute("aria-expanded","false")})});document.querySelectorAll('[data-field="film"] .search-bar-input').forEach(e=>{const t=e.closest(".search-bar-input-wrap");e.addEventListener("input",()=>{t.classList.toggle("has-value",e.value.length>0)})});document.querySelectorAll(".search-bar-clear").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".search-bar-input-wrap"),r=t.querySelector(".search-bar-input");r.value="",t.classList.remove("has-value")})});const xt="https://image.tmdb.org/t/p/original",Be="my-library",c={section:document.querySelector(".upcoming"),status:document.querySelector(".upcoming__status"),wrapper:document.querySelector(".upcoming__wrapper"),image:document.querySelector(".movie-img"),title:document.querySelector(".movie-title"),date:document.querySelector(".upcoming-date"),vote:document.querySelector(".vote"),popularity:document.querySelector(".popularity"),genre:document.querySelector(".genre"),overview:document.querySelector(".overview"),button:document.querySelector(".upcoming .btn")};let h=null;function Ie(){return JSON.parse(localStorage.getItem(Be))||[]}function de(e){localStorage.setItem(Be,JSON.stringify(e))}function He(e){return Ie().some(t=>t.id===e)}function Ue(){h&&(c.button.textContent=He(h.id)?"Remove from My Library":"Add to my Library")}function Ct(){if(!h)return;const e=Ie();if(He(h.id)){const r=e.filter(n=>n.id!==h.id);de(r)}else de([...e,h]);Ue()}function Tt(e){const t=new Date,r=t.getMonth(),n=t.getFullYear();return e.filter(o=>{if(!o.release_date)return!1;const a=new Date(o.release_date);return a.getMonth()===r&&a.getFullYear()===n})}function At(e){return e[Math.floor(Math.random()*e.length)]}function ue(e){c.status.textContent=e,c.status.classList.remove("is-hidden"),c.wrapper.classList.add("is-hidden")}function qt(){c.status.classList.add("is-hidden"),c.wrapper.classList.remove("is-hidden")}function Bt(e){const t=e.vote_average?e.vote_average.toFixed(1):"0.0",r=e.vote_count||0;return`
    <span class="vote-pill">${t}</span>
    <span class="vote-separator">/</span>
    <span class="vote-pill">${r}</span>
  `}async function It(e){const t=await $e(e.genre_ids);h={...e,genres:t},c.image.src=e.backdrop_path?`${xt}${e.backdrop_path}`:"./img/no-poster.png",c.image.alt=e.title||"movie backdrop",c.title.textContent=e.title||"Unknown title",c.date.textContent=e.release_date||"Unknown",c.vote.innerHTML=Bt(e),c.popularity.textContent=e.popularity?e.popularity.toFixed(1):"0.0",c.genre.textContent=t.length?t.join(", "):"Unknown",c.overview.textContent=e.overview||"No overview available.",Ue(),qt()}async function Ht(){if(c.section)try{const t=(await Pe()).results||[],r=Tt(t);if(!r.length){ue("No upcoming movie is available right now.");return}const n=At(r);await It(n),c.button.addEventListener("click",Ct)}catch(e){console.error("Upcoming error:",e),ue("No upcoming movie is available right now.")}}document.addEventListener("DOMContentLoaded",Ht);let v=null,W=[],ee="";function Fe(){return window.innerWidth<768?"mobile":"large"}function Ut(e){return e?`https://image.tmdb.org/t/p/${window.innerWidth<768?"w342":"w500"}${e}`:""}function Ft(e){return`
    <div class="weekly-rating">
      ${te(e,"weekly-star")}
    </div>
  `}async function jt(){if(v=document.querySelector("#weekly-movie"),!!v)try{W=(await Se("week")).results||[],await je(W)}catch(e){console.error("Weekly Trends Error:",e)}}async function je(e){ee=Fe();const t=ee==="mobile"?e.slice(0,1):e.slice(0,3),r=await Promise.all(t.map(async n=>{var l,d;const o=await $e(n.genre_ids||[]),a=o.length>0?o.slice(0,2).join(", "):"Unknown genre",s=((l=n.release_date)==null?void 0:l.slice(0,4))||((d=n.first_air_date)==null?void 0:d.slice(0,4))||"N/A";return`
        <article class="weekly-card" data-movie-id="${n.id}">
          <img
            class="weekly-image"
            src="${Ut(n.poster_path)}"
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
                ${a} | ${s}
              </p>

              ${Ft(n.vote_average)}
            </div>
          </div>
        </article>
      `}));v.innerHTML=r.join(""),Ot()}function Ot(){v.dataset.listenerAttached!=="true"&&(v.addEventListener("click",e=>{const t=e.target.closest("[data-movie-id]");t&&oe(t.dataset.movieId)}),v.dataset.listenerAttached="true")}window.addEventListener("resize",()=>{if(!v||W.length===0)return;Fe()!==ee&&je(W)});const b=document.querySelector("[data-trailer-modal]"),$=document.querySelector("[data-trailer-overlay]"),x=document.querySelector("[data-trailer-close]"),p=document.querySelector("[data-trailer-frame]"),C=document.querySelector("[data-trailer-status]"),g=document.querySelector("[data-trailer-error]");let G=0;function Nt(e=[]){const t=e.filter(r=>r.site==="YouTube"&&/^[\w-]{6,20}$/.test(r.key||""));return t.find(r=>r.type==="Trailer"&&r.official)||t.find(r=>r.type==="Trailer")||t.find(r=>r.type==="Teaser")||t[0]}async function Gt(e){const t=await fetch(`${_}/movie/${e}/videos?api_key=${L}`);if(!t.ok)throw new Error("Trailer could not be loaded");const r=await t.json();return Nt(r==null?void 0:r.results)}function Oe(e){e.key==="Escape"&&I()}function Rt(){document.addEventListener("keydown",Oe),$==null||$.addEventListener("click",I),x==null||x.addEventListener("click",I)}function Dt(){document.removeEventListener("keydown",Oe),$==null||$.removeEventListener("click",I),x==null||x.removeEventListener("click",I)}function Pt(e){C&&(C.textContent=e,C.hidden=!1,g&&(g.hidden=!0))}function me(){C&&(C.hidden=!0),g&&(g.hidden=!1)}function Wt(){return!b||!p?!1:(b.classList.remove("is-hidden"),document.body.classList.add("modal-open"),p.hidden=!0,p.src="",g&&(g.hidden=!0),Pt("Loading trailer..."),Rt(),!0)}function I(){!b||!p||(G+=1,b.classList.add("is-hidden"),document.body.classList.remove("modal-open"),p.src="",p.hidden=!0,g&&(g.hidden=!0),Dt())}async function Yt(e){if(!e||!Wt())return;const t=++G;try{const r=await Gt(e);if(t!==G||b!=null&&b.classList.contains("is-hidden"))return;if(!r){me();return}C.hidden=!0,p.title=`${r.name||"Movie"} trailer`,p.src=`https://www.youtube-nocookie.com/embed/${r.key}?autoplay=1&rel=0`,p.hidden=!1}catch(r){if(t!==G)return;console.error(r),me()}}const J=document.querySelector(".scroll-up");J&&(J.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{J.classList.toggle("is-visible",window.scrollY>300)},{passive:!0}));const pe=document.querySelector(".loader-overlay");function zt(){pe&&pe.classList.add("is-hidden")}zt();const w=document.getElementById("teamModalOverlay"),fe=document.getElementById("openTeamModal"),ge=document.getElementById("closeTeamModal");if(w&&fe&&ge){const e=()=>{w.classList.remove("hidden"),document.body.style.overflow="hidden"},t=()=>{w.classList.add("hidden"),document.body.style.overflow=""};fe.addEventListener("click",e),ge.addEventListener("click",t),w.addEventListener("click",r=>{r.target===w&&t()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!w.classList.contains("hidden")&&t()})}const ye="cinemania-color-mode";function Vt(){Zt(),Kt(),Jt()}function Zt(){const e=window.location.pathname;let t="home";e.includes("catalog")&&(t="catalog"),e.includes("library")&&(t="library"),document.querySelectorAll("[data-page]").forEach(n=>{n.classList.toggle("active",n.dataset.page===t)})}function Kt(){const e=document.querySelector("#menuToggle"),t=document.querySelector(".mobile-nav");!e||!t||(e.addEventListener("click",r=>{r.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("nav-open")}),document.addEventListener("click",r=>{const n=t.contains(r.target),o=e.contains(r.target);!n&&!o&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.classList.remove("open"),document.body.classList.remove("nav-open"))}))}function Jt(){const e=document.querySelector(".theme-toggle");if(!e)return;const r=localStorage.getItem(ye)==="light";document.body.classList.toggle("light-theme",r),e.classList.toggle("active",r),e.addEventListener("click",()=>{const n=!document.body.classList.contains("light-theme");document.body.classList.toggle("light-theme",n),e.classList.toggle("active",n),localStorage.setItem(ye,n?"light":"dark")})}const Xt=1279,he=192,Qt="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";let y=null,O=null;window.addEventListener("resize",nr);async function er(){if(document.getElementById("hero"))try{const t=await Se("day");if(!(t!=null&&t.results)){y=null,R();return}const r=t.results.filter(o=>o.backdrop_path);if(r.length===0){y=null,R();return}const n=Math.floor(Math.random()*r.length);y=r[n],Ge(y)}catch(t){console.error("Hero error:",t),y=null,R()}}function M(e){return new URL(Object.assign({"../img/empty.svg":ve,"../img/favorite.svg":be,"../img/full.svg":Le,"../img/half.svg":_e,"../img/library-hero-fixed.svg":we,"../img/logo.svg":Me,"../img/trailer-not-found.png":Ee})[`../img/${e}`],import.meta.url).href}function tr(){return window.innerWidth<=Xt}function rr(e){return e?window.innerWidth<768?`https://image.tmdb.org/t/p/w780${e}`:`https://image.tmdb.org/t/p/w1280${e}`:""}function Ne(e){const t=(e==null?void 0:e.trim())||"No description";return!tr()||t.length<=he?t:`${t.slice(0,he).trimEnd()}...`}function nr(){O&&cancelAnimationFrame(O),O=requestAnimationFrame(()=>{if(O=null,y){Ge(y);return}R()})}function Ge(e){const t=document.getElementById("hero");if(!t)return;const r=rr(e.backdrop_path),n=e.title||e.name||"Movie";t.innerHTML=`
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
            ${Ne(e.overview)}
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
  `,ir(e)}function R(){var l;const e=document.getElementById("hero");if(!e)return;const t=M("hero-mobile.jpg"),r=M("hero-mobile@2x.jpg"),n=M("hero-tablet.jpg"),o=M("hero-tablet@2x.jpg"),a=M("hero-desktop.jpg"),s=M("hero-desktop@2x.jpg");e.innerHTML=`
    <picture class="hero-bg-picture">
      <source media="(min-width: 1280px)" srcset="${a} 1x, ${s} 2x" />
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
            ${Ne(Qt)}
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" type="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  `,(l=e.querySelector(".btn-primary"))==null||l.addEventListener("click",()=>{window.location.href="./catalog.html"})}function or(e){return!e&&e!==0?"":`
    <div class="hero-rating" aria-label="Movie rating">
      ${te(e,"hero-rating-star")}
    </div>
  `}function ir(e){const t=document.getElementById("hero");if(!t||!(e!=null&&e.id))return;const r=t.querySelector("[data-trailer-id]"),n=t.querySelector("[data-movie-id]");r==null||r.addEventListener("click",o=>{o.preventDefault(),Yt(e.id)}),n==null||n.addEventListener("click",o=>{o.preventDefault(),oe(e.id)})}document.addEventListener("DOMContentLoaded",()=>{Vt(),er(),jt()});
