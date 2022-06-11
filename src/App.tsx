import { BlogCard } from './Blog/components/BlogCard';
import './index.css';
import { MainControls } from './MainControls';

function App() {
  return (
	  <div className='bg-primary-default/90 h-screen'>
		  	<MainControls>
				<BlogCard />
			</MainControls>
		</div>
  );
}

export default App;
