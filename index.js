    import * as THREE from 'three';

    // Criar a cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Criar uma estrela
    const starGeometry = new THREE.SphereGeometry(1, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(star);

    // Criar um exoplaneta
    const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.x = 3;
    scene.add(planet);

    camera.position.z = 5;

    // Animação
    function animate() {
      requestAnimationFrame(animate);

      // Rotacionar o planeta em torno da estrela
      planet.position.x = Math.cos(Date.now() * 0.001) * 3;
      planet.position.z = Math.sin(Date.now() * 0.001) * 3;

      renderer.render(scene, camera);
    }
    animate();