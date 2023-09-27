import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Polygon = ({ backgroundColor = 0x000000, lineColor = 0xfefefe }) => {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        heroSectionRef.current.offsetWidth,
        heroSectionRef.current.offsetHeight
      );
    };
    heroSectionRef.current.appendChild(renderer.domElement);

    const faceMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: lineColor,
      wireframe: true
    });

    const vwToPixels = (value) => window.innerWidth * (value / 100);

    // 캔버스의 너비에 대한 백분율 값을 픽셀 값으로 변환하는 함수
    const percentToPixelsWidth = (value) =>
      heroSectionRef.current.offsetWidth * (value / 100);

    // 캔버스의 높이에 대한 백분율 값을 픽셀 값으로 변환하는 함수
    const percentToPixelsHeight = (value) =>
      heroSectionRef.current.offsetHeight * (value / 100);

    const pyramids = [
      {
        geometry: new THREE.ConeGeometry(vwToPixels(2.5), vwToPixels(4.5), 4),
        position: [
          percentToPixelsWidth(10), // left 10%
          -percentToPixelsHeight(10), // bottom 10%
          ,
          0
        ],
        rotation: { x: Math.PI / 4, y: 0, z: 0 }
      },
      {
        geometry: new THREE.ConeGeometry(vwToPixels(3.5), vwToPixels(5), 4),
        position: [percentToPixelsWidth(10), percentToPixelsWidth(-3), 0],
        rotation: { x: Math.PI / 4, y: 0, z: 0 }
      }
    ];

    pyramids.forEach((pyramidConfig) => {
      const pyramidFace = new THREE.Mesh(pyramidConfig.geometry, faceMaterial);
      pyramidFace.position.set(...pyramidConfig.position);
      scene.add(pyramidFace);

      const pyramidWireframe = new THREE.Mesh(
        pyramidConfig.geometry,
        wireframeMaterial
      );
      pyramidWireframe.position.set(...pyramidConfig.position);
      pyramidWireframe.position.set(
        pyramidConfig.position[0],
        pyramidConfig.position[1],
        pyramidConfig.position[2] + 0.01
      ); // z 위치를 약간 앞으로 이동
      scene.add(pyramidWireframe);
    });

    const dodecahedronGeometry = new THREE.DodecahedronGeometry(45);

    const dodecahedronFace = new THREE.Mesh(dodecahedronGeometry, faceMaterial);
    dodecahedronFace.position.set(0, 0, 0);
    scene.add(dodecahedronFace);

    const dodecahedronWireframe = new THREE.Mesh(
      dodecahedronGeometry,
      wireframeMaterial
    );
    dodecahedronWireframe.position.set(0, 0, 0.01); // z 위치를 약간 앞으로 이동
    scene.add(dodecahedronWireframe);
    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedronFace.rotation.z += 0.001;
      dodecahedronFace.rotation.y += 0.0025;
      dodecahedronWireframe.rotation.z += 0.001;
      dodecahedronWireframe.rotation.y += 0.0025;
      renderer.render(scene, camera);
    };

    animate();
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundColor, lineColor]);

  return <div className="canvas-container" ref={heroSectionRef}></div>;
};

export default Polygon;
