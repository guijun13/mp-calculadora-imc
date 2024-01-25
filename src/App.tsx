import { useState } from 'react';
import { IMCResult, calculateIMC } from './lib/IMC';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';
import IMCTable from './components/IMCTable';
import IMCResultTable from './components/IMCResultTable';

function App() {
  const [IMCData, setIMCData] = useState<null | {
    weight: number;
    height: number;
    IMC: number;
    IMCResultValue: string;
  }>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as { weight: string; height: string };

    const { weight, height } = data;
    if (!weight || !height) {
      alert('Ops... você precisa preencher todos os campos');
      return;
    }

    const weightValue = parseFloat(weight.replace(',', '.'));
    const heightValue = parseFloat(height.replace(',', '.')) / 100;

    if (isNaN(weightValue) || isNaN(heightValue)) {
      alert('Insira um valor válido');
      return;
    }

    if (weightValue < 2 || weightValue > 300) {
      alert('Insira um valor válido de peso');
      return;
    }

    if (heightValue < 0.3 || heightValue > 3) {
      alert('Insira um valor válido de altura');
      return;
    }

    const IMC = calculateIMC(weightValue, heightValue);
    const IMCResultValue = IMCResult(IMC);

    setIMCData({
      weight: weightValue,
      height: heightValue,
      IMC,
      IMCResultValue,
    });

    event.currentTarget.reset();
  };

  function handleClickReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIMCData(null);
  }

  return (
    <div className="px-8 py-12 sm:px-32 md:px-52 lg:px-72 bg-[#c7c7c7] h-fit">
      <div className="p-12 flex flex-col bg-white h-fit">
        <h1 className="text-2xl py-2 text-center">Calculadora IMC</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label htmlFor="weight">Peso</Label>
            <Input className="mb-4" type="number" placeholder="Kg" name="weight" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="height">Altura</Label>
            <Input className="mb-6" type="number" placeholder="cm" name="height" />
          </div>
          {IMCData ? (
            <Button onClick={handleClickReset} type="button">
              Refazer
            </Button>
          ) : (
            <Button type="submit">Calcular</Button>
          )}
        </form>

        <div className="pt-14 pb-12 flex justify-center">
          {IMCData ? (
            <IMCResultTable IMCData={IMCData} />
          ) : (
            <p className="text-center text-[#ABABAB]">Saiba agora se está no seu peso ideal!</p>
          )}
        </div>
        <IMCTable />
      </div>
    </div>
  );
}

export default App;
