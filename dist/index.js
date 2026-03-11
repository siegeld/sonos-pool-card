(()=>{var t,e,i,o;function s(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;let r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class c{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}let d=(t,...e)=>new c(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,a),h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new c("string"==typeof(e=i)?e:e+"",void 0,a)})(t):t,p=window,u=p.trustedTypes,_=u?u.emptyScript:"",v=p.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:f},$="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!=(e=this.h)?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(h(i));else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null==(t=this.constructor.h)||t.forEach(t=>t(this))}addController(t){var e,i;(null!=(e=this._$ES)?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null==(i=t.hostConnected)||i.call(t))}removeController(t){var e;null==(e=this._$ES)||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t,e;let i=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return e=this.constructor.elementStyles,n?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let e=document.createElement("style"),o=r.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=t.cssText,i.appendChild(e)}),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;let s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==(null==(o=i.converter)?void 0:o.toAttribute)?i.converter:m).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){let t=o.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:m;this._$El=s,this[s]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$ES)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b[$]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:b}),(null!=(t=p.reactiveElementVersions)?t:p.reactiveElementVersions=[]).push("1.6.3");let y=window,x=y.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,C="?"+E,S=`<${C}>`,k=document,P=()=>k.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,z="[ 	\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,H=/>/g,T=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,j=/"/g,D=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=B(1),L=(B(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),W=new WeakMap,q=k.createTreeWalker(k,129,null,!1);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[l,c]=((t,e)=>{let i=t.length-1,o=[],s,r=2===e?"<svg>":"",n=R;for(let e=0;e<i;e++){let i=t[e],a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,null!==(l=n.exec(i)));)d=n.lastIndex,n===R?"!--"===l[1]?n=O:void 0!==l[1]?n=H:void 0!==l[2]?(D.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=T):void 0!==l[3]&&(n=T):n===T?">"===l[0]?(n=null!=s?s:R,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?T:'"'===l[3]?j:M):n===j||n===M?n=T:n===O||n===H?n=R:(n=T,s=void 0);let h=n===T&&t[e+1].startsWith("/>")?" ":"";r+=n===R?i+S:c>=0?(o.push(a),i.slice(0,c)+w+i.slice(c)+E+h):i+E+(-2===c?(o.push(void 0),e):h)}return[Z(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]})(t,e);if(this.el=G.createElement(l,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=q.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(E)){const i=c[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+w).split(E),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?tt:"@"===e[1]?te:F})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(D.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),q.nextNode(),a.push({type:2,index:++s});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,o){var s,r,n;if(e===L)return e;let a=void 0!==o?null==(s=i._$Co)?void 0:s[o]:i._$Cl,l=N(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null==(r=null==a?void 0:a._$AO)||r.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,i,o),void 0!==o?(null!=(n=i._$Co)?n:i._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,s=(null!=(e=null==t?void 0:t.creationScope)?e:k).importNode(i,!0);q.currentNode=s;let r=q.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new J(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ti(r,this,t)),this._$AV.push(e),l=o[++a]}n!==(null==l?void 0:l.index)&&(r=q.nextNode(),n++)}return q.currentNode=k,s}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,o){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null==(s=null==o?void 0:o.isConnected)||s}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let i;N(t=K(this,t,e))?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):U(i=t)||"function"==typeof(null==i?void 0:i[Symbol.iterator])?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=G.createElement(Z(o.h,o.h[0]),this.options)),o);if((null==(e=this._$AH)?void 0:e._$AD)===s)this._$AH.v(i);else{let t=new X(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new G(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let s of t)o===e.length?e.push(i=new J(this.k(P()),this.k(P()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null==(e=this._$AP)||e.call(this,t))}}class F{constructor(t,e,i,o,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let s=this.strings,r=!1;if(void 0===s)(r=!N(t=K(this,t,e,0))||t!==this._$AH&&t!==L)&&(this._$AH=t);else{let o,n,a=t;for(t=s[0],o=0;o<s.length-1;o++)(n=K(this,a[i+o],e,o))===L&&(n=this._$AH[o]),r||(r=!N(n)||n!==this._$AH[o]),n===V?t=V:t!==V&&(t+=(null!=n?n:"")+s[o+1]),this._$AH[o]=n}r&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}let Y=x?x.emptyScript:"";class tt extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class te extends F{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!=(i=K(this,t,e,0))?i:V)===L)return;let o=this._$AH,s=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==V&&(o===V||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!=(i=null==(e=this.options)?void 0:e.host)?i:this.element,t):this._$AH.handleEvent(t)}}class ti{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}let to=y.litHtmlPolyfillSupport;null==to||to(G,J),(null!=(e=y.litHtmlVersions)?e:y.litHtmlVersions=[]).push("2.8.0");class ts extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;let r=null!=(o=null==i?void 0:i.renderBefore)?o:e,n=r._$litPart$;if(void 0===n){let t=null!=(s=null==i?void 0:i.renderBefore)?s:null;r._$litPart$=n=new J(e.insertBefore(P(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return L}}ts.finalized=!0,ts._$litElement$=!0,null==(i=globalThis.litElementHydrateSupport)||i.call(globalThis,{LitElement:ts});let tr=globalThis.litElementPolyfillSupport;function tn(t){var e;return e={...t,state:!0},(t,i)=>void 0!==i?void t.constructor.createProperty(i,e):"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:{...t,finisher(i){i.createProperty(t.key,e)}}}null==tr||tr({LitElement:ts}),(null!=(o=globalThis.litElementVersions)?o:globalThis.litElementVersions=[]).push("3.3.3");let ta=d`
  ha-card {
    padding: 12px 16px 16px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: var(--ha-card-header-color, var(--primary-text-color));
    padding: 0 0 8px;
    margin: 0;
  }

  .pool-count {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color, #727272);
    background: var(--secondary-background-color, #f5f5f5);
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
  }

  .card-content {
    padding: 0;
  }

  .unassigned {
    display: flex;
    justify-content: center;
    padding: 12px 0;
  }

  .grab-btn,
  .release-btn {
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .grab-btn {
    background-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .grab-btn:hover {
    filter: brightness(1.1);
  }

  .grab-btn:active,
  .release-btn:active {
    transform: scale(0.97);
  }

  .release-btn {
    width: 100%;
    margin-top: 12px;
    background-color: var(--secondary-background-color, #f5f5f5);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, #e0e0e0);
  }

  .release-btn:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .player-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .album-art {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .track-info {
    min-width: 0;
    flex: 1;
  }

  .player-name {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color, #727272);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    font-size: 13px;
    color: var(--secondary-text-color, #727272);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .ctrl-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.2s ease;
  }

  .ctrl-btn:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .ctrl-btn:active {
    transform: scale(0.93);
  }

  .ctrl-btn ha-icon {
    --mdc-icon-size: 28px;
  }

  .volume-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .vol-icon {
    color: var(--secondary-text-color, #727272);
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }

  .volume-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: var(--divider-color, #e0e0e0);
    outline: none;
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    cursor: pointer;
  }

  .volume-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    cursor: pointer;
    border: none;
  }

  /* ── Compact mode ── */

  .compact-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, 0 2px 2px rgba(0,0,0,0.1));
  }

  .compact-wrap.unassigned {
    justify-content: space-between;
  }

  .compact-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .compact-grab {
    padding: 6px 16px;
    font-size: 13px;
  }

  .compact-art {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .compact-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .compact-player {
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color, #727272);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact-artist {
    font-size: 11px;
    color: var(--secondary-text-color, #727272);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
  }

  .compact-btn:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .compact-btn:active {
    transform: scale(0.9);
  }

  .compact-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .compact-btn.vol ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color, #727272);
  }

  .compact-btn.release ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color, #727272);
  }
`;class tl extends ts{static{this.styles=ta}setConfig(t){if(!t.pool)throw Error("pool is required");this._config=t}set hass(t){this._hass=t;let e=`sensor.sonos_pool_${this._config.pool}`,i=t.states[e];if(!i){this._player=null;return}let o=i.attributes.assignments||{};this._poolTotal=i.attributes.total||0,this._poolUsed=Object.keys(o).length;let s=o[this._config.zone_id];if(!s){this._player=null;return}let r=t.states[s];if(!r){this._player=null;return}let n=r.attributes;this._player={entityId:s,friendlyName:n.friendly_name||s.replace("media_player.",""),state:r.state,title:n.media_title||"",artist:n.media_artist||"",picture:n.entity_picture||"",volume:n.volume_level??0}}async _grab(){let t=await this._hass.connection.sendMessagePromise({type:"call_service",domain:"sonos_pool",service:"grab",service_data:{pool:this._config.pool,zone_id:this._config.zone_id},return_response:!0}),e=t?.response;if(!e)return;let{dante_rx_l:i,dante_rx_r:o,nax_entity:s}=this._config;i&&e.dante_tx_l&&this._hass.callService("select","select_option",{entity_id:i,option:e.dante_tx_l}),o&&e.dante_tx_r&&this._hass.callService("select","select_option",{entity_id:o,option:e.dante_tx_r}),s&&e.nax_source&&this._hass.callService("media_player","select_source",{entity_id:s,source:e.nax_source})}_release(){this._hass.callService("sonos_pool","release",{pool:this._config.pool,zone_id:this._config.zone_id})}_mediaCommand(t){this._player&&this._hass.callService("media_player",t,{entity_id:this._player.entityId})}_setVolume(t){if(!this._player)return;let e=parseFloat(t.target.value);this._hass.callService("media_player","volume_set",{entity_id:this._player.entityId,volume_level:e})}render(){return"compact"===this._config.mode?this._renderCompact():this._renderNormal()}_poolBadge(){return I`<span class="pool-count">${this._poolUsed}/${this._poolTotal}</span>`}_renderNormal(){let t=this._friendlyName();if(!this._player)return I`
        <ha-card>
          <div class="card-header">${t} ${this._poolBadge()}</div>
          <div class="card-content unassigned">
            <button class="grab-btn" @click="${this._grab}">Grab</button>
          </div>
        </ha-card>
      `;let e=this._player,i="playing"===e.state;return I`
      <ha-card>
        <div class="card-header">${t} ${this._poolBadge()}</div>
        <div class="card-content assigned">
          <div class="player-info">
            ${e.picture?I`<img class="album-art" src="${e.picture}" />`:V}
            <div class="track-info">
              <div class="player-name">${e.friendlyName}</div>
              ${e.title?I`<div class="title">${e.title}</div>`:V}
              ${e.artist?I`<div class="artist">${e.artist}</div>`:V}
            </div>
          </div>
          <div class="controls">
            <button class="ctrl-btn" @click="${()=>this._mediaCommand("media_previous_track")}">
              <ha-icon icon="mdi:skip-previous"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${()=>this._mediaCommand("media_play_pause")}">
              <ha-icon icon="${i?"mdi:pause":"mdi:play"}"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${()=>this._mediaCommand("media_stop")}">
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${()=>this._mediaCommand("media_next_track")}">
              <ha-icon icon="mdi:skip-next"></ha-icon>
            </button>
          </div>
          <div class="volume-row">
            <ha-icon icon="mdi:volume-medium" class="vol-icon"></ha-icon>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              .value="${String(e.volume)}"
              @change="${this._setVolume}"
              class="volume-slider"
            />
          </div>
          <button class="release-btn" @click="${this._release}">Release</button>
        </div>
      </ha-card>
    `}_friendlyName(){return this._config.name?this._config.name:(this._config.zone_id||"").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}_renderCompact(){if(!this._player)return I`
        <div class="compact-wrap unassigned">
          <span class="compact-name">${this._friendlyName()} (${this._poolUsed}/${this._poolTotal})</span>
          <button class="grab-btn compact-grab" @click="${this._grab}">Grab</button>
        </div>
      `;let t=this._player,e="playing"===t.state;return I`
      <div class="compact-wrap">
        ${t.picture?I`<img class="compact-art" src="${t.picture}" />`:V}
        <div class="compact-info">
          <span class="compact-player">${t.friendlyName}</span>
          ${t.title?I`<span class="compact-title">${t.title}${t.artist?` - ${t.artist}`:""}</span>`:V}
        </div>
        <button class="compact-btn" @click="${()=>this._mediaCommand("media_previous_track")}">
          <ha-icon icon="mdi:skip-previous"></ha-icon>
        </button>
        <button class="compact-btn" @click="${()=>this._mediaCommand("media_play_pause")}">
          <ha-icon icon="${e?"mdi:pause":"mdi:play"}"></ha-icon>
        </button>
        <button class="compact-btn" @click="${()=>this._mediaCommand("media_next_track")}">
          <ha-icon icon="mdi:skip-next"></ha-icon>
        </button>
        <button class="compact-btn vol" @click="${()=>this._mediaCommand("volume_down")}">
          <ha-icon icon="mdi:volume-minus"></ha-icon>
        </button>
        <button class="compact-btn vol" @click="${()=>this._mediaCommand("volume_up")}">
          <ha-icon icon="mdi:volume-plus"></ha-icon>
        </button>
        <button class="compact-btn release" @click="${this._release}">
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
        ${this._poolBadge()}
      </div>
    `}static getConfigElement(){return document.createElement("sonos-pool-card-editor")}static getStubConfig(){return{pool:"",zone_id:"",name:""}}getCardSize(){return"compact"===this._config.mode?1:this._player?4:2}constructor(...t){super(...t),this._player=null,this._poolUsed=0,this._poolTotal=0}}s([tn()],tl.prototype,"_config",void 0),s([tn()],tl.prototype,"_player",void 0),s([tn()],tl.prototype,"_poolUsed",void 0),s([tn()],tl.prototype,"_poolTotal",void 0);let tc=d`
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input,
  select {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background-color: var(
      --ha-card-background,
      var(--card-background-color, #fff)
    );
    color: var(--primary-text-color);
  }
`;class td extends ts{static{this.styles=tc}setConfig(t){this._config=t}set hass(t){this._hass=t,this._discoverPools(),this._discoverDanteRx(),this._discoverNax()}_discoverPools(){let t=[];for(let e of Object.keys(this._hass.states))e.startsWith("sensor.sonos_pool_")&&t.push(e.replace("sensor.sonos_pool_",""));t.sort(),this._pools=t}_discoverDanteRx(){let t=[];for(let[e,i]of Object.entries(this._hass.states))e.startsWith("select.")&&e.includes("_rx_")&&t.push({id:e,name:i.attributes.friendly_name||e});t.sort((t,e)=>t.name.localeCompare(e.name)),this._danteRxEntities=t}_discoverNax(){let t=[];for(let[e,i]of Object.entries(this._hass.states))e.startsWith("media_player.crestron_")&&t.push({id:e,name:i.attributes.friendly_name||e});t.sort((t,e)=>t.name.localeCompare(e.name)),this._naxEntities=t}render(){return I`
      <div class="form">
        <div class="row">
          <label>Name</label>
          <input
            .value="${this._config.name||""}"
            @input="${t=>this._valueChanged("name",t.target.value)}"
            placeholder="Zone name"
          />
        </div>
        <div class="row">
          <label>Pool</label>
          <select
            @change="${t=>this._valueChanged("pool",t.target.value)}"
          >
            <option value="" ?selected="${!this._config.pool}">
              Select a pool...
            </option>
            ${this._pools.map(t=>I`
                <option
                  value="${t}"
                  ?selected="${this._config.pool===t}"
                >
                  ${t}
                </option>
              `)}
          </select>
        </div>
        <div class="row">
          <label>Mode</label>
          <select
            @change="${t=>this._valueChanged("mode",t.target.value)}"
          >
            <option value="normal" ?selected="${"compact"!==this._config.mode}">
              Normal
            </option>
            <option value="compact" ?selected="${"compact"===this._config.mode}">
              Compact
            </option>
          </select>
        </div>
        <div class="row">
          <label>Zone ID</label>
          <input
            .value="${this._config.zone_id||""}"
            @input="${t=>this._valueChanged("zone_id",t.target.value)}"
            placeholder="e.g. kitchen"
          />
        </div>
        <div class="row">
          <label>Dante RX Left</label>
          <select
            @change="${t=>this._valueChanged("dante_rx_l",t.target.value)}"
          >
            <option value="" ?selected="${!this._config.dante_rx_l}">
              None
            </option>
            ${this._danteRxEntities.map(t=>I`
                <option
                  value="${t.id}"
                  ?selected="${this._config.dante_rx_l===t.id}"
                >
                  ${t.name}
                </option>
              `)}
          </select>
        </div>
        <div class="row">
          <label>Dante RX Right</label>
          <select
            @change="${t=>this._valueChanged("dante_rx_r",t.target.value)}"
          >
            <option value="" ?selected="${!this._config.dante_rx_r}">
              None
            </option>
            ${this._danteRxEntities.map(t=>I`
                <option
                  value="${t.id}"
                  ?selected="${this._config.dante_rx_r===t.id}"
                >
                  ${t.name}
                </option>
              `)}
          </select>
        </div>
        <div class="row">
          <label>NAX Entity</label>
          <select
            @change="${t=>this._valueChanged("nax_entity",t.target.value)}"
          >
            <option value="" ?selected="${!this._config.nax_entity}">
              None
            </option>
            ${this._naxEntities.map(t=>I`
                <option
                  value="${t.id}"
                  ?selected="${this._config.nax_entity===t.id}"
                >
                  ${t.name}
                </option>
              `)}
          </select>
        </div>
      </div>
    `}_valueChanged(t,e){let i={...this._config};void 0===e||""===e?delete i[t]:i[t]=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}constructor(...t){super(...t),this._pools=[],this._danteRxEntities=[],this._naxEntities=[]}}s([tn()],td.prototype,"_config",void 0),s([tn()],td.prototype,"_hass",void 0),s([tn()],td.prototype,"_pools",void 0),s([tn()],td.prototype,"_danteRxEntities",void 0),s([tn()],td.prototype,"_naxEntities",void 0),customElements.define("sonos-pool-card",tl),customElements.define("sonos-pool-card-editor",td),window.customCards=window.customCards||[],window.customCards.push({type:"sonos-pool-card",name:"Sonos Pool",description:"Grab/release Sonos speakers from a pool with media controls"})})();
//# sourceMappingURL=index.js.map
