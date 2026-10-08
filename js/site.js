/* ===== EDIT YOUR BUSINESS INFO + PARTNERS HERE (used on every page) ===== */
window.SITE={
  name:"Storehouse Lending",
  legalNames:["Storehouse Lending"],
  address:"100 W. Valencia Mesa Dr, Ste 205, Fullerton, CA 92835",
  phone:"714-770-0778",
  email:"info@storehouselending.com",
  license:"DRE# 02181947 | NMLS# 2342350",
  partners:[ /* logo = file in /images; url = partner website */
    {name:"Partner One",url:"https://example.com",logo:"images/partner1.png"},
    {name:"Partner Two",url:"https://example.com",logo:"images/partner2.png"},
    {name:"Partner Three",url:"https://example.com",logo:"images/partner3.png"},
    {name:"Realty Peoples",url:"https://realtypeoples.com",logo:"images/realtypeoples.png"}
  ]
};
(function(){
  var S=SITE,pages=[["index.html","Home"],["loans.html","Loans"],["calculator.html","Mortgage Calculator"],["tracker.html","Loan Tracker"],["about.html","About Us"]];
  var here=location.pathname.split('/').pop()||"index.html";
  var nav=pages.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==here?' class="active"':'')+'>'+p[1]+'</a>'}).join('');
  document.getElementById('site-header').innerHTML='<header><div class="wrap"><a class="brand" href="index.html">STOREHOUSE LENDING</a><nav>'+nav+'</nav></div></header>';
  var logos=S.partners.map(function(p){return '<a href="'+p.url+'" target="_blank" rel="noopener" title="'+p.name+'"><img src="'+p.logo+'" alt="'+p.name+'" onerror="this.replaceWith(document.createTextNode(\''+p.name+'\'))"></a>'}).join('');
  document.getElementById('site-footer').innerHTML='<footer><div class="wrap"><div class="fgrid"><div><h4>'+S.name+'</h4><div>'+S.legalNames.join('<br>')+'</div></div><div><h4>Contact</h4><div>'+S.address+'<br>'+S.phone+'<br><a href="mailto:'+S.email+'">'+S.email+'</a></div></div><div><h4>Explore</h4>'+pages.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>'}).join('<br>')+'</div></div><div class="partners">'+logos+'</div><div class="legal">'+S.license+'<br>&copy; '+new Date().getFullYear()+' '+S.name+'. All rights reserved. Loan programs are subject to borrower eligibility and underwriting approval. This is not a commitment to lend.</div></div></footer>';
})();
