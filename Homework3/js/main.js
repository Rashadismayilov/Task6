let search = document.getElementById('axtaris');
let help = document.getElementById('help')
let x = document.getElementById('eks')
let language = document.getElementById('lang')
let flag = document.getElementById('flags')

search.addEventListener('click', function(e){
   e.preventDefault();
   help.classList.toggle('active');
   flag.classList.remove('active1');
})

x.addEventListener('click', function() {
    help.classList.remove('active');
})

language.addEventListener('click',function(e){
    e.preventDefault();
    flag.classList.toggle('active1');
    down.classList.toggle('active2')
})
