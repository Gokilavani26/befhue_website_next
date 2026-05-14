"use client";

type VideoModalProps = {
  videoUrl: string;
  onClose: () => void;
};

const VideoModal = ({
  videoUrl,
  onClose,
}: VideoModalProps) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl z-50"
      >
        ×
      </button>

      {/* Video */}
      <video
        controls
        autoPlay
        playsInline
        preload="none"
        className="max-h-[90vh] max-w-[95vw] rounded-2xl"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoModal;