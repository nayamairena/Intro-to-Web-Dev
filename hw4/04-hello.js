// Add your code here
let main = document.querySelector('main');

let sec = document.createElement("section");
sec.style.margin = "auto";
sec.style.width = "50%";
sec.style.padding = "30px";

let img = document.createElement('img');
img.src = "my_pic.jpeg"
img.style.display = "block";
img.style.marginLeft = "auto";
img.style.marginRight = "auto";
img.style.borderRadius = "500px";
sec.append(img);

let p1 = document.createElement('p');
p1.innerHTML = '<b>Hello world! My name is Naya and I use she/her pronouns.</b> I am currently a Computer Science student at Portland State University. I have two cats and I love them dearly. I enjoy being creative, curious, and adventurous!';
p1.style.textAlign = "left";
sec.append(p1);

main.append(sec);
