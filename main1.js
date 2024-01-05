let players = [
    {
        id : Date.now() * Math.random(),
        name : "Tâm",
        point : 0
    }
];



if (!localStorage.getItem("players")) {
    localStorage.setItem("players",JSON.stringify(players))
};



function renderData(arr) {
    let tableDataEL = document.getElementById("tableData")
    let tableDataString =``;
    arr.forEach((player) => {
        tableDataString += `
        <tr>
            <th onclick="deletePlayer(${player.id})" scope="row">X</th>
            <td><i class="fa-solid fa-star"></i></td>
            <td> ${player.name}</td>
            <td><input style="text-align: center;" type="number" min="0" max="100" value="1"> ${player.point} </td>
        </tr>
        `
    });
    tableDataEL.innerHTML = tableDataString
}
renderData(JSON.parse(localStorage.getItem("players") ?? "[]"));



function addPlayer() {
    let playerNameEl = document.getElementById("playerName")
    let newPlayer = {
        id : Date.now() * Math.random(),
        name : playerNameEl.value,
        point : 0 
    }
    let players = JSON.parse(localStorage.getItem("players") ?? "[]")
    players.push(newPlayer)
    localStorage.setItem("players",JSON.stringify(players));
    renderData(players)
}


function deletePlayer(playerId) {
    let players = JSON.parse(localStorage.getItem("players") ?? "[]")
    players = players.filter((player) => player.id != playerId)
    localStorage.setItem("players",JSON.stringify(players))
    renderData(players)

}