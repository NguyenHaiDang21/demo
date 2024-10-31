
document.getElementById('login').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    // Có thể thêm điều hướng đến trang khác nếu cần
    // window.location.href = 'homepage.html';
});
