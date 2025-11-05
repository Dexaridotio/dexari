import { TransactionCard } from '../TransactionCard'

export default function TransactionCardExample() {
  return (
    <div className="space-y-3">
      <TransactionCard
        id="1"
        type="sent"
        agent={{ address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", name: "Alice Agent" }}
        amount="250.00"
        currency="USDC"
        status="confirmed"
        timestamp={new Date(Date.now() - 1000 * 60 * 30)}
        onClick={() => console.log('Transaction clicked')}
      />
      <TransactionCard
        id="2"
        type="received"
        agent={{ address: "0x853d955aCEf822Db058eb8505911ED77F175b99e", name: "Bob Agent" }}
        amount="500.00"
        currency="USDC"
        status="processing"
        timestamp={new Date(Date.now() - 1000 * 60 * 60 * 2)}
        onClick={() => console.log('Transaction clicked')}
      />
      <TransactionCard
        id="3"
        type="sent"
        agent={{ address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" }}
        amount="100.50"
        currency="USDC"
        status="pending"
        timestamp={new Date(Date.now() - 1000 * 60 * 15)}
        onClick={() => console.log('Transaction clicked')}
      />
    </div>
  )
}
