// 祝福圆环文字排列
function arrangeWishCircle() {
    const wishCircle = document.querySelector('.wish-circle');
    const wishes = wishCircle.getElementsByTagName('span');
    const totalWishes = wishes.length;
    const angleStep = 360 / totalWishes;

    for (let i = 0; i < totalWishes; i++) {
        wishes[i].style.transform = `rotate(${angleStep * i}deg)`;
    }
}

// 创建烟花效果
function createFirework() {
    const fireworksContainer = document.querySelector('.firework-sparkles');
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight / 2);
    
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    
    fireworksContainer.appendChild(firework);
    
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// 定期创建烟花
setInterval(createFirework, 2000);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    arrangeWishCircle();
    
    // 添加飘落的装饰物动画
    const floatingItems = document.querySelectorAll('.floating-items > div');
    floatingItems.forEach(item => {
        item.style.left = `${Math.random() * 100}vw`;
        item.style.animationDuration = `${Math.random() * 3 + 2}s`;
        item.style.animationDelay = `${Math.random() * 2}s`;
    });
    
    // 添加祝福消息动画延迟
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        message.style.setProperty('--message-delay', Math.random() * 2);
        
        // 添加点击效果
        message.addEventListener('click', () => {
            message.style.transform = 'scale(1.2) translateY(-10px)';
            setTimeout(() => {
                message.style.transform = '';
            }, 500);
        });
    });
});

// 添加鼠标移动效果
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.lantern').forEach(lantern => {
        lantern.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}); 