import { PlayScene } from "./scene.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: '#game',
    scene: [PlayScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}

var game = new Phaser.Game(config);

document.getElementById('guardar').addEventListener('click', 
    function(){
        fetch("./php/save.php",{
            method: "POST",
            body: "",
            headers: {"content-type":"application/json; charset=UTF-8"}
        })
        .then(response=>{
            if (response.ok) response.text();
            else trow("PHP connection fail");
        })
        .then(partida=>sessionStorage.save = partida)
        .catch(err=>sessionStorage.save = localStorage.save)
        .finally(()=>window.location.assign("../"));
    });

