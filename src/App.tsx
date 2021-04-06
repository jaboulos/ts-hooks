import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';
import UseContextComponent from './components/UseContextComponent';

const App = () => {
  return (
    <div>
      <h1>UseStateComponent</h1>
      <UseStateComponent />
      <h1>UseEffectComponent</h1>
      <UseEffectComponent />
      <h1>UseContextComponent</h1>
      <UseContextComponent />
    </div>
  );
};

export default App;
