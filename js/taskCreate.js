function handleCreateTaskButton()
{
    displayCreateForm();
}
function switchHeader()
{
    const headerElement = document.querySelector('header');
    headerElement.classList.toggle("muted");
}

function displayCreateForm()
{
    const dialogElement = document.querySelector(".modal-dialog");
    dialogElement.style.display = 'flex';
    // dialogElement.classList.toggle('show');
    switchHeader();
}

async function handleTaskFormSubmit(event)
{
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const formTitle = formData.get('title');
    const taskData = await createTaskFromApi({
        title: formTitle
    });
    // Je mets a jour ma liste
    await resetTasks();
    // Ci dessous la methode qui retire la modal de la page
    switchHeader();
    hideCreateForm();
}

// Ci dessous le parametre data est le JSON de ce que je veux envoyer
async function createTaskFromApi(data)
{
    const result = await fetch('http://localhost:8080/Todolist-back/public/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const task = await result.json();
    return task;
}

function hideCreateForm()
{
    const modalElement = document.querySelector('.modal-dialog');
    modalElement.style.display = 'none';
}