import AudioPlayer from './components/AudioPlayer';
import PlayBar from './components/Playbar';
import { SONG, SONGS } from './constants/songs';
import { GlobalStyles } from './styles/GlobalStyles';
import { AudioPlayerProvider } from 'react-use-audio-player';
const App = () => {
	return (
		<>
			<GlobalStyles />
			<AudioPlayerProvider>
				<AudioPlayer file={SONGS} />
				<PlayBar />
			</AudioPlayerProvider>
		</>
	);
};

export default App;
