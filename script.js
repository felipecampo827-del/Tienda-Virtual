document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos todas las miniaturas
    const miniaturas = document.querySelectorAll('.miniatura');
    
    // Creamos el overlay y la imagen grande
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.cursor = 'zoom-out';
    overlay.style.zIndex = '1000';
    
    // Creamos la imagen que se mostrará en grande
    const imgGrande = document.createElement('img');
    imgGrande.style.maxWidth = '90%';
    imgGrande.style.maxHeight = '90%';
    imgGrande.style.border = '5px solid #fff';
    imgGrande.style.borderRadius = '10px';
    
    overlay.appendChild(imgGrande);
    document.body.appendChild(overlay);
    
    // Función para abrir la imagen grande
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function () {
            imgGrande.src = miniatura.src;
            overlay.style.display = 'flex';
        });
    });
    
    // Cerrar overlay al hacer clic fuera de la imagen
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});