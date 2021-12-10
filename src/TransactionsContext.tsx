import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

// interface ITransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<
  ITransaction,
  "id" | "createdAt"
>; /* faz o mesmo que
 o ITransactionInput comentado -- Ou seja ele pega tudo que é usado
 no ITransaction menos os que eu passei -- outra opção é utilizar
 o Pick<ITransaction, 'title' | amount | type | category>
 nesse caso vai pegar igual do ITransaction os que eu passei. */

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
