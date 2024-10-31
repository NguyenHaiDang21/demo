
    window.onload = function () {
        var username = localStorage.getItem('username');
        if (username) {
            document.getElementById('user-display').textContent = username;
        } else {
            document.getElementById('user-display').textContent = 'Guest';
        }

        // Tạo bông tuyết mới mỗi 100ms
        setInterval(createSnowflake, 100);
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
    
        // Đặt kích thước ngẫu nhiên cho bông tuyết
        const size = Math.random() * 6 + 4; // Kích thước từ 4px đến 10px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
    
        // Đặt vị trí ngẫu nhiên cho bông tuyết
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    
        document.querySelector('.snow-container').appendChild(snowflake);
    
        // Animation cho bông tuyết
        snowflake.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${window.innerHeight + 10}px)` }
        ], {
            duration: Math.random() * 3000 + 2000, // Thời gian rơi từ 2s đến 5s
            easing: 'linear',
            iterations: 1,
            fill: 'forwards'
        });
    
        // Xóa bông tuyết sau khi rơi
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

