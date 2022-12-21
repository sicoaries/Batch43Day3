function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let telp = document.getElementById("input-telp").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;
  if (name == "") {
    return alert("Mohon untuk mengisikan nama");
  } else if (email == "") {
    return alert("Mohon untuk mengisikan email");
  } else if (telp == "") {
    return alert("Mohon untuk mengisikan nomor telpon");
  } else if (subject == "") {
    return alert("Mohon untuk mengisikan subject");
  } else if (message == "") {
    return alert("Mohon untuk mengisikan message");
  }
  let email_receiver = "sicoaries@gmail.com";
  let a = document.createElement("a");
  // Kasih Comma %2C
  // Kasih new line %0D%0A
  a.href = `mailto:${email_receiver}?subject=${subject}&body=Hello my name ${name} ,${subject},
    ${message}
    you can contact me in my email ${email} or you can call me in my number ${telp}`;
  a.click();
}
