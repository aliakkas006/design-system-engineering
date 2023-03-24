import { Button } from '@ds.e/react/lib';


const App = () => {
  return (
    <div>
      <h1>Mono Repo</h1>
      <Button title="simple button" onClick={() => alert('ds.e button')}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
