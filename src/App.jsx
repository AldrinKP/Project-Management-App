import Sidebar from './components/Sidebar';
import ProjectsContextProvider from './store/projects-context';
import MainSection from './components/MainSection';

function App() {
	return (
		<ProjectsContextProvider>
			<main className="h-screen my-8 flex gap-8">
				<Sidebar />
				<MainSection />
			</main>
		</ProjectsContextProvider>
	);
}

export default App;
