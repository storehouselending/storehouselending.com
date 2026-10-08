/* ===== EDIT YOUR BUSINESS INFO + PARTNERS HERE (used on every page) ===== */
window.SITE={
  name:"Storehouse Lending",
  legalNames:["Storehouse Lending"],
  address:"100 W. Valencia Mesa Dr, Ste 205, Fullerton, CA 92835",
  phone:"714-770-0778",
  email:"info@storehouselending.com",
  license:"DRE# 02181947 | NMLS# 2342350",
  partners:[ /* logo = file in /images (.png or .jpg both work); url = partner website, or "" for no link */
    {name:"Petersburg Partners",url:"",logo:"images/partner-petersburg.jpg"},
    {name:"Lienbridge",url:"",logo:"images/partner-lienbridge.jpg"},
    {name:"Realty Peoples",url:"https://realtypeoples.com",logo:"images/realtypeoples.jpg"}
  ]
};
(function(){
  var S=SITE,pages=[["index.html","Home"],["loans.html","Loans"],["calculator.html","Mortgage Calculator"],["tracker.html","Loan Tracker"],["about.html","About Us"]];
  var here=location.pathname.split('/').pop()||"index.html";
  var nav=pages.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==here?' class="active"':'')+'>'+p[1]+'</a>'}).join('');
  document.getElementById('site-header').innerHTML='<header><div class="wrap"><a class="brand" href="index.html"><span>STOREHOUSE LENDING</span><img src="images/logo.jpg" alt="" onerror="this.remove()"></a><button class="menu-btn" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button><nav>'+nav+'</nav></div></header>';
  // mobile menu: the button only shows on small screens (see css)
  var hdr=document.querySelector('header'),btn=hdr.querySelector('.menu-btn');
  function setOpen(o){hdr.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')}
  btn.addEventListener('click',function(e){e.stopPropagation();setOpen(!hdr.classList.contains('open'))});
  document.addEventListener('click',function(e){if(!hdr.contains(e.target))setOpen(false)});
  var logos=S.partners.map(function(p){var tag=p.url?'a href="'+p.url+'" target="_blank" rel="noopener"':'span';return '<'+tag+' title="'+p.name+'"><img src="'+p.logo+'" alt="'+p.name+'" onerror="if(/\\.png$/.test(this.src)){this.src=this.src.replace(/\\.png$/,\'.jpg\')}else{this.replaceWith(document.createTextNode(\''+p.name+'\'))}"></'+(p.url?'a':'span')+'>'}).join('');
  document.getElementById('site-footer').innerHTML='<footer><div class="wrap"><div class="fgrid"><div><h4>'+S.name+'</h4><div>'+S.legalNames.join('<br>')+'</div></div><div><h4>Contact</h4><div>'+S.address+'<br>'+S.phone+'<br><a href="mailto:'+S.email+'">'+S.email+'</a></div></div><div><h4>Explore</h4>'+pages.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>'}).join('<br>')+'</div></div><div class="partners">'+logos+'</div><div class="legal">'+S.license+'<br>&copy; '+new Date().getFullYear()+' '+S.name+'. All rights reserved. Loan programs are subject to borrower eligibility and underwriting approval. This is not a commitment to lend.</div></div></footer>';
})();
