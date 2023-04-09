import { Button, Color, Text } from '@ds.e/react/lib';

const App = () => {
  return (
    <div>
      <h1>Mono Repo</h1>
      <Text size="xs">Text typography</Text>
      <Color hexCode="#00FFFF" width="xxxl" height="md" /> <br />
      <Button title="simple button" onClick={() => alert('ds.e button')}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
