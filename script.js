function showModule(moduleId, button) {
  // 1. Oculta todos los módulos quitando la clase 'active'
  document.querySelectorAll('.module').forEach(mod => mod.classList.remove('active'));

  // 2. Desmarca todos los botones quitando la clase 'active'
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  // 3. Muestra el módulo actual agregando la clase 'active'
  document.getElementById(moduleId).classList.add('active');

  // 4. Marca el botón presionado
  button.classList.add('active');

  // 5. Diccionario con los títulos dinámicos del encabezado
  const titles = {
    'inicio': 'Panel de Control',
    'productos': 'Gestión de Inventario y Productos',
    'ventas': 'Módulo de Registro de Ventas'
  };

  // 6. Actualiza el texto del título principal
  document.getElementById('page-title').innerText = titles[moduleId];
}