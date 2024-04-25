import {useCurrentUser} from '@features/users';
import {Pagination, TableLoader} from '@components';

const TransactionsTable = () => {
  const currentUser = useCurrentUser();

  const headings = ['From', 'To', 'Amount', 'Date', 'Time'];

  if (currentUser.isLoading) {
    return <TableLoader />;
  }

  const transactions = [
    {
      sender: currentUser.data.name,
      recipient: 'pqr',
      amount: 100,
      date: '18/4/2024',
      time: '10:20 AM',
    },
    {
      sender: 'pqr',
      recipient: currentUser.data.name,
      amount: 200,
      date: '16/4/2024',
      time: '01:00 PM',
    },
    {
      sender: 'abc',
      recipient: currentUser.data.name,
      amount: 150,
      date: '13/4/2024',
      time: '06:30 AM',
    },
  ];

  if (transactions?.length === 0) {
    return (
      <div className="p-28 text-center font-montserrat">
        Hmm...No Transactions found.
      </div>
    );
  }

  return (
    <>
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b border-gray-50 text-gray-400 transition-colors hover:bg-muted/50 dark:border-dark-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="h-[54px] w-[150px] px-4 text-left align-middle text-base font-medium text-muted-foreground"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 transition-colors hover:bg-muted/50 dark:border-dark-800"
            >
              <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                {transaction.sender}
              </td>
              <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                {transaction.recipient}
              </td>
              <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                {currentUser.data?.name === transaction.recipient ? (
                  <div className="inline-flex items-center justify-center rounded-lg bg-green-50 px-2.5 py-1 text-sm font-semibold text-green-600 dark:bg-green-500/10">
                    + {transaction.amount}
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center rounded-lg bg-red-50 px-2.5 py-1 text-sm font-semibold text-red-600 dark:bg-red-500/10">
                    - {transaction.amount}
                  </div>
                )}
              </td>
              <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                {transaction.date}
              </td>
              <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                {transaction.time}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full font-medium text-gray-400">
          <tr className="transition-colors hover:bg-muted/50">
            <td className="px-2 py-2.5 align-middle" colSpan="5">
              <Pagination />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TransactionsTable;
