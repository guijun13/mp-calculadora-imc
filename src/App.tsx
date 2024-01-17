import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ peso: '', altura: '' });
  const [IMC, setIMC] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    IMC === 0
      ? setIMC(Number(formData.peso) / (Number(formData.altura) / 100) ** 2)
      : (setIMC(0), setFormData({ peso: '', altura: '' }));
    console.log(IMC);
  };

  return (
    <div className="px-8 py-12 sm:px-32 md:px-52 lg:px-72 bg-[#c7c7c7] h-fit">
      <div className="p-12 flex flex-col bg-white h-fit">
        <h1 className="text-2xl py-2 text-center">Calculadora IMC</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Peso</label>
            <input
              required
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-4"
              type="number"
              placeholder="Kg"
              value={formData.peso}
              onChange={handleChange}
              name="peso"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Altura</label>
            <input
              required
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-6"
              type="number"
              placeholder="cm"
              value={formData.altura}
              onChange={handleChange}
              name="altura"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#E85B81] text-center text-white py-2 my-2 rounded"
          >
            {IMC ? 'Refazer' : 'Calcular'}
          </button>
        </form>

        <div className="pt-14 pb-12 flex justify-center">
          {IMC ? (
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
                  <td className="py-1">{formData.peso}</td>
                  <td className="py-1">{formData.altura}</td>
                  <td className="py-1">{IMC.toFixed(2)}</td>
                  <td className="py-1">
                    {IMC < 17
                      ? 'Muito abaixo do peso'
                      : IMC < 18.5
                      ? 'Abaixo do peso'
                      : IMC < 25
                      ? 'Peso normal'
                      : IMC < 30
                      ? 'Acima do peso'
                      : IMC < 35
                      ? 'Obesidade I'
                      : IMC < 40
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
