let tarea = [];

function taskManager() {
    let action = prompt("Seleccione una acción: \n1. Agregar tarea \n2. Listar tareas \n3. Editar tarea \n4. Eliminar tarea \n0. Salir");
    switch(action) {
        case '1':
            let nuevaTarea = prompt("Ingrese la nueva tarea:");
            addTask(nuevaTarea);
            break;
        case '2':
            listaTarea();
            break;
        case '3':
            listaTarea();
            let editarIndex = parseInt(prompt("Ingrese el número de la tarea a editar:")) - 1;
            let editarTarea = prompt("Ingrese la nueva descripción de la tarea:");
            editTask(editarIndex, editarTarea);
            break;
        case '4':
            listaTarea();
            let eliminarIndex = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
            eliminarTarea(eliminarIndex);
            break;
        case '0':
            console.log("Saliendo del administrador de tareas.");
            return;
        default:
            alert("Acción no válida, por favor intente de nuevo.");
    }
    administradorTarea(); 
}

function validarnombreTarea(Tarea) {
    const regex = /^\S.*\S$|^\S$/;
    return regex.test(tarea);
}

function nuevaTarea(Tarea) {
    if (!validarnombreTarea(Tarea)) {
        alert("Error: El nombre de la tarea no puede estar vacío ni contener espacios al principio o al final.");
        return;
    }
    Tarea.push(Tarea.trim());
    alert(`Tarea "${Tarea}" agregada.`);
}

function listaTarea() {
    if (tarea.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let tarealista = "Lista de tareas:\n";
        for (let i = 0; i < Tarea.length; i++) {
            tarealista += `${i + 1}. ${Tarea[i]}\n`;
        }
        alert(tarealista);
    }
}

function editarTarea(index, nuevaTarea) {
    if (!validateTaskName(nuevaTarea)) {
        alert("Error: El nuevo nombre de la tarea no puede estar vacío ni contener espacios al principio o al final.");
        return;
    }
    if (index >= 0 && index < Tarea.length) {
        const Tareaanterior = Tarea[index];
        tarea[index] = nuevaTarea.trim();
        alert(`Tarea ${index + 1} cambiada de "${Tareaanterior}" a "${nuevaTarea}".`);
    } else {
        alert("Índice de tarea inválido.");
    }
}

function eliminarTarea(index) {
    if (index >= 0 && index < Tarea.length) {
        const eliminarTarea = Tarea.splice(index, 1);
        alert(`Tarea "${eliminarTarea}" eliminada.`);
    } else {
        alert("Índice de tarea inválido.");
    }
}

administradorTarea();