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
	const [songOptions, setSongOptions] = useState({
		songIndex: 0,
		looping: false,
		volumeValue: 0.5,
		autoplayValue: true
	});
	const [songIndex, setSongIndex] = useState(0);
	const [looping, setLooping] = useState(true);
	const [volumeValue, setVolumeValue] = useState(0.5);
	const [autoplayValue, setAutoplayvalue] = useState(true);
	console.log(autoplayValue);
	const { togglePlayPause, ready, loading, playing, volume, mute } =
		useAudioPlayer({
			src: songs[songIndex].soundFile,
			html5: true,
			format: ['mp3'],
			autoplay: autoplayValue,
			onend: () => {
				if (songIndex === songs.length - 1) {
					if (looping) {
						setSongIndex(0);

						console.log('looping');
					} else {
						console.log('not looping');
						setSongIndex(0);
						setAutoplayvalue(false);
					}
				} else {
					setSongIndex(songIndex + 1);
				}
			}
		});
	const [muted, setMuted] = useState(false);
	volume(volumeValue);
	console.log(volumeValue);
	useEffect(() => {
		mute(muted);
	}, [muted, mute]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<div>
			<p>{songs[songIndex].title} is playng</p>
			<button onClick={() => setMuted(!muted)}>Mute</button>
			<button onClick={() => setLooping(!looping)}>loop</button>
			<button
				onClick={() => {
					togglePlayPause();
					setAutoplayvalue(true);
				}}
			>
				{playing ? 'Pause' : 'Play'}
			</button>
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
					onChange={e => setVolumeValue(e.target.value / 10)}
					type='range'
					id='points'
					name='points'
					min='0'
					max='10'
					defaultValue={volumeValue * 10}
				/>
			</div>
		</div>
	);
};

export default AudioPlayer;
