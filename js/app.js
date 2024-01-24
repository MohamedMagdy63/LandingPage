/* Declare Variabels
--git navList id of ul
--git all sections tags stored in an array
--the height of showing button
--maps on all sections id
--maps on data of navigation
*/
const navList = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");
const topButtonId = document.getElementById('topButton');
const scrollHeight = 40

// button shows after 40 px from the top
window.onscroll = function() {
    topScrolling()
};
// function to display th button
function topScrolling() {
    if (document.body.scrollTop > scrollHeight) {
        topButtonId.style.display = "block";
    } else {
        topButtonId.style.display = "none";
    }
}
// function that called by the button to return back
function topFunction() {
    document.body.scrollTop = 0;
};

// function to help for scrolling to target 

const CreateNavbar = ()=>{
    allSections.forEach(x=>{
        const li = document.createElement('li')
        li.classList.add('menu__link')
        li.textContent = x.getAttribute("data-nav")
        navList.appendChild(li)
    })
}
CreateNavbar()


// function to apply activ state 'link' to li tag and scroll to selected section
const selector = () => {
    const listItems = document.querySelectorAll(".menu__link")
    listItems.forEach(element => {
        element.addEventListener("click", function() {
            [...element.parentElement.children].forEach(el => el.classList.remove('link'));
            element.classList.add('link');
            allSections.forEach(x=>{
                if(element.innerHTML === x.getAttribute("data-nav")){
                window.scrollTo({ top:x.offsetTop, behavior:  'smooth'})
                }
            })
        });
    })

}
selector()
// set your-active-class 
const setActive=()=>{
    window.addEventListener('scroll',(e)=>{
        allSections.forEach(item=>{
            const position =  Math.floor(item.getBoundingClientRect().top)
            if(position<175 && position>=-175){
                item.classList.add('your-active-class')
            }else{
                item.classList.remove('your-active-class')
            }
        })
        e.preventDefault()
    })
}
setActive()