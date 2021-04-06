import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';

const App = () => {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffectComponent</h1>
      <UseEffectComponent />
    </div>
  );
};

export default App;
