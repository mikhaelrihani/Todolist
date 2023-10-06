async function handleDeleteTask(event)
{
    // Ici je selectionne tout l'élément de la liste, puis je recupere l'id de la tache
    const taskElement = event.currentTarget.closest('li');
    // Ici je stock dans une variable id le dataset id de mon HTML. J'en aurais besoin quand je voudrais faire un delete (car pour delete un element j'ai besoin de son id)
    const id = taskElement.dataset.id;

    // On supprime l'élément via l'API
    if (deleteTask(id)) {
        // On supprime l'élément de la liste des taches
        taskElement.remove();
    }
}

async function deleteTask(id)
{
    const res = await fetch('http://localhost:8080/Todolist-back/public/api/tasks/'+id, {
        method: 'DELETE'
    });
    if (res) {
        return true;
    }
    else {
        return false;
    }
}