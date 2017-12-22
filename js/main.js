let i = j = 0;
let firstTxt = `Hi, my name is Alex.`
let secondTxt = `I'm a Full-Stack Web Developer.`;

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