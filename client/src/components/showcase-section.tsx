import { useEffect, useRef } from "react";

export function ShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isInView = false;
    const updatePlayback = () => {
      if (isInView && !document.hidden) {
        void video.play().catch(() => {
          // Playback controls remain available if the browser blocks autoplay.
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        updatePlayback();
      },
      { threshold: [0, 0.25] },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <section id="showcase" className="py-10 lg:py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
          IRIS-AI Farmer Advisor in Action
        </h2>
        <video
          ref={videoRef}
          className="w-full aspect-video rounded-xl bg-black"
          muted
          loop
          playsInline
          controls
          preload="metadata"
          aria-label="IRIS-AI product showcase"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/iris-ai-product-showcase.mp4`}
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>
    </section>
  );
}
