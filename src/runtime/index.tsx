import { createRoot } from 'react-dom/client';
import HomeMd from '../../docs/home.md'

export const App = () => {
  console.log(HomeMd)
  return (
    <div>
      <h1>hello world</h1>
      <HomeMd />
    </div>
  );
};

const domNode = document.getElementById('root');
console.log(domNode)
const root = createRoot(domNode);
root.render(<App />);
