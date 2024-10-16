function showInfo(container) {
    var infoBox = container.querySelector('.info-box');
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        infoBox.style.display = 'flex';
    } else {
        infoBox.style.display = 'none';
    }
}