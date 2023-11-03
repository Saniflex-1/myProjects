const dark = document.querySelector('.black');
const light = document.querySelector('.light');
const change = document.querySelector('.change');
const change1 = document.querySelector('.change1');
const dd = document.querySelector('.dd')



change.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color= 'white'
});

change1.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color= 'blue'
    // dd.textContent = 'dark';

});