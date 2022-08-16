const colors = ["green", "red", "rgba(122,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () =>
{
    const rendomColor = getRandomColors();
        document.body.style.backgroundColor = colors[rendomColor];
        color.textContent = colors[rendomColor];
    
    

})

const getRandomColors = () =>
{
    return Math.floor(Math.random() * colors.length)
}