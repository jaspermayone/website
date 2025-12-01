"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

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

      // Track when confetti should stop spawning
      let isEnding = false;

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

          // Set global alpha for transparency
          ctx.globalAlpha = particle.opacity;

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

          // Handle fading in and out randomly (only during active phase)
          if (!isEnding) {
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
          } else {
            // When ending, stop any fading and restore nearly-invisible particles
            particle.fadeDirection = 0;
            if (particle.opacity < 0.4) {
              particle.opacity = 0.4 + Math.random() * 0.3; // Restore to 0.4-0.7
            }
          }

          // Reset particle if it goes off-screen (only if not ending)
          if (particle.y > canvas.height && !isEnding) {
            particle.y = Math.random() * -100;
            particle.x = Math.random() * canvas.width;
            particle.opacity = Math.random() * 0.5 + 0.5; // Randomize opacity for new particles
          }
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      // Clean up after duration - let particles fall off naturally
      setTimeout(() => {
        isEnding = true;

        // Check periodically if all particles have fallen off screen
        const checkIfDone = setInterval(() => {
          const allOffScreen = particles.every(
            (particle) => particle.y > canvas.height
          );
          if (allOffScreen) {
            clearInterval(checkIfDone);
            if (animationFrame !== null) {
              cancelAnimationFrame(animationFrame);
            }
            if (document.body.contains(canvas)) {
              document.body.removeChild(canvas);
            }
          }
        }, 100);

        // Fallback cleanup after max time
        setTimeout(() => {
          clearInterval(checkIfDone);
          if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
          }
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
        }, 5000);
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

// Subscribe function for dark mode detection
function subscribeToDarkMode(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

// Get current snapshot for client
function getDarkModeSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Get snapshot for server-side rendering
function getDarkModeServerSnapshot() {
  return false;
}

enum confettiTrigger {
  wit = "wit",
  socraticaW25 = "socraticaW25",
  pwl = "pwl",
  pd = "pd",
  mlh = "mlh",
}

const CONFETTI_IMAGES = [
  {
    trigger: confettiTrigger.wit,
    imagePath: "/images/confetti/wit.webp",
    invertedImagePath: "/images/confetti/wit.webp",
    urlParam: "wit",
    trackingEvent: "WIT_Confetti",
  },
  {
    trigger: confettiTrigger.socraticaW25,
    imagePath: "/images/confetti/ss.webp",
    invertedImagePath: "/images/confetti/ss-inverted.webp",
    urlParam: "socraticaW25",
    trackingEvent: "SocraticaSymposiumW25_Confetti",
  },
  {
    trigger: confettiTrigger.pwl,
    imagePath: "/images/confetti/pwl.webp",
    invertedImagePath: "/images/confetti/pwl.webp",
    urlParam: "pwl",
    trackingEvent: "PWL_Confetti",
  },
  {
    trigger: confettiTrigger.pd,
    imagePath: "/images/confetti/pd.webp",
    invertedImagePath: "/images/confetti/pd.webp",
    urlParam: "pd",
    trackingEvent: "PD_Confetti",
  },
  {
    trigger: confettiTrigger.mlh,
    imagePath: "/images/confetti/mlh.webp",
    invertedImagePath: "/images/confetti/mlh.webp",
    urlParam: "mlh",
    trackingEvent: "MLH_Confetti",
  },
];

export default function ConfettiWrapper() {
  const images = CONFETTI_IMAGES;

  const pathname = usePathname();
  const [showConfetti, setShowConfetti] = useState(false);
  const isDarkMode = useSyncExternalStore(
    subscribeToDarkMode,
    getDarkModeSnapshot,
    getDarkModeServerSnapshot
  );
  const [activeImage, setActiveImage] = useState<(typeof images)[0] | null>(
    null
  );

  // Use a ref to track if we've already shown confetti in this page load
  const [hasShownThisSession, setHasShownThisSession] = useState(false);

  // Preload only the active image when confetti is triggered
  useEffect(() => {
    if (typeof window === "undefined" || !activeImage) return;

    const img = new Image();
    img.src = isDarkMode
      ? activeImage.invertedImagePath
      : activeImage.imagePath;
  }, [activeImage, isDarkMode]);

  useEffect(() => {
    // Check if browser environment
    if (typeof window === "undefined") return;

    // Skip if already shown
    if (hasShownThisSession || showConfetti) return;

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

    // Only run once on page load when matched
    if (matchedConfig) {
      // Schedule state updates asynchronously to avoid cascading renders
      queueMicrotask(() => {
        // Mark that we've shown it this session
        setHasShownThisSession(true);
        setActiveImage(matchedConfig);

        // Show confetti
        setShowConfetti(true);

        // Track confetti display with Umami
        const trackingElement = document.createElement("div");
        trackingElement.setAttribute(
          "data-umami-event",
          matchedConfig.trackingEvent
        );
        trackingElement.setAttribute("data-umami-event-path", pathname);
        trackingElement.setAttribute(
          "data-umami-event-triggered-by",
          "url-param"
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
      });
    }
  }, [pathname, showConfetti, hasShownThisSession, images]);

  return showConfetti && activeImage ? (
    <ImageConfetti
      imagePath={
        isDarkMode ? activeImage.invertedImagePath : activeImage.imagePath
      }
      duration={2500}
    />
  ) : null;
}
