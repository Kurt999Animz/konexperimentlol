const lrcscon = document.getElementById('lrcsbruh');
const button = document.getElementById('start-button');

button.addEventListener('click', () => {
  lrcscon.style.opacity = '1';
});

const audio = document.getElementById('bgmusic');
        const lyricsDiv = document.getElementById('lrcsbro');

        const lyrics = [
//manually timestamped these lol
            { time: 0, text: "[Instrumental]" },
            { time: 11.80, text: "Wanna Wanna HAATO ni umareta ganbou" },
            { time: 17.16, text: "BARABARA NOOTO no sumi de bousou" },
            { time: 22.48, text: "achikochi tobichiranai you ni atsumete" },
            { time: 27.83, text: "yume wa egaitara ato wa utau dake" },
            { time: 33.19, text: "seifuku nuidara chotto SUGOi yo?" },
            { time: 35.90, text: "kitete mo mochiron SUGOi kedo" },
            { time: 38.45, text: "sakikurutte tawawa minoru kajitsu wa MEJAA?" },
            { time: 42.20, text: "MAINAA??" },
            { time: 43.69, text: "gosenfu no ue ja donna KOTO mo dekiru" },
            { time: 49.13, text: "mabataki kinshi zenbu zenbu, mitete" },
            { time: 54.92, text: "[Instrumental]" },
            { time: 65.07, text: "wana wana HAMAtta kara ni wa tannou" },
            { time: 68.13, text: "(Join us Join us)" },
            { time: 70.41, text: "JARAJARA deguchi wo motome meisou" },
            { time: 73.51, text: "(Listen Listen)" },
            { time: 75.73, text: "achikochi tobiarukanakute mo jitsu wa" },
            { time: 78.74, text: "(Our dreams come true)" },
            { time: 81.05, text: "yume ga kanau tottoki no sube ga aru" },
            { time: 84.18, text: "(Secret Secret)" },
            { time: 86.49, text: "jugyouchuu no ichijikan ga nande houkago ja isshun" },
            { time: 91.73, text: "sakihokotte urara yamatonadeshiko wa eien" },
            { time: 97.14, text: "gosenfu no ue ja donna TOKO mo ikeru" },
            { time: 102.43, text: "HETAru hima nashi tsuite tsuite, oide" },
            { time: 109.22, text: "Happy-sugi!? Sorry!! utaidashitara saigo" },
            { time: 114.53, text: "GOKIGEN na FUREEZU museigen ni REFUREIN" },
            { time: 119.84, text: "Happy-sugi!? Sorry!! hajimete demo Ride On" },
            { time: 125.08, text: "SUTAIRU wa FURII BIITO ga aeba soku-FURENZU" },
            { time: 131.78, text: "[Instrumental]" },
            { time: 133.96, text: "(Yahoo!)" },
            { time: 136.71, text: "(Ready?)" },
            { time: 139.38, text: "(Come on!)" },
            { time: 142.52, text: "[Instrumental]" },
            { time: 165.12, text: "[Guitar Solo intensifies]" },
            { time: 177.10, text: "gosenfu no ue ja donna KOTO mo dekiru" },
            { time: 182.45, text: "heibon na kyou mo nante nante, EKUSAITINGU" },
            { time: 189.21, text: "Happy-sugi!? Sorry!! FUKIGEN demo Ride On" },
            { time: 194.52, text: "SUMAIRU wo PURIIZU YUNIZON de RIKABARII" },
            { time: 200.24, text: "Very Very Sorry!! utaidashitara saigo" },
            { time: 205.32, text: "GOKIGEN na FUREEZU museigen ni REFUREIN" },
            { time: 211.00, text: "[Instrumental]" },
        ];

        let currentLyricIndex = 0;
        let previousLyricDiv = null;

        
        function resetLyrics() {
            currentLyricIndex = 0; 
            lyricsDiv.innerHTML = '';
        }

        function updateLyrics() {
            const currentTime = audio.currentTime;

            if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
              
                if (previousLyricDiv) {
                    previousLyricDiv.remove();
                }

              
                const lyric = lyrics[currentLyricIndex];
                const newLyricDiv = document.createElement('div');
                newLyricDiv.textContent = lyric.text;


                lyricsDiv.appendChild(newLyricDiv);

                
                previousLyricDiv = newLyricDiv;

                
                currentLyricIndex++;
            }
        }


        audio.addEventListener('timeupdate', updateLyrics);

        audio.addEventListener('play', resetLyrics);
        audio.addEventListener('seeked', resetLyrics); 

