import { Button, Color, Text, Margin, Select } from '@ds.e/react/lib';
import './App.css';

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Yellow', value: 'yellow' },
];

const App = () => {
  return (
    <div className="app">
      <h1>Mono Repo</h1>
      <Margin left>
        <Text size="lg">Text typography</Text>
      </Margin>
      <Color hexCode="#00FFFF" width="xxxl" height="md" /> <br />
      <Button title="simple button" onClick={() => alert('ds.e button')}>
        Click Me
      </Button>
      <Margin>
        <Text>This is a Select Component</Text>
        <Margin top space="xs">
          <Select
            label="Select a Color"
            options={colorOptions}
            onOptionSelected={console.log}
          />
        </Margin>
      </Margin>
    </div>
  );
};

export default App;
