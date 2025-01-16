let plus = document.querySelectorAll('.questions__plus')
let cross = document.querySelectorAll('.questions__cross')

plus.forEach(elem=>{
    elem.addEventListener('click', function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.nextElementSibling.style.display = elem.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.querySelector('.questions__answer').style.display = elem.previousElementSibling.querySelector('.questions__answer').style.display ==='block' ? 'none' : 'block';
    })
})

cross.forEach(elem=>{
    elem.addEventListener('click', function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.style.display = elem.previousElementSibling.style.display === 'block' ? 'none' : 'block';
        elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer').style.display = elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer').style.display ==='none' ? 'block' : 'none';
        console.log(elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer').style.display)
        
})
}
)