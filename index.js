(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const colorResult = document.getElementById('colorResult');
    const root = document.querySelector(":root");
    let deg = 0;

    startButton.addEventListener('click', () => {
        colorResult.style.display = 'none'
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Set button style
        root.style.setProperty("--linear-shadow", 'linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)');
        // Calculate a new rotation between 3000 and 6000
        deg = Math.floor(3000 + Math.random() * 3000)
        // Set the transition on the wheel
        wheel.style.transition = 'all 8s ease-out'
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`
        // the blur effect to make it look like blurry
        wheel.classList.add('blur')
    })

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur');
        // Enable back the button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none'
        // At this point our degree is obviouly more than 360 as set in line 10. So we need to reset it to a number
        // that is within 360 to have a natural spin.
        const actualDeg = deg %  360
        // Start the next spin from a value less then 360
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        //sending the degree that the marker stoped on
        alertResult(360 - actualDeg)
    })

    function alertResult(actualDeg) {
        let result = null;
        // Checking the degree and assign result
        if(actualDeg >= 0 && actualDeg <= 30) {
            result = '#aad401';
        }else if(actualDeg > 30 && actualDeg <= 60) {
            result = '#44aa00';
        }else if(actualDeg > 60 && actualDeg <= 90) {
            result = '#2ca089';
        }else if(actualDeg > 90 && actualDeg <= 120) {
            result = '#00aad4';
        }else if(actualDeg > 120 && actualDeg <= 150) {
            result = '#3837c8';
        }else if(actualDeg > 150 && actualDeg <= 180) {
            result = '#5a2ca0';
        }else if(actualDeg > 180 && actualDeg <= 210) {
            result = '#8800aa';
        }else if(actualDeg > 210 && actualDeg <= 240) {
            result = '#ff00cc';
        }else if(actualDeg > 240 && actualDeg <= 270) {
            result = '#ff0066';
        }else if(actualDeg > 270 && actualDeg <= 300) {
            result = '#d40001';
        }else if(actualDeg > 300 && actualDeg <= 330) {
            result = '#ff6601';
        }else if(actualDeg > 330 && actualDeg <= 360) {
            result = '#ffcc01';
        }


        // Displaying result
        colorResult.style.display = 'block';
        colorResult.style.color = result;
        colorResult.style.fontWeight = 'bold';
        colorResult.style.fontSize = '30px';
        colorResult.innerHTML = 'Woohoooo!!!'
        colorResult.style.position = 'absolute';
        colorResult.style.transform = 'translateX(-50%)';
        colorResult.style.left = '50%';
        colorResult.style.marginTop = '46.5%';
        // Set button style
        root.style.setProperty("--linear-shadow", result);

    }
})()