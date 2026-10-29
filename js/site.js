/* Header, footer and business details are written directly in each page's HTML
   (so search engines and AI assistants can read them). This script only adds behavior. */
(function(){
  // mobile menu: the button only shows on small screens (see css)
  var hdr=document.querySelector('header'),btn=hdr&&hdr.querySelector('.menu-btn');
  if(btn){
    function setOpen(o){hdr.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')}
    btn.addEventListener('click',function(e){e.stopPropagation();setOpen(!hdr.classList.contains('open'))});
    document.addEventListener('click',function(e){if(!hdr.contains(e.target))setOpen(false)});
  }
  // keep the copyright year current
  document.querySelectorAll('.yr').forEach(function(y){y.textContent=new Date().getFullYear()});
})();
