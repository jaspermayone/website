"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ImageConfetti = ({ imagePath, duration = 3000 }) => {
  // Existing confetti implementation remains the same
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

    // Exit if we couldn't get a context
    if (!ctx) {
      console.error("Could not get 2d context from canvas");
      return;
    }

    // Define animation frame reference outside img.onload
    let animationFrame: number | null = null;

    // Load the image
    const img = new Image();
    img.src = imagePath;

    // Handle image loading error
    img.onerror = () => {
      console.error("Failed to load image:", imagePath);
    };

    // Define particle type
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      fadeDirection: number;
      fadeSpeed: number;
    }

    // Create confetti particles
    const particles: Particle[] = [];
    const particleCount = 100;

    img.onload = () => {
      // Create particles once image is loaded
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height,
          size: Math.random() * 40 + 5, // Much more size variation (5-45)
          speedX: Math.random() * 6 - 3,
          speedY: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 10 - 5,
          opacity: Math.random() * 0.4 + 0.4, // Start partially visible (0.4-0.8)
          fadeDirection: 0, // 0 = not fading, 1 = fading in, -1 = fading out
          fadeSpeed: Math.random() * 0.02 + 0.005, // Slower random fade speed
        });
      }

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.save();
          ctx.translate(
            particle.x + particle.size / 2,
            particle.y + particle.size / 2,
          );
          ctx.rotate((particle.rotation * Math.PI) / 180);

          // Set global alpha for transparency
          ctx.globalAlpha = particle.opacity;

          ctx.drawImage(
            img,
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size,
          );
          ctx.restore();

          // Update particle position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;

          // Handle fading in and out randomly
          // Occasionally start fading if not already
          if (particle.fadeDirection === 0 && Math.random() < 0.01) {
            // 1% chance each frame to start fading out
            particle.fadeDirection = -1;
          }

          // Update opacity based on fade direction
          if (particle.fadeDirection !== 0) {
            particle.opacity += particle.fadeDirection * particle.fadeSpeed;

            // Cap opacity between 0 and 1
            if (particle.opacity <= 0) {
              particle.opacity = 0;
              particle.fadeDirection = 1; // Start fading in
            } else if (particle.opacity >= 1) {
              particle.opacity = 1;
              particle.fadeDirection = 0; // Stop fading
            }
          }

          // Reset particle if it goes off-screen
          if (particle.y > canvas.height) {
            particle.y = Math.random() * -100;
            particle.x = Math.random() * canvas.width;
            particle.opacity = Math.random() * 0.5 + 0.5; // Randomize opacity for new particles
          }
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      // Clean up after duration - start fadeout process
      setTimeout(() => {
        // Flag all particles to start fading out
        particles.forEach((particle) => {
          // Set fade speed for final exit (faster)
          particle.fadeSpeed = 0.03;
          particle.fadeDirection = -1;

          // Also push particles to the sides gradually
          particle.speedX =
            particle.x > canvas.width / 2
              ? Math.max(2, particle.speedX * 1.2)
              : Math.min(-2, particle.speedX * 1.2);
        });

        // Then remove canvas after additional time for fade out
        setTimeout(() => {
          if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
          }
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
        }, 1500); // 1.5 second exit animation
      }, duration); // Start fadeout after the original duration
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
  enum confettiTrigger {
    wit = "wit",
    socraticaW25 = "socraticaW25",
    pwl = "pwl",
    pd = "pd",
    mlh = "mlh",
  }

  const images = [
    {
      trigger: confettiTrigger.wit,
      imagePath: "/images/confetti/wit.png",
      invertedImagePath: "/images/confetti/wit.png",
      urlParam: "wit",
      trackingEvent: "WIT_Confetti",
    },
    {
      trigger: confettiTrigger.socraticaW25,
      imagePath: "/images/confetti/ss.png",
      invertedImagePath: "/images/confetti/ss-inverted.png",
      urlParam: "socraticaW25",
      trackingEvent: "SocraticaSymposiumW25_Confetti",
    },
    {
      trigger: confettiTrigger.pwl,
      imagePath: "/images/confetti/pwl.png",
      invertedImagePath: "/images/confetti/pwl.png",
      urlParam: "pwl",
      trackingEvent: "PWL_Confetti",
    },
    {
      trigger: confettiTrigger.pd,
      imagePath: "/images/confetti/pd.jpeg",
      invertedImagePath: "/images/confetti/pd.jpeg",
      urlParam: "pd",
      trackingEvent: "PD_Confetti",
    },
    {
      trigger: confettiTrigger.mlh,
      imagePath: "/images/confetti/mlh.jpg",
      invertedImagePath: "/images/confetti/mlh.jpg",
      urlParam: "mlh",
      trackingEvent: "MLH_Confetti",
    },
  ];

  const pathname = usePathname();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeImage, setActiveImage] = useState<(typeof images)[0] | null>(
    null,
  );

  // Use a ref to track if we've already shown confetti in this page load
  const [hasShownThisSession, setHasShownThisSession] = useState(false);

  // Preload all images
  useEffect(() => {
    if (typeof window === "undefined") return;

    images.forEach((imageConfig) => {
      const regularImg = new Image();
      const invertedImg = new Image();
      regularImg.src = imageConfig.imagePath;
      invertedImg.src = imageConfig.invertedImagePath;
    });
  }, []);

  useEffect(() => {
    // Check if browser environment
    if (typeof window === "undefined") return;

    // Detect dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // Add listener for theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    // Check if browser environment
    if (typeof window === "undefined") return;

    // Check URL parameters for any configured triggers
    const searchParams = new URLSearchParams(window.location.search);

    // Find which image config matches the current URL params (homepage only)
    const matchedConfig =
      pathname === "/"
        ? images.find((config) => {
            const paramValue = searchParams.get(config.urlParam);
            return paramValue === "true";
          })
        : null;

    // Only run once on page load when matched and not shown yet
    if (matchedConfig && !hasShownThisSession && !showConfetti) {
      // Mark that we've shown it this session
      setHasShownThisSession(true);
      setActiveImage(matchedConfig);

      // Show confetti
      setShowConfetti(true);

      // Track confetti display with Umami
      const trackingElement = document.createElement("div");
      trackingElement.setAttribute(
        "data-umami-event",
        matchedConfig.trackingEvent,
      );
      trackingElement.setAttribute("data-umami-event-path", pathname);
      trackingElement.setAttribute(
        "data-umami-event-triggered-by",
        "url-param",
      );
      trackingElement.style.display = "none";
      document.body.appendChild(trackingElement);

      // Clean up the tracking element after a brief delay
      setTimeout(() => {
        if (document.body.contains(trackingElement)) {
          document.body.removeChild(trackingElement);
        }
      }, 100);

      // Hide confetti after it finishes (4 seconds total: 2.5s active + 1.5s fade out)
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, [pathname, showConfetti, hasShownThisSession]);

  return showConfetti && activeImage ? (
    <ImageConfetti
      imagePath={
        isDarkMode ? activeImage.invertedImagePath : activeImage.imagePath
      }
      duration={2500}
    />
  ) : null;
}
