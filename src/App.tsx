function App() {
  return (
    <div className="px-8 py-12 sm:px-32 md:px-52 lg:px-72 bg-[#c7c7c7] h-fit">
      <div className="p-12 flex flex-col bg-white h-fit">
        <h1 className="text-2xl py-2 text-center">Calculadora IMC</h1>
        <form>
          <div className="flex flex-col">
            <label htmlFor="">Peso</label>
            <input
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-4"
              type="number"
              placeholder="Kg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Altura</label>
            <input
              className="border rounded-md border-solid border-[#E85B81] py-3 pl-6 mb-6"
              type="number"
              placeholder="cm"
            />
          </div>
          <button className="w-full bg-[#E85B81] text-center text-white py-2 my-2 rounded">
            Calcular
          </button>
        </form>

        <div className="pt-14 pb-12 text-center text-[#ABABAB]">
          Saiba agora se está no seu peso ideal!
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
