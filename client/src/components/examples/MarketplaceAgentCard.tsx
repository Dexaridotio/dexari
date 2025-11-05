import { MarketplaceAgentCard } from '../MarketplaceAgentCard'

export default function MarketplaceAgentCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MarketplaceAgentCard
        agent={{
          id: "1",
          address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          name: "Crypto Investment Analyzer",
          description: "AI-powered crypto due diligence - Analyze contracts, Twitter callers, and on-chain data",
          category: "DeFi & Trading",
          rating: 5.0,
          reviewCount: 12,
          tags: ["crypto", "defi", "trading"],
          price: "14.99",
          priceType: "one-time",
          featured: true
        }}
        onView={() => console.log('View agent 1')}
        onQuickPay={() => console.log('Quick pay agent 1')}
      />
      <MarketplaceAgentCard
        agent={{
          id: "2",
          address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          name: "AI Token Contract Analyzer",
          description: "Pay-per-use token contract analysis - Get insights on any token contract address",
          category: "AI Tools",
          rating: 3.3,
          reviewCount: 8,
          tags: ["ai", "token", "analysis"],
          price: "0.25",
          priceType: "per-use"
        }}
        onView={() => console.log('View agent 2')}
        onQuickPay={() => console.log('Quick pay agent 2')}
      />
      <MarketplaceAgentCard
        agent={{
          id: "3",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          name: "x402 Store Starter Kit",
          description: "Complete Next.js template for building your own Solana token payment store",
          category: "Development Tools",
          rating: 5.0,
          reviewCount: 24,
          tags: ["nextjs", "solana", "x402"],
          price: "29.99",
          priceType: "one-time"
        }}
        onView={() => console.log('View agent 3')}
        onQuickPay={() => console.log('Quick pay agent 3')}
      />
    </div>
  )
}
