async function resetTasks()
{
    // Ici je selectionne l'element du DOM qui correspond a ma liste
    const taskListElement = document.querySelector('.tasklist');
    taskListElement.textContent = '';

    // Ici tasks sera egal a la valeur de retour de getAllTasksFromApi()
    // J'utilise await pour dire que je veux attendre que getAllTasksFromApi() termine son execution avant de passer a la suite
    const tasks = await getAllTasksFromApi();
    // console.log(tasks);

    for (const task of tasks) {
        insertTaskInDom(task);
    }
}

function insertTaskInDom(task)
{
    const taskElement = document.createElement("li");
    taskElement.dataset.id = task.id;

    const taskTitle = document.createElement("p");
    taskTitle.textContent = task.title;
    taskElement.append(taskTitle);

    if (task.category) {
        const taskCategory = document.createElement("em");
        taskCategory.textContent = '  '+task.category.name;
        taskTitle.append(taskCategory);
    }

    const deleteElement = document.createElement('div');
    deleteElement.classList.add('delete');
    // Ici a chaque creation du bouton delete, je place un écouteur d'évenement sur chacun de mes boutons delete
    deleteElement.addEventListener('click', handleDeleteTask);
    taskElement.append(deleteElement);

    const editElement = document.createElement('div');
    editElement.classList.add('edit');
    taskElement.append(editElement);
    
    const tasklist = document.querySelector('.tasklist');
    tasklist.append(taskElement);
}

async function getAllTasksFromApi()
{
    // Ici on fait la requete vers l'api avec fetch()
    // On utilise await pour dire que dans notre fonction on veut attendre la valeur de retour du fetch avant de passer a la suite
    const result = await fetch('http://localhost:8080/Todolist-back/public/api/tasks', {method: 'GET'});
    // Je convertis result au format json()
    const tasks = result.json();
    // Et je retourne le tout
    return tasks;
}