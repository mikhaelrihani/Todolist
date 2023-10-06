function initApp()
{
    // J'initialise la liste de mes taches
    resetTasks();

    const newTaskButton = document.querySelector('.create-task-container button');
    newTaskButton.addEventListener('click', handleCreateTaskButton);

    const newTaskForm = document.querySelector('.modal-dialog form');
    newTaskForm.addEventListener('submit', handleTaskFormSubmit);
}

initApp();