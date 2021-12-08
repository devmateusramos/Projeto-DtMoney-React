import { useEffect } from "react";
import { Container } from "./styles";
import {api} from "../../services/api"

export function TransactionsTable() {
  useEffect(()=>{
    api.get('/transactions')
      .then(response => console.log(response.data))
  },[])

  return (
    <Container>
      <table>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.0000,00</td>
            <td>Desenvolvimento</td>
            <td>06/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.400,00</td>
            <td>Casa</td>
            <td>04/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
