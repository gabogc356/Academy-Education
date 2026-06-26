import React, { useState } from 'react';
import './CameraModule.css';

export const CameraModule: React.FC = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('No se pudo acceder a la cámara');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      setCameraActive(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageData = canvasRef.current.toDataURL('image/png');
        setPhotos([...photos, imageData]);
      }
    }
  };

  const deletePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="module-container camera-module">
      <h1>📷 Cámara</h1>
      <p>Captura fotos y videos con tu cámara</p>

      <div className="camera-container">
        {!cameraActive && (
          <button onClick={startCamera} className="btn-start">
            📷 Abrir Cámara
          </button>
        )}

        {cameraActive && (
          <div className="camera-view">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: '100%', borderRadius: '0.75rem' }}
            />
            <canvas
              ref={canvasRef}
              width={640}
              height={480}
              style={{ display: 'none' }}
            />
            <div className="camera-controls">
              <button onClick={takePhoto} className="btn-photo">
                ✨ Capturar Foto
              </button>
              <button onClick={stopCamera} className="btn-stop">
                ✕ Cerrar Cámara
              </button>
            </div>
          </div>
        )}
      </div>

      {photos.length > 0 && (
        <div className="photos-gallery">
          <h2>Fotos Capturadas ({photos.length})</h2>
          <div className="gallery-grid">
            {photos.map((photo, idx) => (
              <div key={idx} className="photo-item">
                <img src={photo} alt={`Foto ${idx + 1}`} />
                <button onClick={() => deletePhoto(idx)} className="btn-delete">
                  🗑️ Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
