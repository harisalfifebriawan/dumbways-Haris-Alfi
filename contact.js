function submitForm() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone-number').value;
    let subject = document.getElementById('select-option').value;
    let message = document.getElementById('textarea').value;

    if (name == '') {
        alert("Nama nya harus di isi yaa");
    } else if (email == '') {
        alert("Email nya di isi yaa");
    } else if (phone == '') {
        alert("Nomor HP harus di isi yaa");
    } else if (subject == '') {
        alert("Subject nya di isi yaa");
    } else if (message == '') {
        alert("Kasih aku pesan dong >_<");
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let receiveMail = 'harisalfifebriawan@gmail.com';

    let a = document.createElement('a');

    a.href = 'mailto:' + '?subject=' + subject + '&body=Halo nama saya ' + name + ', ' + message;

    a.click();

}