import { AgentCard } from '../AgentCard'

export default function AgentCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AgentCard
        agent={{
          address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          name: "Alice Agent",
          totalSent: "1,250",
          totalReceived: "890",
          lastTransaction: "30 mins ago"
        }}
        onQuickPay={() => console.log('Quick pay to Alice')}
        onViewDetails={() => console.log('View Alice details')}
      />
      <AgentCard
        agent={{
          address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          name: "Bob Agent",
          totalSent: "500",
          totalReceived: "1,200",
          lastTransaction: "2 hours ago"
        }}
        onQuickPay={() => console.log('Quick pay to Bob')}
        onViewDetails={() => console.log('View Bob details')}
      />
      <AgentCard
        agent={{
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          name: "Charlie Agent",
          totalSent: "0",
          totalReceived: "350",
          lastTransaction: "1 day ago"
        }}
        onQuickPay={() => console.log('Quick pay to Charlie')}
        onViewDetails={() => console.log('View Charlie details')}
      />
    </div>
  )
}
