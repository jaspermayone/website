"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    
    // Define animation frame reference outside img.onload
    let animationFrame: number | null = null;

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
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
        }
        if (document.body.contains(canvas)) {
          document.body.removeChild(canvas);
        }
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
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [imagePath, duration]);

  return null;
};

export default function ConfettiWrapper() {
  const pathname = usePathname();
  const [showConfetti, setShowConfetti] = useState(false);

  // Use a ref to track if we've already shown confetti in this page load
  const [hasShownThisSession, setHasShownThisSession] = useState(false);
  
  useEffect(() => {
    // Check if browser environment
    if (typeof window === "undefined") return;

    // Check URL parameters for ss trigger
    const searchParams = new URLSearchParams(window.location.search);
    const ssParam = searchParams.get('ss');
    
    console.log("Current path:", pathname);
    console.log("ss param:", ssParam);
    console.log("Has shown this session:", hasShownThisSession);

    // Only run once on page load when ss=true and not shown yet
    if (ssParam === 'true' && !hasShownThisSession && !showConfetti) {
      console.log("Showing confetti!");
      
      // Mark that we've shown it this session
      setHasShownThisSession(true);
      
      // Show confetti
      setShowConfetti(true);

      // Hide confetti after it finishes
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [pathname, showConfetti, hasShownThisSession]);

  return showConfetti ? (
    <ImageConfetti imagePath="/images/ss.png" duration={3000} />
  ) : null;
}
