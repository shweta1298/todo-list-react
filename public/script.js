const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.list-container')
console.log('document :>> ', document);
draggables.forEach((draggable) => {
    console.log('draggable :>> ', draggable);
    draggable.addEventListener('dragstart', () => {
        console.log('dragstart');
    })
})