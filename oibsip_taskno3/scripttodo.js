const input = document.querySelector('input');
const btn = document.querySelector('.enter > button');
const pending = document.querySelector('.pending');
const completed = document.querySelector('.completed');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) addList();
});

function addList() {
    if (!input.value) return;

    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    input.value = '';

    const checkBtn = createButton('check');
    const delBtn = createButton('delete');
    newLi.append(checkBtn, delBtn);

    checkBtn.addEventListener('click', () => {
        newLi.remove();
        completed.append(newLi);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', () => newLi.remove());
    pending.append(newLi);
}

function createButton(type) {
    const btn = document.createElement('button');
    const iconClass = type === 'check' ? 'fa-check blue-color' : 'fa-close red-color';
    btn.innerHTML = `<i class="fa ${iconClass}"></i>`;
    return btn;
}