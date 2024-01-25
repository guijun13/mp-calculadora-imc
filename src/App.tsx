import { useState } from 'react';
import { IMCResult, calculateIMC } from './lib/IMC';

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
            <label htmlFor="weight">Peso</label>
            <input
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-4"
              type="number"
              placeholder="Kg"
              name="weight"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="height">Altura</label>
            <input
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-6"
              type="number"
              placeholder="cm"
              name="height"
            />
          </div>
          {IMCData ? (
            <button
              className="w-full bg-[#E85B81] text-center text-white py-2 my-2 rounded"
              onClick={handleClickReset}
              type="button"
            >
              Refazer
            </button>
          ) : (
            <button
              className="w-full bg-[#E85B81] text-center text-white py-2 my-2 rounded"
              type="submit"
            >
              Calcular
            </button>
          )}
        </form>

        <div className="pt-14 pb-12 flex justify-center">
          {IMCData ? (
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-center text-[#E85B81]">Peso</th>
                  <th className="text-center text-[#E85B81]">Altura</th>
                  <th className="text-center text-[#E85B81]">IMC</th>
                  <th className="text-center text-[#E85B81]">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">{IMCData.weight}</td>
                  <td className="py-1">{IMCData.height}</td>
                  <td className="py-1">{IMCData.IMC}</td>
                  <td className="py-1">
                    {IMCData.IMC < 17
                      ? 'Muito abaixo do peso'
                      : IMCData.IMC < 18.5
                      ? 'Abaixo do peso'
                      : IMCData.IMC < 25
                      ? 'Peso normal'
                      : IMCData.IMC < 30
                      ? 'Acima do peso'
                      : IMCData.IMC < 35
                      ? 'Obesidade I'
                      : IMCData.IMC < 40
                      ? 'Obesidade II (severa)'
                      : 'Obesidade III (mórbida)'}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="text-center text-[#ABABAB]">Saiba agora se está no seu peso ideal!</p>
          )}
        </div>

        <table className="table-auto text-sm">
          <thead>
            <tr>
              <th className="text-center text-[#E85B81]">IMC</th>
              <th className="text-center text-[#E85B81]">Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1">Menos de 17</td>
              <td className="py-1">Muito abaixo do peso</td>
            </tr>
            <tr>
              <td className="py-1">Entre 17 e 18,49</td>
              <td className="py-1">Abaixo do peso</td>
            </tr>
            <tr>
              <td className="py-1">Entre 18,5 e 24,99</td>
              <td className="py-1">Peso normal</td>
            </tr>
            <tr>
              <td className="py-1">Entre 25 e 29,99</td>
              <td className="py-1">Acima do peso</td>
            </tr>
            <tr>
              <td className="py-1">Entre 30 e 34,99</td>
              <td className="py-1">Obesidade I</td>
            </tr>
            <tr>
              <td className="py-1">Entre 35 e 39,99</td>
              <td className="py-1">Obesidade II (severa)</td>
            </tr>
            <tr>
              <td className="py-1">Acima de 40</td>
              <td className="py-1">Obesidade III (mórbida)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
