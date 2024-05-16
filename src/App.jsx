import Sidebar from './components/Sidebar';
import ProjectMain from './components/ProjectMain';

function App() {
	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar />
			<ProjectMain />
		</main>
	);
}

export default App;
