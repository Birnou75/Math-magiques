function jeu(){
        var n1 = 0;
        var n2 = 2000;
        var rand = n1+Math.floor((n2-n1+1)*Math.random());
        var nb = 1;
        essai =prompt("Calculer la somme 1+2+...+"+rand);
        while(essai != rand*(rand+1)/2){
        if(essai == null){break;}
        else{
        essai =prompt("Calculer la somme 1+2+...+"+rand);
        nb = nb + 1;
        prompt("Félicitations\nVous avez trouvé le bon nombre: "+rand+"\nNombre d'essais: "+nb+"\nCliquez sur OK maintenant");};};}
        function jouer(){
        jeu();
        a = prompt("Si vous voulez rejouer, écrivez 'OUI'");
        if(a == "OUI"){jouer()}
        }
function maj(){
      this.innerHTML = c+"s";
      c = c-1;
    if(c =! 0){setTimeout(maj(),1000);}}