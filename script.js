document.addEventListener('DOMContentLoaded', () => {
    const flag = document.getElementById('flag');
    const union = document.getElementById('union');
    
    // Generate and position the stars in the Union
    let starCount = 0;
    for (let row = 0; row < 9; row++) {
      let numberOfStarsInRow = row % 2 === 0 ? 6 : 5;
      for (let col = 0; col < numberOfStarsInRow; col++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${col * 45 + (row % 2 === 0 ? 22.5 : 0)}px`;
        star.style.top = `${row * 23}px`;
        union.appendChild(star);
        starCount++;
      }
    }
  
    if (starCount !== 50) {
      console.error("Incorrect number of stars");
    }
    
    // Generate and position the 13 stripes
    for (let i = 0; i < 13; i++) {
      const stripe = document.createElement('div');
      stripe.classList.add('stripe');
      stripe.classList.add(i % 2 === 0 ? 'red-stripe' : 'white-stripe');
      stripe.style.top = `${i * 30.77}px`;
      flag.appendChild(stripe);
    }
  
    // Add click event for color toggling
    flag.addEventListener('click', () => {
      if (flag.classList.contains('alternate-colors')) {
        flag.classList.remove('alternate-colors');
      } else {
        flag.classList.add('alternate-colors');
      }
    });
  });
  