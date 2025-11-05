import { PendingActionCard } from '../PendingActionCard'

export default function PendingActionCardExample() {
  return (
    <div className="space-y-3">
      <PendingActionCard
        id="1"
        type="payment_request"
        agent={{ address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", name: "Alice Agent" }}
        amount="150.00"
        currency="USDC"
        timestamp={new Date(Date.now() - 1000 * 60 * 10)}
        description="Payment for API service usage"
        onApprove={() => console.log('Approved')}
        onReject={() => console.log('Rejected')}
      />
      <PendingActionCard
        id="2"
        type="pending_confirmation"
        agent={{ address: "0x853d955aCEf822Db058eb8505911ED77F175b99e", name: "Bob Agent" }}
        amount="75.50"
        currency="USDC"
        timestamp={new Date(Date.now() - 1000 * 60 * 5)}
        onApprove={() => console.log('Confirmed')}
        onReject={() => console.log('Cancelled')}
      />
    </div>
  )
}
