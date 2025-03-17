"use client";

import { useEffect } from "react";

const ImageConfetti = ({ imagePath, duration = 3000 }) => {
  useEffect(() => {
    // Create canvas element
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Load the image
    const img = new Image();
    img.src = imagePath;

    // Create confetti particles
    const particles = [];
    const particleCount = 100;

    img.onload = () => {
      // Create particles once image is loaded
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height,
          size: Math.random() * 20 + 10,
          speedX: Math.random() * 6 - 3,
          speedY: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 10 - 5,
        });
      }

      // Animation loop
      let animationFrame;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.save();
          ctx.translate(
            particle.x + particle.size / 2,
            particle.y + particle.size / 2
          );
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.drawImage(
            img,
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
          );
          ctx.restore();

          // Update particle position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;

          // Reset particle if it goes off-screen
          if (particle.y > canvas.height) {
            particle.y = Math.random() * -100;
            particle.x = Math.random() * canvas.width;
          }
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      // Clean up after duration
      setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        document.body.removeChild(canvas);
      }, duration);
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
      cancelAnimationFrame(animationFrame);
    };
  }, [imagePath, duration]);

  return null;
};

export default ImageConfetti;
