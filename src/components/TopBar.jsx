import { useRef, useState } from 'react';

const RADIO_BROWSER = 'https://de1.api.radio-browser.info';
const fallbackLofiStations = [
  { name: 'FLUX FM ChillHop', url_resolved: 'http://streams.fluxfm.de/Chillhop/mp3-320' },
  { name: 'Chillofi Radio', url_resolved: 'http://streams.dez.ovh:8000/radio.mp3' },
  { name: 'Lofi 24/7', url_resolved: 'http://usa9.fastcast4u.com/proxy/jamz?mp=/1' },
  { name: 'SomaFM Beat Blender', url_resolved: 'https://ice1.somafm.com/beatblender-128-mp3' }
];

function shortLabel(text) {
  const clean = String(text || 'Lofi rádio').replace(/â/g, '-');
  return clean.length > 20 ? `${clean.slice(0, 19)}...` : clean;
}

function getPagesUrl() {
  const explicitUrl = (import.meta.env.VITE_APP_PUBLIC_URL || '').trim();
  if (explicitUrl) return explicitUrl;
  if (typeof window !== 'undefined') return new URL(import.meta.env.BASE_URL || '/', window.location.origin).toString();
  return '/';
}

export function TopBar({ onBack, isHome }) {
  const pagesUrl = getPagesUrl();
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const [stations, setStations] = useState([]);
  const [stationIndex, setStationIndex] = useState(0);
  const [isLofi, setIsLofi] = useState(false);
  const [lofiLabel, setLofiLabel] = useState('Lofi rádio');
  const [pomoSeconds, setPomoSeconds] = useState(25 * 60);
  const [pomoRunning, setPomoRunning] = useState(false);

  const audio = () => {
    if (!audioRef.current) audioRef.current = new Audio();
    return audioRef.current;
  };

  async function loadStations() {
    if (stations.length) return stations;
    setLofiLabel('buscando...');
    try {
      const url = `${RADIO_BROWSER}/json/stations/search?name=lofi&hidebroken=true&order=votes&reverse=true&limit=20`;
      const response = await fetch(url, { headers: { Accept: 'application/json' } });
      const data = await response.json();
      const found = data
        .filter((station) => station.url_resolved || station.url)
        .filter((station) => ['MP3', 'AAC', 'OGG'].includes(String(station.codec || '').toUpperCase()) || !station.codec)
        .map((station) => ({
          name: station.name || 'Lofi radio',
          url_resolved: station.url_resolved || station.url,
          stationuuid: station.stationuuid
        }));
      const nextStations = found.length ? found : fallbackLofiStations;
      setStations(nextStations);
      return nextStations;
    } catch {
      setStations(fallbackLofiStations);
      return fallbackLofiStations;
    }
  }

  async function playStation(index) {
    const list = await loadStations();
    const nextIndex = index % list.length;
    const station = list[nextIndex];
    const player = audio();
    setStationIndex(nextIndex);
    setIsLofi(true);
    setLofiLabel(station.name);
    player.pause();
    player.src = station.url_resolved;
    player.volume = 0.35;
    player.onerror = () => nextStation(true);
    try {
      await player.play();
      if (station.stationuuid) fetch(`${RADIO_BROWSER}/json/url/${station.stationuuid}`).catch(() => {});
    } catch {
      setLofiLabel('tentando outra...');
      nextStation(true);
    }
  }

  function stopLofi() {
    setIsLofi(false);
    audio().pause();
    setLofiLabel('Lofi rádio');
  }

  function toggleLofi() {
    if (isLofi) stopLofi();
    else playStation(stationIndex);
  }

  function nextStation(auto = false) {
    if (!stations.length && !auto) {
      playStation(0);
      return;
    }
    playStation((stationIndex + 1) % Math.max(stations.length, 1));
  }

  function setVolume(value) {
    audio().volume = Number(value) / 100;
  }

  function drawTime() {
    const minutes = String(Math.floor(pomoSeconds / 60)).padStart(2, '0');
    const seconds = String(pomoSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function togglePomodoro() {
    if (pomoRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setPomoRunning(false);
      return;
    }
    setPomoRunning(true);
    timerRef.current = setInterval(() => {
      setPomoSeconds((value) => {
        if (value <= 1) {
          alert('Pomodoro concluído! Faça uma pausa de 5 minutos.');
          return 5 * 60;
        }
        return value - 1;
      });
    }, 1000);
  }

  function resetPomodoro() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setPomoRunning(false);
    setPomoSeconds(25 * 60);
  }

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <button className="back-btn" onClick={onBack} title="Voltar" style={{ visibility: isHome ? 'hidden' : 'visible' }}>
          ←
        </button>
        <div className="brand">
          <div className="brand-mark">IA</div>
          <span>IA Quest N1</span>
        </div>
        <div className="utility-row">
          <a className="pill pages-link" href={pagesUrl} target="_blank" rel="noreferrer" title="Abrir GitHub Pages">
            GitHub Pages ↗
          </a>
          <div className="pill" title="Rádio lofi via Radio Browser API">
            <button className="mini-btn" onClick={toggleLofi}>{isLofi ? 'Ⅱ' : '▶'}</button>
            <strong>{shortLabel(lofiLabel)}</strong>
            <button className="mini-btn" onClick={() => nextStation()} title="Trocar estação">↻</button>
            <input className="range" type="range" min="0" max="100" defaultValue="35" onInput={(event) => setVolume(event.target.value)} />
          </div>
          <div className="pill" title="Pomodoro de estudos">
            <strong>{drawTime()}</strong>
            <button className="mini-btn" onClick={togglePomodoro}>▶</button>
            <button className="mini-btn" onClick={resetPomodoro}>↺</button>
          </div>
        </div>
      </div>
    </div>
  );
}
