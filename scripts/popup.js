var btnpopup = document.getElementById('btn-popup'),
btnpopup2 = document.getElementById('btn-popup2'),
btnpopup3 = document.getElementById('btn-popup3'),
overlay = document.getElementById('overlay'),
overlay2 = document.getElementById('overlay2'),
overlay3 = document.getElementById('overlay3'),
popup = document.getElementById('popup'),
popup2 = document.getElementById('popup2'),
popup3 = document.getElementById('popup3'),
Btncerrarpopup = document.getElementById('btn-cerrar-popup');
Btncerrarpopup2 = document.getElementById('btn-cerrar-popup2');
Btncerrarpopup3 = document.getElementById('btn-cerrar-popup3');

btnpopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});
Btncerrarpopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnpopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});
Btncerrarpopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

btnpopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});
Btncerrarpopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});




