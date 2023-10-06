async function updateData()
{
    const id = '22';
    // Ci dessous le fecth vers l'url
    const datas = await fetch('http://localhost:8080/Todolist-back/public/api/tasks/'+id, {
        // La methode http ici put
        method: 'PUT',
        // le header pour dire qu'on veut envoyer des données au format JSON
        headers: {
            'Content-Type':'application/json'
        },
        // Le corps de la requete au format json
        body: '{ "title": "quand je suis triste je bois de l eau" }'
    });
    // On stock le resultat de la requete dans une variable datajson
    const datajson = datas.json();
    console.log(datajson);
    return datajson;
}
updateData();