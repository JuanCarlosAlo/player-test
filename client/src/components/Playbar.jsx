import { useAudioPosition } from 'react-use-audio-player';
import ProgressBar from './ProgressBar';

const PlayBar = () => {
	const { percentComplete, duration, seek, playing, position } =
		useAudioPosition({
			highRefreshRate: true
		});

	return (
		<ProgressBar
			percentComplete={percentComplete}
			seek={seek}
			duration={duration}
			playing={playing}
			position={position}
		/>
	);
};
export default PlayBar;
