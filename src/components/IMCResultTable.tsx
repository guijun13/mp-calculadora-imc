import { formatNumber } from '../lib/utils';

function IMCResultTable({
  IMCData,
}: {
  IMCData: {
    weight: number;
    height: number;
    IMC: number;
    IMCResultValue: string;
  };
}) {
  return (
    <table className="text-center text-xs md:text-base md:[&>tbody>tr>td]:p-2 md:[&>tbody>tr>td]:px-4 [&>tbody>tr>td]:px-2 text-neutral-600 mx-auto">
      <thead>
        <tr className="font-bold border-b border-b-rose-400">
          <th className="text-center text-[#E85B81]">Peso</th>
          <th className="text-center text-[#E85B81]">Altura</th>
          <th className="text-center text-[#E85B81]">IMC</th>
          <th className="text-center text-[#E85B81]">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1">{formatNumber(IMCData.weight)}</td>
          <td className="py-1">{formatNumber(IMCData.height, 0)}</td>
          <td className="py-1">{formatNumber(IMCData.IMC)}</td>
          <td className="py-1">{IMCData.IMCResultValue}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default IMCResultTable;
