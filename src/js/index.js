function sendmail(e) {
    e.preventDefault();
    console.log('Hellow')
    var params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value,
    };
    emailjs.sent('service_th60xnu', 'template_updmvoe', params).then(function (res) {
        alert('Success!' + res.status);
    });
}
