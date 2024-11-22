"use client";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
import { SectionTitle } from "../components/ui/titles/sectionTitle";


export default function Inventory() {
  return (
    <>
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
          <BreadCrumb
            link="/dashboard"
            description="Voltar para a dashboard"
          ></BreadCrumb>

          <SectionTitle
              iconClass="fa-solid fa-box-open"
              sectionTitle="Estoque"
              color="text-gamboge"
              >
            </SectionTitle>
            
            const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    calculateFinances(transactionsList);
    setProductCount(transactionsList.length);
  }, [transactionsList]);

  const calculateFinances = (transactions) => {
    const amountExpense = transactions
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));
    const amountIncome = transactions
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  };

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredTransactions = transactionsList.filter((transaction) => {
    return transaction.desc
      ? transaction.desc.toLowerCase().includes(query.toLowerCase())
      : false;
  });

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Resume income={income} expense={expense} total={total} productCount={productCount} />
      <Form
        handleAdd={handleAdd}
        transactionsList={query ? filteredTransactions : transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );

        </main>
      </div>
    </div>
  </>
  );
};
