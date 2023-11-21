function openModal(imgPath) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImg').src = imgPath;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}