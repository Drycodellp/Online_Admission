import{r as t,j as i,f as s,i as e,h,H as n,c as r}from"./p-a0aececd.js";const o=(t,i)=>{const s=a(t,i);return s&&t.ownerDocument?t.ownerDocument.importNode(s.content,!0).children[0]:null},a=(t,i)=>{switch(i){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},l=(t,i,s,e,h,n,r,o,a,l,c,u)=>{const d=[],m=u+c;for(let f=c;f<m;f++){const c=t[f];if(h){const i=h(c,f,t);null!=i&&d.push({i:l++,type:"header",value:i,index:f,height:s?s(i,f):r,reads:s?0:2,visible:!!s})}if(d.push({i:l++,type:"item",value:c,index:f,height:i?i(c,f):a,reads:i?0:2,visible:!!i}),n){const i=n(c,f,t);null!=i&&d.push({i:l++,type:"footer",value:i,index:f,height:e?e(i,f):o,reads:e?0:2,visible:!!e})}}return d},c=class{constructor(i){t(this,i),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,i,s)=>{const e=i.find(i=>"item"===i.type&&i.index===t);return e?s[e.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,i=-1){if(!this.items)return;const s=-1===i?this.items.length-t:i,e=((t,i)=>0===i?0:i===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===i))(this.cells,t),h=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,e,t,s);this.cells=((t,i,s)=>{if(0===s&&i.length>=t.length)return i;for(let e=0;e<i.length;e++)t[e+s]=i[e];return t})(this.cells,h,e),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),i(this.readVS.bind(this)),s(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:i,el:s}=this;let e=0,h=s;for(;h&&h!==t;)e+=h.offsetTop,h=h.parentElement;this.viewportOffset=e,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)}writeVS(){const t=this.indexDirty,i=(n=this.currentScrollTop-this.viewportOffset,r=this.viewportHeight,{top:Math.max(n-100,0),bottom:n+r+100}),s=this.getHeightIndex(),h=((t,i)=>{const s=i.top,e=i.bottom;let h=0;for(;h<t.length&&!(t[h]>s);h++);const n=Math.max(h-2-1,0);for(;h<t.length&&!(t[h]>=e);h++);return{offset:n,length:Math.min(h+2,t.length)-n}})(s,i);var n,r;((t,i,s)=>t<=s.offset+s.length||i.offset!==s.offset||i.length!==s.length)(t,this.range,h)&&(this.range=h,((t,i,s,e)=>{for(const o of t)o.change=0,o.d=!0;const h=[],n=e.offset+e.length;for(let o=e.offset;o<n;o++){const e=s[o],n=t.find(t=>t.d&&t.cell===e);if(n){const t=i[o];t!==n.top&&(n.top=t,n.change=1),n.d=!1}else h.push(e)}const r=t.filter(t=>t.d);for(const o of h){const s=r.find(t=>t.d&&t.cell.type===o.type),e=o.i;s?(s.d=!1,s.change=2,s.cell=o,s.top=i[e]):t.push({d:!1,cell:o,visible:!0,change:2,top:i[e]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,s,this.cells,h),this.nodeRender?((t,i,s,e)=>{const h=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),n=h.length;let r;for(let a=0;a<s.length;a++){const l=s[a],c=l.cell;if(2===l.change){if(a<n)r=h[a],i(r,c,a);else{const s=o(t,c.type);r=i(s,c,a)||s,r.classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=h[a];0!==l.change&&(r.style.transform=`translate3d(0,${l.top}px,0)`);const u=c.visible;l.visible!==u&&(u?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),l.visible=u),c.reads>0&&(e(c,r),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&e(this))}updateCellHeight(t,i){const s=()=>{if(i.$ionCell===t){const s=window.getComputedStyle(i),e=i.offsetHeight+parseFloat(s.getPropertyValue("margin-bottom"));this.setCellHeight(t,e)}};i&&i.componentOnReady?i.componentOnReady().then(s):s()}setCellHeight(t,i){const s=t.i;t===this.cells[s]&&(t.height===i&&!0===t.visible||(t.visible=!0,t.height=i,this.indexDirty=Math.min(this.indexDirty,s),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,i)=>{if(!t)return new Uint32Array(i);if(t.length===i)return t;if(i>t.length){const s=new Uint32Array(i);return s.set(t),s}return t.subarray(0,i)})(this.heightIndex,this.cells.length),this.totalHeight=((t,i,s)=>{let e=t[s];for(let h=s;h<t.length;h++)t[h]=e,e+=i[h].height;return e})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{i.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:i,value:s,index:e}=t.cell;switch(i){case"item":return this.renderItem(s,e);case"header":return this.renderHeader(s,e);case"footer":return this.renderFooter(s,e)}}render(){return h(n,{style:{height:this.totalHeight+"px"}},this.renderItem&&h(u,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return r(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},u=({dom:t},i,s)=>s.map(i,(i,s)=>{const e=t[s],h=i.vattrs||{};let n=h.class||"";return n+="virtual-item ",e.visible||(n+="virtual-loading"),Object.assign(Object.assign({},i),{vattrs:Object.assign(Object.assign({},h),{class:n,style:Object.assign(Object.assign({},h.style),{transform:`translate3d(0,${e.top}px,0)`})})})});c.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";export{c as ion_virtual_scroll}