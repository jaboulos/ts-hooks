import UseEffectComponent from './components/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponet from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import CustomHookComponent from './components/CustomHookComponent';
import ExtraExamplesComponent from './components/ExtraExamplesComponent';

import { UseState2 } from './components/2022-hooks-tutorials/UseState2';

const App = () => {
  return (
    <div>
      <h3>UseStateComponent</h3>
      <UseStateComponent />
      <h3>UseEffectComponent</h3>
      <UseEffectComponent />
      <h3>UseContextComponent</h3>
      <UseContextComponent />
      <h3>UseReducerComponent</h3>
      <UseReducerComponet />
      <h3>UseRefComponent</h3>
      <UseRefComponent />
      <h3>CustomHookComponent</h3>
      <CustomHookComponent />
      <h3>ExtraExamplesComponent</h3>
      <ExtraExamplesComponent />

      <h1>2022 hook examples</h1>
      <h3>UseState2</h3>
      <UseState2 />
    </div>
  );
};

export default App;
