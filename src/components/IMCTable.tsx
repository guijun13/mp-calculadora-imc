function IMCTable() {
  return (
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
  );
}

export default IMCTable;
