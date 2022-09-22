        const player = document.getElementById("Player");
        const tag = document.querySelector('.tag')
        const popup = document.querySelector('.popup')

        // Bu kısım Json verisini globala almaya çalıştım ama beceremedim bütün zamanım burayı gitti
    

        // const jsonData = async (event) =>{
        //  await fetch('./db.json')
        // .then((response) => response.json())
        // .then((json) => {return json});
        // };

        // console.log(jsonData)   

        // window.onload =  await fetch('./db.json')
        // .then((response) => response.json())
        // .then((json) => {return json})
        // console.log(data);
        // const getUserAsync = async () => {
        // let response = await fetch(`./db.json`);
        // let data = await response.json();
        // processData(data);
        // };

        // function processData(data) {
        // console.log(data) ;
        // FormEntries = data; 
        // };

        // getUserAsync();

        // function convertTimeToString(time) {
        //  totalNumberOfSeconds = Math.floor(time)
        // const hours = parseInt( totalNumberOfSeconds / 3600 );
        // const minutes = parseInt( (totalNumberOfSeconds - (hours * 3600)) / 60 );
        // const seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
        // const result = (minutes < 10 ?  + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
        //  console.log(result)
        //  return seconds
        //     }

        //  function tiempo() {
        // return convertTimeToString(player.currentTime)
        // }
        // tiempo();


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

        