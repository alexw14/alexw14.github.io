let i = j = 0;
// let firstTxt = `Alex Wong`
// let secondTxt = `Full-Stack Web Developer`;
let firstTxt = `Hello, I'm Alex Wong.`
let secondTxt = `I'm a full-stack web developer.`;

function typeWriter() {
  if (i < firstTxt.length) {
    document.getElementById("type1").innerHTML += firstTxt.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
  if (j < secondTxt.length && i === firstTxt.length) {
    document.getElementById("type2").innerHTML += secondTxt.charAt(j);
    j++;
    setTimeout(typeWriter, 300);
  }
}

typeWriter();