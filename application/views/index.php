<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosso Namoro</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= base_url('assets/css/index.css') ?>" rel="stylesheet">
</head>
<body>
    <div class="container text-center">
        <div class="music-container">
            <iframe src="https://open.spotify.com/embed/playlist/0A8v5L7CeBxaIB2rpaJrA0?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div class="photo-container">
            <img src="<?= $randomPhoto ?>" alt="Nossa Foto" class="img-fluid anaejv">
        </div>
        <div class="date-container dating-time">
            <p><strong id="dating-time"></strong><br>juntinhos ❤</p>
        </div>
        <div class="text-container">
            <h3 class="text-fofinho">Para você se lembrar de quantos dias se passaram da minha melhor decisão... E que a gente possa voltar aqui e ver que os dias só aumentaram. Eu te amo eternamente minha princesinha ❤️</h3>
        </div>
        <div class="gif-container">
            <div class="tenor-gif-embed primeiro-gif">
                <img src="<?= $randomGif1 ?>" alt="Gif fofo 1" class="gifzinho">
            </div>
            <div class="tenor-gif-embed segundo-gif">
                <img src="<?= $randomGif2 ?>" alt="Gif fofo 1" class="gifzinho">
            </div>
            <div class="tenor-gif-embed terceiro-gif">
                <img src="<?= $randomGif3 ?>" alt="Gif fofo 2" class="gifzinho">
            </div>
        </div>
    </div>

    <script>
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
        setInterval(updateDatingTime, 1000);
    </script>
</body>
</html>