
const mainbox=document.querySelector('.box')
const welcometext = document.querySelector('.welcometext')
const welcome = document.querySelector('.background')
const smallbox = document.querySelector('.ybox');
const menu = document.querySelector('.menu');
const heading = document.querySelectorAll('.heading');
const reviewstext = document.querySelector('.reviews')
const reviewer = document.querySelector('.reviwer')
const dropdown = document.querySelector('.dropdown-content')
const menuitems = document.querySelectorAll('.item')
const booking = document.querySelector('.bookingbutton')
const mainbody = document.querySelector('.lowerbody')
const contactbutton = document.querySelector('.contactmenu')
const homebutton = document.querySelector('.home') 
const servicebutton = document.querySelector('.services') 
const contactpage = document.querySelector('.contactpage')
const footer = document.querySelector('.footer')
const servicepagecontainer = document.querySelector('.servicepagecontainer')

const reviews = [['"A hidden gem in Bordesley Green. An amazing stylist and kind soul"','- Hijabi Xplorer '],
['"Fantastic experience! Love my new hair style. Lovely staff and nicest hair cut I’ve ever had"','- Fiona Jones'],
['"done an amazing job on my hair today absolutely love it thank you"', '- Heidi Rowland'],
['"Very professional. I have a lot of hair and they treat my hair with respect. I felt welcomed all the time"','- Alejandra Maldonado'],
['"Absolutely in love with my hair went in with awful hair came out with fabulous hair"','- mark moran'],
['"Outstanding service! For the past two years, my daughter and I have had our hair done here regularly. Every visit has been nothing short of excellent"', '- Suyi Abbas'],
['"Had an amazing experience Today at Abellas, the staff were so welcoming and  honestly could not be happier with results"','- Asia Maleeha']]

setTimeout(() => {
    menu.style.visibility = 'visible'
    
    menu.style.opacity="1"


    mainbody.style.display='block'
    footer.style.display='grid'
    heading.forEach(heading => {
        heading.style.opacity = "1";
    });
}, 3700);

setTimeout(() => {
    mainbody.style.opacity="1"
    footer.style.opacity="1"

    smallbox.style.transform = "translateY(-100%)";
}, 3800);

setTimeout(() => {
    welcometext.style.opacity="0"
}, 1700);


setTimeout(() => {
    welcome.style.opacity="1"
}, 1600);

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    reviewstext.style.opacity = 0;
    reviewer.style.opacity = 0;
    setTimeout(() => {
        reviewstext.textContent = reviews[randomIndex][0];
        reviewstext.style.opacity = 1;

        reviewer.textContent = reviews[randomIndex][1];
        reviewer.style.opacity = 1;

    }, 500); // Delay to allow fading out before changing text
}, 5200);





function toggleMenu() {
    var menuButton = document.querySelector('.menubutton');
    menuButton.classList.toggle('menu-open');
    dropdown.classList.toggle('menuwidth');


    menuitems.forEach(items => {
        items.classList.toggle('itemsvisibility');
    
    });

    setTimeout(() => {
        menuitems.forEach(items => {
            items.classList.toggle('itemsopacity');
        
        });
    }, 500);

   
    
  }



  
setTimeout(() => {

    const speed = .5;
    const smallboxHeight = smallbox.offsetHeight;
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    function updateSpeed() {
        if (mediaQuery.matches) {
            smallbox.style.transition  = "all .1s ease" // Speed for mobile devices
        } else {
            smallbox.style.transition  = "all 1s ease" // Speed for non-mobile devices
        }
    }
    // Initial speed
    updateSpeed();

    // Listen for changes in the media query match status
    mediaQuery.addEventListener('change', updateSpeed);


    window.addEventListener('scroll', function () {
      // Calculate the new position of the parallax element based on scroll position
      const yPos = (window.scrollY * speed)+smallboxHeight;
  
      // Apply the new position
      smallbox.style.transform = `translateY(${-yPos}px)`;
    });

}, 5500);

function pagetransition(){
    welcome.style.opacity="0";

    setTimeout(() => {
        welcometext.style.opacity='1';
    }, 2000);
    
    setTimeout(() => {
        welcometext.style.opacity='0';
    }, 2800);
  
    mainbox.classList.add('contract');

    setTimeout(() => {
        mainbox.classList.remove('contract');
        mainbox.classList.add('expand');
    }, 3000);
}

