const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const tirarFotoBtn = document.getElementById('tirarFoto');
const salvarFotoBtn = document.getElementById('salvarFoto');

// Ativar a câmera
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert('Erro ao acessar a câmera: ' + err);
  });

// Tirar a foto
tirarFotoBtn.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext('2d');

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  const moldura = document.getElementById('moldura');
  context.drawImage(moldura, 0, 0, canvas.width, canvas.height);
  
  canvas.style.display = 'block';
});

// Salvar a foto
salvarFotoBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'selfie.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});