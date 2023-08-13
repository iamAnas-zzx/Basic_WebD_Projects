const draggables = document.querySelectorAll('.drag');
const conatiners = document.querySelectorAll('.container');

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging')
    })
})

//this function will help to specify where 
//pointer lies on screen in the drag space.

conatiners.forEach(conatiner => {

    conatiner.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const afterElement = getDragElement(conatiner, e.clientY);
        const draggable = document.querySelector('.dragging');
        if(afterElement == null){
            conatiner.appendChild(draggable);
        }else{
            conatiner.insertBefore(draggable ,afterElement)
        }
    
    })
})

function getDragElement(conatiner, y ){
    //selecting every draggable in the container except the selected one.
    const delememts = [...conatiner.querySelectorAll('.drag:not(.dragging)')];
    //have understand reduce funtion well.
    return delememts.reduce((closest,child) =>{
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height /2;
        // console.log(offset)
        if(offset < 0 && offset > closest.offset ){
            return {offset: offset, element: child }
        }else{
            return closest
        } 
    }, {offset: Number.NEGATIVE_INFINITY}).element

}