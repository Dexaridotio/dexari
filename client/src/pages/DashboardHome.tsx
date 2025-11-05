import { useState } from "react";
import { WalletBalanceCard } from "@/components/WalletBalanceCard";
import { StatCard } from "@/components/StatCard";
import { MarketplaceAgentCard } from "@/components/MarketplaceAgentCard";
import { PendingActionCard } from "@/components/PendingActionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownLeft, Users, Clock, Search, SlidersHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function DashboardHome() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  //todo: remove mock functionality
  const mockAgents = [
    {
      id: "1",
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      name: "Crypto Investment Analyzer",
      description: "AI-powered crypto due diligence - Analyze contracts, Twitter callers, and on-chain data",
      category: "DeFi & Trading",
      rating: 5.0,
      reviewCount: 12,
      tags: ["crypto", "defi", "trading"],
      price: "14.99",
      priceType: "one-time" as const,
      featured: true
    },
    {
      id: "2",
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
      name: "AI Token Contract Analyzer",
      description: "Pay-per-use token contract analysis - Get insights on any token contract address",
      category: "AI Tools",
      rating: 3.3,
      reviewCount: 8,
      tags: ["ai", "token", "analysis"],
      price: "0.25",
      priceType: "per-use" as const
    },
    {
      id: "3",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      name: "x402 Store Starter Kit",
      description: "Complete Next.js template for building your own Solana token payment store",
      category: "Development Tools",
      rating: 5.0,
      reviewCount: 24,
      tags: ["nextjs", "solana", "x402"],
      price: "29.99",
      priceType: "one-time" as const
    },
    {
      id: "4",
      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      name: "AI Alpha Caller Analyzer",
      description: "Pay-per-use Twitter/X alpha caller analysis - Get insights on any KOL",
      category: "AI Tools",
      rating: 5.0,
      reviewCount: 15,
      tags: ["ai", "twitter", "analysis"],
      price: "0.25",
      priceType: "per-use" as const,
      featured: true
    },
    {
      id: "5",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      name: "xDXRI Telegram Solana Agent",
      description: "Telegram bot that automatically analyzes Solana token contracts sent to it",
      category: "DeFi & Trading",
      rating: 5.0,
      reviewCount: 31,
      tags: ["telegram", "solana", "bot"],
      price: "9.99",
      priceType: "one-time" as const
    },
    {
      id: "6",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      name: "Smart Contract Auditor",
      description: "Automated security analysis for Solana and EVM smart contracts with detailed reports",
      category: "Development Tools",
      rating: 4.8,
      reviewCount: 19,
      tags: ["security", "audit", "smart-contracts"],
      price: "1.50",
      priceType: "per-use" as const
    },
  ];

  //todo: remove mock functionality
  const mockPendingActions = [
    {
      id: "1",
      type: "payment_request" as const,
      agent: { address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", name: "Alice Agent" },
      amount: "150.00",
      currency: "USDC",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      description: "Payment for API service usage"
    },
    {
      id: "2",
      type: "pending_confirmation" as const,
      agent: { address: "0x853d955aCEf822Db058eb8505911ED77F175b99e", name: "Bob Agent" },
      amount: "75.50",
      currency: "USDC",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
  ];

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = searchQuery === "" || 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = categoryFilter === "all" || agent.category === categoryFilter;
    const matchesTab = activeTab === "all" || 
      (activeTab === "featured" && agent.featured) ||
      (activeTab === "ai" && agent.category === "AI Tools") ||
      (activeTab === "defi" && agent.category === "DeFi & Trading") ||
      (activeTab === "dev" && agent.category === "Development Tools");
    return matchesSearch && matchesCategory && matchesTab;
  });

  const handleQuickPay = (agentName: string) => {
    toast({
      title: "Quick Pay",
      description: `Opening payment to ${agentName}...`,
    });
    console.log('Quick pay to:', agentName);
  };

  const handleViewAgent = (agentName: string) => {
    toast({
      title: "View Agent",
      description: `Opening details for ${agentName}...`,
    });
    console.log('View agent:', agentName);
  };

  const handleApproveAction = (id: string) => {
    toast({
      title: "Action Approved",
      description: "Processing your approval...",
    });
    console.log('Approved action:', id);
  };

  const handleRejectAction = (id: string) => {
    toast({
      title: "Action Declined",
      description: "The request has been declined.",
    });
    console.log('Rejected action:', id);
  };

  return (
    <div className="space-y-6" data-testid="page-dashboard">
      <div>
        <h1 className="text-3xl font-display font-bold mb-1">Agent Marketplace</h1>
        <p className="text-muted-foreground">Discover and pay for AI-powered agents and automation workflows</p>
      </div>

      <WalletBalanceCard
        balance="2,845.67"
        currency="USDC"
        change24h={{ value: "+5.2%", isPositive: true }}
        onSend={() => console.log('Navigate to send')}
        onReceive={() => console.log('Navigate to request')}
        onHistory={() => console.log('Navigate to history')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Spent"
          value="1,234.56 USDC"
          icon={ArrowUpRight}
          trend={{ value: "+12.5%", isPositive: true }}
        />
        <StatCard
          title="Total Earned"
          value="987.32 USDC"
          icon={ArrowDownLeft}
          trend={{ value: "+8.3%", isPositive: true }}
        />
        <StatCard
          title="Agents Used"
          value="24"
          icon={Users}
        />
        <StatCard
          title="Pending Actions"
          value={mockPendingActions.length.toString()}
          icon={Clock}
        />
      </div>

      {mockPendingActions.length > 0 && (
        <Card className="border-primary/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Pending Actions
            </CardTitle>
            <span className="text-sm text-muted-foreground">{mockPendingActions.length} items</span>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mockPendingActions.map((action) => (
                <PendingActionCard
                  key={action.id}
                  {...action}
                  onApprove={() => handleApproveAction(action.id)}
                  onReject={() => handleRejectAction(action.id)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle>Browse Agents</CardTitle>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-agents"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40" data-testid="select-category">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="AI Tools">AI Tools</SelectItem>
                  <SelectItem value="DeFi & Trading">DeFi & Trading</SelectItem>
                  <SelectItem value="Development Tools">Development Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
              <TabsTrigger value="featured" data-testid="tab-featured">Featured</TabsTrigger>
              <TabsTrigger value="ai" data-testid="tab-ai">AI Tools</TabsTrigger>
              <TabsTrigger value="defi" data-testid="tab-defi">DeFi</TabsTrigger>
              <TabsTrigger value="dev" data-testid="tab-dev">Dev Tools</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAgents.map((agent) => (
              <MarketplaceAgentCard
                key={agent.id}
                agent={agent}
                onView={() => handleViewAgent(agent.name)}
                onQuickPay={() => handleQuickPay(agent.name)}
              />
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No agents found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
