// Task 5.0
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  // Task 1.0
  const mainEl = document.querySelector('main');
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
  const topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
  topMenuEl.style.height = '100%';
  
  // Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Task 2.3
  topMenuEl.classList.add('flex-around');
  
  // Task 3.1
  // Create and append menu links to top menu
  menuLinks.forEach(link => {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', link.href);
    newLink.textContent = link.text;
    topMenuEl.appendChild(newLink);
  });
  
  // Task 4.0
  const subMenuEl = document.getElementById('sub-menu');
  
  // Task 4.1
  subMenuEl.style.height = '100%';
  
  // Task 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  // Task 4.3
  subMenuEl.classList.add('flex-around');
  
  // Task 4.4
  subMenuEl.style.position = 'absolute';
  
  // Task 4.5
  subMenuEl.style.top = '0';
  
  // Task 5.1
  const topMenuLinks = document.querySelectorAll('#top-menu a');
  let showingSubMenu = false;
  
  // Task 5.2 through 5.8
  document.getElementById('top-menu').addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    
    const clickedLink = event.target;
    const linkText = clickedLink.textContent;
    
    if (clickedLink.classList.contains('active')) {
      clickedLink.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    }
    
    topMenuLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    clickedLink.classList.add('active');
    
    const link = menuLinks.find(item => item.text === linkText);
    showingSubMenu = link.subLinks ? true : false;
    
    if (showingSubMenu) {
      buildSubMenu(link.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
      mainEl.innerHTML = `<h1>${linkText}</h1>`;
    }
  });
  
  // Task 6.0
  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    
    console.log(event.target.textContent); // Task 6.0
    
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    
    // Task 6.2
    topMenuLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Task 6.3
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
  
 
  