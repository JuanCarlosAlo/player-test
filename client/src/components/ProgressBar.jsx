import { useCallback, useRef } from 'react';
import { StyledBar, StyledContainerBar, StyledSlideBar } from './styles';

const ProgressBar = ({
	percentComplete,
	onBarPositionClick,
	seek,
	duration,
	position,
	playing
}) => {
	const elapsed = typeof position === 'number' ? position : 0;
	const seekBarElem = useRef(null);
	const goTo = useCallback(
		event => {
			const { pageX: eventOffsetX } = event;

			if (seekBarElem.current) {
				const elementOffsetX = seekBarElem.current.offsetLeft;
				const elementWidth = seekBarElem.current.clientWidth;
				const percent = (eventOffsetX - elementOffsetX) / elementWidth;
				seek(percent * duration);
			}
		},
		[duration, playing, seek]
	);
	return (
		<>
			<StyledContainerBar onClick={goTo} ref={seekBarElem}>
				<StyledBar percentComplete={percentComplete} />
				<StyledSlideBar percentComplete={percentComplete}></StyledSlideBar>
			</StyledContainerBar>
			<div>{`${formatTime(elapsed)} / ${formatTime(duration)}`}</div>
		</>
	);
};

const formatTime = seconds => {
	const floored = Math.floor(seconds);
	let from = 14;
	let length = 5;
	if (floored >= 3600) {
		from = 11;
		length = 8;
	}
	return new Date(floored * 1000).toISOString().substr(from, length);
};

export default ProgressBar;
