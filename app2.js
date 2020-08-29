var scores, roundScore,dice, activePlayer, isPlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function(){
    if (isPlaying) {
        
    
            //1. Random number
            dice = Math.floor(Math.random()*6) +1;
            //2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';
            //3.update the round if rolled number is not 1
            if (dice !==1){
                roundScore+= dice;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            }
            else{
                nextPlayer();
        

            }
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (isPlaying) {
         //Add current score to global score
         scores[activePlayer] += roundScore;
         //update the UI
         document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
         //check if player won the game
         if (scores[activePlayer]>=20) {
             document.querySelector('#name-'+activePlayer).textContent = 'Winnner!!';
             document.querySelector('.dice').style.display= 'none';
             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('remove');
             isPlaying= false;
    
             
         }
         else{
             nextPlayer();
    
         }
        
    }
});

document.getElementsByClassName('btn-new').addEventListener('click', init);



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
};



function init() {
    scores = [0,0];
    roundScore= 0;
    activePlayer = 0;
    isPlaying = true;

    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    
    
};