        let  intervalID ;
        let incrementX = 0
        let incrementY = 0
        let speedX = 15
        let speedY = 15
        var c = document.getElementById("myCanvas");
        var square = c.getContext("2d");
        var squarebottom = c.getContext("2d");
        var circle = c.getContext("2d");
        var triangle = c.getContext('2d');
        var squarebottom = c.getContext("2d");
        var circlebottom = c.getContext("2d");
        var trianglebottom = c.getContext('2d');
       

     

        
        // Sol Taraf

        const circleTop = (incrementX) => {
        circle.strokeStyle = "red";
        circle.beginPath();
        circle.arc(70+ incrementX, 70, 50, 0, 2 * Math.PI);
        circle.stroke();
        }

        circleTop(0);

        const squareTop = (incrementX) => {
        square.beginPath();
        square.rect(20 +incrementX, 170, 100, 100);
        square.stroke();

        }
        squareTop(0);
       

        const triangleTop = (incrementX) => {
            triangle.beginPath();
            triangle.strokeStyle = "red";
            triangle.moveTo(115+incrementX, 405);
            triangle.lineTo(65+incrementX, 305);
            triangle.lineTo(25+incrementX, 405);
            triangle.closePath();
            triangle.stroke();

        }
        triangleTop(0);
    
        // Alt Taraf

        const circleBot = () => {

        circlebottom.strokeStyle = "blue";
         circlebottom.beginPath();
         circlebottom.arc(200, 405- incrementY, 50, 0, 2 * Math.PI);
         circlebottom.stroke();
        }

        circleBot(0)


         
        const squareBot = (incrementY) => {
        squarebottom.beginPath();
        square.strokeStyle='blue';
        squarebottom.rect(300, 355 - incrementY, 100, 100);
        squarebottom.stroke();
        }

        squareBot(0);

        const triangleBot = (incrementY) => {

        trianglebottom.beginPath();
         trianglebottom.strokeStyle = "blue";
         trianglebottom.moveTo(565, 455-incrementY);
         trianglebottom.lineTo(515, 355-incrementY);
         trianglebottom.lineTo(475, 455-incrementY);
         trianglebottom.closePath();
         trianglebottom.stroke();

        }

        triangleBot(0);
    
        let buton = document.querySelector('.btn');
        buton.addEventListener('click', () => {
            
            if (buton.innerText == 'Başlat' ||buton.innerText == 'Devam Et'  ){
                buton.innerText = "Dur";
                buton.classList.add('btn-danger')
                intervalID =  setInterval(drawEverything, 50);

            }else {
                
                clearInterval(intervalID);
                buton.innerText = 'Devam Et';
                buton.classList.remove('btn-danger')
                buton.classList.add('btn-warning')
            }
            
        })
    
        function drawEverything() {
            bounce();
            bounce2();
            incrementX = incrementX + speedX;
            incrementY = incrementY + speedY;

            square.fillStyle = '#202124';
            square.fillRect(0,0,c.width,c.height);

            // Soldan Sağa
            circleTop(incrementX)
            squareTop(incrementX)
            triangleTop(incrementX)

            // Alttan Yukarı
            circleBot(incrementY);
            squareBot(incrementY);
            triangleBot(incrementY);
      

        }


        function bounce(){
         if(incrementX < 0) {
            speedX = -speedX
         }
        if(incrementX > 560) {
        speedX = -speedX
        }
        }

        function bounce2(){
         if(incrementY < 0) {
            speedY = -speedY
         }
        if(incrementY > 320) {
        speedY = -speedY
        }
        }

        





