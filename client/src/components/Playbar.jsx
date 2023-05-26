import React from 'react';
import { useAudioPosition } from 'react-use-audio-player';
import ProgressBar from './ProgressBar';

const PlayBar = () => {
	const { percentComplete, duration, seek, playing, position } =
		useAudioPosition({
			highRefreshRate: true
		});

	const goToPosition = React.useCallback(
		percentage => {
			seek(duration * percentage);
		},
		[duration, seek]
	);

	return (
		<ProgressBar
			percentComplete={percentComplete}
			onBarPositionClick={goToPosition}
			seek={seek}
			duration={duration}
			playing={playing}
			position={position}
		/>
	);
};
export default PlayBar;