function basenavigation(){
    pagetransition()
    welcome.style.transition= 'opacity 1s ease';

    mainbody.style.opacity='0'
    footer.style.opacity='0'
    menu.style.opacity="0"


    setTimeout(() => {
        mainbody.style.display='none'
        footer.style.display='none'
        menu.style.visibility = 'hidden'

    }, 1000);

    setTimeout(() => {
        menu.style.opacity="1"
        menu.style.visibility = 'visible'

    }, 4000);


    heading.forEach(heading => {
        heading.style.opacity = "0";
    });
}


function adjustFooterMargin() {
; 
    const viewportHeight = window.innerHeight;
    let contentHeight
    let margin = 0;
    
    if (window.getComputedStyle(contactpage).display=='block'){
        contentHeight=contactpage.scrollHeight
            margin = contentHeight- viewportHeight + 60; 
        
    }

    
    
    if (window.getComputedStyle(servicepagecontainer).display=='block'){
        contentHeight=servicepagecontainer.scrollHeight
            margin = contentHeight- viewportHeight + 200; 
            
    }

        
 
    

    footer.style.marginTop = `${margin}px`;
}





window.addEventListener('resize', adjustFooterMargin);


function homenavigation(){
    pagetransition()
    setTimeout(() => {
        adjustFooterMargin();
    }, 4100);
    contactbutton.style.display='block'
    homebutton.style.display='none'
    servicebutton.style.display='block'
    contactpage.style.display='none'
    servicepagecontainer.style.display='none'
    mainbody.style.display='none'
    footer.style.display='none'
    mainbody.style.opacity='0'
    footer.style.opacity='0'
    welcome.style.transition= 'opacity 6s ease';
    mainbody.style.transition = "all 2s ease"

    menu.style.opacity="0"

    setTimeout(() => {
        menu.style.borderBottom = '4px solid black';

    }, 400);


    setTimeout(() => {
        if(booking.style.display=='none'){
            booking.style.display='block'
        }
        menu.style.visibility = 'hidden'
        
        
    }, 1000);

    setTimeout(() => {
        welcome.style.opacity="1"
    }, 2000);

    setTimeout(() => {
        menu.style.opacity="1"
        menu.style.visibility = 'visible'
        heading.forEach(heading => {
            heading.style.opacity = "1";
        });
        mainbody.style.display='block'
        footer.style.display='grid'
        footer.style.opacity='1'

    }, 4000);

    setTimeout(() => {
        mainbody.style.opacity='1'

    }, 4200);

    setTimeout(() => {
        mainbody.style.transition = "all .5s ease"
    }, 4400);


 
}

function bookingpage(){
    basenavigation()
    setTimeout(() => {
        adjustFooterMargin();
    }, 4100);
    contactbutton.style.display='none'
    homebutton.style.display='block'
    servicebutton.style.display='block'
    booking.style.display='none'
    servicepagecontainer.style.display='none'

    setTimeout(() => {
        menu.style.borderBottom = '2px solid rgb(221, 221, 221)';
    }, 2400);
    
    setTimeout(() => {
        contactpage.style.display='block'
        footer.style.display='grid'
        footer.style.opacity='1'
    }, 4000);


    // also include removing the booking button 
    // also include removing stuff from service page
}

function servicepage(){
    basenavigation()
    setTimeout(() => {
        adjustFooterMargin();
    }, 4100);;
    contactbutton.style.display='block'
    homebutton.style.display='block'
    servicebutton.style.display='none'
    
    if (contactpage.style.display=='block'){
        contactpage.style.display='none'
        setTimeout(() => {
            menu.style.borderBottom = '4px solid black';
    
        }, 400);
    
        setTimeout(() => {
            booking.style.display='block'
        }, 1000);
        
    }

    setTimeout(() => {
        servicepagecontainer.style.display='block'
        footer.style.display='grid'
        footer.style.opacity='1'
    }, 4000);
}






booking.addEventListener('click',()=>{
    bookingpage()
    
})

contactbutton.addEventListener('click',event=>{
    const target = event.target.getAttribute('data-target');
    history.pushState({ page: target }, '', `/${target}`);
    bookingpage()
    toggleMenu()
})

servicebutton.addEventListener('click', event => {
    const target = event.target.getAttribute('data-target');
    history.pushState({ page: target }, '', `/${target}`);
    servicepage();
    toggleMenu();
  });

homebutton.addEventListener('click',event=>{
    const target = event.target.getAttribute('data-target');
    history.pushState({ page: target }, '', `/${target}`);
    homenavigation()
    toggleMenu()
})


document.querySelector('.opening').addEventListener('click', function() {
    document.getElementById('OpeningTimes').scrollIntoView({ behavior: 'smooth' });});