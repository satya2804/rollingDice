function rollDice() {
    const NumofDice = document.getElementById("numofDice").value;
    const DiceResult = document.getElementById("diceResult");
    const DiceImages = document.getElementById("diceImages");
    const DiceAdd = document.getElementById("diceadd");
    const values = [];
    const images = [];
    let satya = 0;

    for (let i = 0; i < NumofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        satya += value;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    DiceAdd.textContent = `Total Sum: ${satya}`;
    DiceResult.textContent = `Dice: ${values.join(', ')}`;
    DiceImages.innerHTML = images.join('');

    // Append the sum to the DiceImages element
   // DiceImages.innerHTML += `<div>Total Sum: ${satya}</div>`;
}
