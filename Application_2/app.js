        const player = document.getElementById("Player");
        const tag = document.querySelector('.tag');
        const popup = document.querySelector('.popup');



        const message = () => {
            if ( player.currentTime >= 7.7 && player.currentTime < 11) {
                tag.textContent="TR210307CDS76"
            }
            else if (player.currentTime >= 11 && player.currentTime <23  ) {
                tag.textContent="TR210307CDS88"
            }else if ( player.currentTime >= 23 && player.currentTime <30 ) {
                tag.textContent="TR210307CDS89"
            }
            else if (player.currentTime >= 30 && player.currentTime <36){
                tag.textContent  ='TR210307CDS92'
            }
            else if (player.currentTime >= 36)
            {
                tag.textContent = ''
                popup.classList.add('open-popup')
                player.pause();
                clearInterval(set); 
           }
           else if (player.currentTime > 0 && player.currentTime <7.7) {
            tag.textContent = 'TR210307CDS73';
           }
      
        }
            const set =  setInterval(message,100)

            function closePopup () {
                player.currentTime = 0;

                popup.classList.remove('open-popup')
            }

            function playsong() {
                player.play();
                setInterval(message,100)
            }
        
            function pausesong() {
                player.pause();
            }
        
            function stopsong() {
                player.pause();
                player.currentTime = 0;
                clearInterval(set); 
            }
        
            function forwardAudio() {
                player.currentTime += 5;
                
            }
            function currentTime(e) {
                player.currentTime=e;
                player.play();
                setInterval(message,100)
                
            }

        