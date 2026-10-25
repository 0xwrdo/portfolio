/* Light / dark theme: light by default, remembers manual choice */
(function(){
  var root=document.documentElement,KEY='rk-theme',saved=null;
  try{saved=localStorage.getItem(KEY)}catch(e){}
  function current(){return saved==='dark'?'dark':'light'}
  function apply(){
    var t=current();root.setAttribute('data-theme',t);
    var m=document.querySelector('meta[name="theme-color"]');
    if(m)m.setAttribute('content',t==='dark'?'#111110':'#F4F4F0');
    var b=document.querySelector('.theme-toggle');
    if(b){
      b.setAttribute('aria-pressed',t==='dark');
      b.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' mode');
      b.innerHTML='<span class="ti" aria-hidden="true">'+(t==='dark'?'\u2600':'\u263E')+'</span><span>'+(t==='dark'?'Light':'Dark')+'</span>';
    }
  }
  apply();
  document.addEventListener('DOMContentLoaded',function(){
    var ul=document.querySelector('.rk-links');
    if(ul){
      var li=document.createElement('li'),b=document.createElement('button');
      b.type='button';b.className='theme-toggle';
      b.addEventListener('click',function(){
        saved=current()==='dark'?'light':'dark';
        try{localStorage.setItem(KEY,saved)}catch(e){}
        apply();
      });
      li.appendChild(b);ul.appendChild(li);
    }
    apply();
  });
})();
