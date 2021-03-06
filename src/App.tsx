import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponet from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import CustomHookComponent from './components/CustomHookComponent';
import ExtraExamplesComponent from './components/ExtraExamplesComponent';

const App = () => {
  return (
    <div>
      <h1>UseStateComponent</h1>
      <UseStateComponent />
      <h1>UseEffectComponent</h1>
      <UseEffectComponent />
      <h1>UseContextComponent</h1>
      <UseContextComponent />
      <h1>UseReducerComponent</h1>
      <UseReducerComponet />
      <h1>UseRefComponent</h1>
      <UseRefComponent />
      <h1>CustomHookComponent</h1>
      <CustomHookComponent />
      <h1>ExtraExamplesComponent</h1>
      <ExtraExamplesComponent />
    </div>
  );
};

export default App;
