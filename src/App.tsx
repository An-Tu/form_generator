import AppLayout from 'src/components/app_layout';
import DecodeError from 'src/components/decode_error';
import Tabs from 'src/components/tabs';
import { ModelProvider } from 'src/hooks';
import { make as makeModel } from 'src/model';
import { make as storeCreator } from 'src/store';

const model = makeModel(storeCreator);

const App = () => {
  return (
    <ModelProvider model={model}>
      <AppLayout tabs={<Tabs />} errorsMessages={<DecodeError />} />
    </ModelProvider>
  );
};

export default App;
