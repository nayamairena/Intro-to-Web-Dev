let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  event.preventDefault();
  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const newsletter = document.getElementsByName('newsletter');
  const date = document.getElementById('date').value;

  if(!name && !email && !date && newsletter[0].checked == false && newsletter[1].checked == false)
    console.warn("You must enter some data to submit this form.");
  else{
    if(!name)
      console.log("Username: no submission");
    else
      console.log("Username: ", name);
    if(!email)
      console.log("Email: no submission");
    else
      console.log("Email: ", email);
    if(newsletter[0].checked == true)
      console.log("Newsletter: yes");
    if(newsletter[1].checked == true)
      console.log("Newsletter: no");
    else
      console.log("Newsletter: no submission")
    if(!date)
      console.log("Date: no submission");
    else
      console.log("Date: ", date);

  }





}



