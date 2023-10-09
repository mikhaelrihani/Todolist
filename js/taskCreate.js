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

    switchHeader();
}

async function handleTaskFormSubmit(event){
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const formTitle = formData.get('title');
    const taskData = await createTaskFromApi({
        title: formTitle
    });
    const successMessage = document.querySelector('.message.success');
    const errorMessage = document.querySelector('.message.danger');
  
    if(taskData) { 
        successMessage.removeAttribute('hidden');
        setTimeout(function() {
            successMessage.setAttribute('hidden', true);
        }, 2000);
        errorMessage.setAttribute('hidden', true);
         }else {
            errorMessage.removeAttribute('hidden');
            setTimeout(function() {
                errorMessage.setAttribute('hidden', true);
            }, 2000);
            successMessage.setAttribute('hidden', true);
        }
   
    await resetTasks();
    switchHeader();
    hideCreateForm();
}


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