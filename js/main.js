// Є текстове поле на сторінці.
// Під час фокусування на цьому полі збоку з'являється <div>.
// При зникненні фокусу - <div> так само зникає.


// отримуємо елемент "p" з "html"
let textRef = document.querySelector('p');

// створюємо тег "form"
let formRef = document.createElement('form');

// створюємо тег "input"
let inputRef = document.createElement('input');

// після тега "p" додаємо тег "form"
textRef.after(formRef);

// створюємо "ghost div"
let ghostDiv = document.createElement('div');

// усередину тега "form" додаємо тег "input" та "ghost div"
formRef.append(inputRef, ghostDiv);

// focus
inputRef.addEventListener('focus', function () {
    ghostDiv.style.display = 'inline-block';
    ghostDiv.textContent = 'div - привид';
    ghostDiv.style.marginLeft = '15px';
    ghostDiv.style.backgroundColor = 'orange';
    ghostDiv.style.border = '1px solid black';
    ghostDiv.style.padding = '0 10px';
});

// blur
inputRef.addEventListener('blur', () => ghostDiv.style.display = 'none');