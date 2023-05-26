import { useEffect, useState } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const AudioPlayer = ({ file }) => {
	let songs = [];
	// https://github.com/E-Kuerschner/useAudioPlayer/tree/main
	if (Array.isArray(file)) {
		songs = file.map(element => element);
	} else {
		songs.push(file);
	}
	const [songIndex, setSongIndex] = useState(0);

	const { togglePlayPause, ready, loading, playing, volume, mute } =
		useAudioPlayer({
			src: songs[songIndex].soundFile,
			html5: true,
			format: ['mp3'],
			autoplay: true,
			onend: () => {
				if (songIndex === songs.length - 1) return;
				setSongIndex(songIndex + 1);
			}
		});
	const [muted, setMuted] = useState(false);

	useEffect(() => {
		mute(muted);
	}, [muted, mute]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<div>
			<p>{songs[songIndex].title} is playng</p>
			<button onClick={() => setMuted(!muted)}>Mute</button>
			<button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
			<button
				onClick={() => {
					if (songIndex === songs.length - 1) return;
					setSongIndex(songIndex + 1);
				}}
			>
				Next
			</button>
			<button
				onClick={() => {
					if (songIndex === 0) return;
					setSongIndex(songIndex - 1);
				}}
			>
				Prev
			</button>
			<div>
				<label htmlFor='points'>volume</label>
				<input
					onChange={e => volume(e.target.value / 10)}
					type='range'
					id='points'
					name='points'
					min='0'
					max='10'
				/>
			</div>
		</div>
	);
};

export default AudioPlayer;
