const addBtn = document.querySelector('#btn');                      //====sélectionne l'élément du DOM avec l'ID btn - stockage de lelement dans une variable.
addBtn.addEventListener('click', addTask);                         //===quand on fera click sur la var declaré precedement "addBtn", executer la fonction addTask
const taskCard = document.querySelector(".todoCard");             // stockage dans une var de notre carte modele, pour la cloner apres
const tasksContainer = document.querySelector("#todoCards");      // stockage dans une var de notre container vide
const nbCard = document.querySelector("#count");

function addTask() {
    const newTask = taskCard.cloneNode(true)                    //clone de l'element task card (soit la carte avec son contenue texte + trash can)
    const newDelBtn = newTask.querySelector('.delBtn') //En accédant directement aux éléments enfants du clone (newTask), on peut ajuster et configurer la nouvelle tâche 
                                                        //pour qu’elle fonctionne indépendamment du modèle.
    const newTextArea = newTask.querySelector('.task')
    newTextArea.value = `New task`                      //set "new task" text to New Task
    newDelBtn.addEventListener('click', function() {    //Quand on clique sur ce bouton, la fonction deleteTask est appelée avec newTask comme argument.
        deleteTask(newTask);                            //target the new task
    });
    tasksContainer.appendChild(newTask) // append new task to the tasks container
    updateCount();                      //met à jour le nombre total de tâches après l’ajout
}

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() { //dele default task on click
    deleteTask(taskCard); //target the right task
})

function deleteTask(task) {
    task.remove(); //remove the task
    updateCount();
}

function updateCount() {
    //querySelectorALL = méthode pour selectionner tous les elements enfants ici : de taskContainer qui lui meme est une var avec l'id #todoCards
    //Les éléments sélectionnés sont retournés sous forme de liste de nœuds (un tableau d'éléments HTML).
    // !!!!!!!!!!!! recommendation de chatgpt de changer "querySelector" a "querySelectorAll". !!!!!!!!!!!
    const taskCount = tasksContainer.querySelectorAll('.todoCard').length; // Compte les éléments avec la classe "todoCard" dans le conteneur
    nbCard.textContent = `Nombre de tâches : ${taskCount}`; //textContent modifiera le texte (ou recupere texte en brute sans HTML). Affiche le nombre dans l'élément #count.
}
