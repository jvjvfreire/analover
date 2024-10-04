$(document).ready(function() {
    const hearts = ['💘', '💗', '💓', '😘', '🌹', '🥰', '❤', '💞', '💝', '❣', '💖', '💟', '😋'];

    function createHeart() {
        const heart = document.createElement('span');
        heart.classList.add('heart');

        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        heart.innerHTML = randomHeart;

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 10 + 15 + 'px';
        document.querySelector('.hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 300);

    const musicTracks = [
        'assets/music/camisa10.mp3',
        'assets/music/cas-sunsetz.mp3',
        'assets/music/cas-sweet.mp3',
        'assets/music/cbjr-meunovomundo.mp3',
        'assets/music/cbjr-vemserminha.mp3',
        'assets/music/comoeuquero.mp3',
        'assets/music/dezembro.mp3',
        'assets/music/djavan-amorpuro.mp3',
        'assets/music/euamovoce.mp3',
        'assets/music/euseiqvouteamar.mp3',
        'assets/music/exagerado.mp3',
        'assets/music/ficoassimsemvc.mp3',
        'assets/music/longedevc.mp3',
        'assets/music/loveinthetimeofsocialism.mp3',
        'assets/music/maisngm.mp3',
        'assets/music/maniadevc.mp3',
        'assets/music/medobobo.mp3',
        'assets/music/mulherdefases.mp3',
        'assets/music/partilhar.mp3',
        'assets/music/pelaluzdosolhosteus.mp3',
        'assets/music/precisodizerqueteamo.mp3',
        'assets/music/seeyouagain.mp3',
        'assets/music/sonhodeamor.mp3',
        'assets/music/sonosdois.mp3',
        'assets/music/sotinhadesercomvoce.mp3',
        'assets/music/ultimoromance.mp3',
        'assets/music/voce.mp3'
    ];

    let currentTrackIndex = Math.floor(Math.random() * musicTracks.length);
    let isRepeating = false;
    let isShuffling = false;
    let sound = new Howl({
        src: [musicTracks[currentTrackIndex]],
        volume: 0.15,
        onend: function() {
            if (!isRepeating) {
                nextTrack();
            }
        }
    });

    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const repeatButton = document.getElementById('repeat');

    const volumeIcon = document.getElementById('volume-icon');
    const volumeControlContainer = document.getElementById('volume-control-container');
    
    volumeIcon.addEventListener('click', () => {
        volumeControlContainer.classList.toggle('d-none');
    });
    
    playPauseButton.addEventListener('click', () => {
        if (sound.playing()) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    function loadTrack() {
        sound.unload();
        sound = new Howl({
            src: [musicTracks[currentTrackIndex]],
            volume: 0.15,
            onend: function() {
                if (!isRepeating) {
                    nextTrack();
                }
            }
        });
    }

    function playTrack() {
        sound.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    function pauseTrack() {
        sound.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    function nextTrack() {
        if (isShuffling) {
            currentTrackIndex = Math.floor(Math.random() * musicTracks.length);
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
        }
        loadTrack();
        sound.play();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
        loadTrack();
    }

    function toggleRepeat() {
        isRepeating = !isRepeating;
        repeatButton.classList.toggle('active', isRepeating);
    }

    volumeControl.addEventListener('input', (e) => {
        sound.volume(e.target.value);
    });

    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);
    repeatButton.addEventListener('click', toggleRepeat);

    const photos = [
        'assets/images/nois/adrporra.jpg',
        'assets/images/nois/bjoelingua.jpg',
        'assets/images/nois/euquando.jpg',
        'assets/images/nois/inicin.jpg',
        'assets/images/nois/kkkkkkkk.jpg',
        'assets/images/nois/linguinha.jpg',
        'assets/images/nois/nagi.jpg',
        'assets/images/nois/noisfofo.jpg'
    ];

    const gifs = [
        'assets/images/gifs/beijos-kisses.gif',
        'assets/images/gifs/vontade.webp',
        'assets/images/gifs/beijo-gato.gif',
        'assets/images/gifs/cheidsdds.jpg',
        'assets/images/gifs/noisgatos.jpeg',
        'assets/images/gifs/oi.jpg',
        'assets/images/gifs/sorrygirls.png',
        'assets/images/gifs/tadura.jpeg',
        'assets/images/gifs/tiamo.jpeg',
        'assets/images/gifs/sdds.jpg',
        'assets/images/gifs/agnt.jpeg',
        'assets/images/gifs/ahnao.jpg',
        'assets/images/gifs/bjfofa.jpg',
        'assets/images/gifs/lovu.jpg',
        'assets/images/gifs/missu.jpg',
        'assets/images/gifs/noismo.jpg',
    ];

    function setRandomPhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        document.getElementById('random-photo').src = photos[randomIndex];
    }

    function setRandomGif() {
        const gifElements = [document.getElementById('gif1'), document.getElementById('gif2'), document.getElementById('gif3')];
        gifElements.forEach(gifElement => {
            const randomIndex = Math.floor(Math.random() * gifs.length);
            gifElement.src = gifs[randomIndex];
        });
    }

    const datingStartDate = new Date('2024-08-17T00:30:00');
    function updateDatingTime() {
        const now = new Date();
        const diff = now - datingStartDate;

        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        function pluralize(value, singular, plural) {
            return value === 1 ? singular : plural;
        }

        const timeString = `${months} ${pluralize(months, 'mês', 'meses')}, ` +
                            `${days} ${pluralize(days, 'dia', 'dias')}, ` +
                            `${hours} ${pluralize(hours, 'hora', 'horas')}<br>` +
                            `${minutes} ${pluralize(minutes, 'minuto', 'minutos')}, ` +
                            `${seconds} ${pluralize(seconds, 'segundo', 'segundos')}`;

        document.getElementById('dating-time').innerHTML = timeString;
    }

    setRandomPhoto();
    setRandomGif();
    updateDatingTime();
    setInterval(updateDatingTime, 1000);
    
    window.onload = function() {
        loadTrack();

    };
});