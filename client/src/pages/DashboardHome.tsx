import { useState } from "react";
import { WalletBalanceCard } from "@/components/WalletBalanceCard";
import { StatCard } from "@/components/StatCard";
import { AgentCard } from "@/components/AgentCard";
import { PendingActionCard } from "@/components/PendingActionCard";
import { PaymentVolumeChart } from "@/components/PaymentVolumeChart";
import { TransactionCard } from "@/components/TransactionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownLeft, Users, Clock, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function DashboardHome() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("agents");

  //todo: remove mock functionality
  const mockAgents = [
    {
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      name: "Alice Agent",
      totalSent: "1,250",
      totalReceived: "890",
      lastTransaction: "30 mins ago"
    },
    {
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
      name: "Bob Agent",
      totalSent: "500",
      totalReceived: "1,200",
      lastTransaction: "2 hours ago"
    },
    {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      name: "Charlie Agent",
      totalSent: "0",
      totalReceived: "350",
      lastTransaction: "1 day ago"
    },
    {
      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      name: "Delta Agent",
      totalSent: "780",
      totalReceived: "0",
      lastTransaction: "3 hours ago"
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

  //todo: remove mock functionality
  const mockTransactions = [
    {
      id: "1",
      type: "sent" as const,
      agent: { address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", name: "Alice Agent" },
      amount: "250.00",
      currency: "USDC",
      status: "confirmed" as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "2",
      type: "received" as const,
      agent: { address: "0x853d955aCEf822Db058eb8505911ED77F175b99e", name: "Bob Agent" },
      amount: "500.00",
      currency: "USDC",
      status: "confirmed" as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "3",
      type: "sent" as const,
      agent: { address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", name: "Delta Agent" },
      amount: "100.50",
      currency: "USDC",
      status: "processing" as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
  ];

  //todo: remove mock functionality
  const mockChartData = [
    { date: "Mon", sent: 120, received: 80 },
    { date: "Tue", sent: 200, received: 150 },
    { date: "Wed", sent: 180, received: 220 },
    { date: "Thu", sent: 250, received: 180 },
    { date: "Fri", sent: 300, received: 250 },
    { date: "Sat", sent: 180, received: 200 },
    { date: "Sun", sent: 220, received: 190 },
  ];

  const handleQuickPay = (agentName: string) => {
    toast({
      title: "Quick Pay",
      description: `Opening payment to ${agentName}...`,
    });
    console.log('Quick pay to:', agentName);
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
        <h1 className="text-3xl font-display font-bold mb-1">Dashboard</h1>
        <p className="text-muted-foreground">Monitor payments and manage your agent network</p>
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
          title="Total Sent"
          value="1,234.56 USDC"
          icon={ArrowUpRight}
          trend={{ value: "+12.5%", isPositive: true }}
        />
        <StatCard
          title="Total Received"
          value="987.32 USDC"
          icon={ArrowDownLeft}
          trend={{ value: "+8.3%", isPositive: true }}
        />
        <StatCard
          title="Active Agents"
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

      <PaymentVolumeChart data={mockChartData} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>Your Network</CardTitle>
          <Button variant="outline" size="sm" className="gap-2" data-testid="button-add-agent">
            <Plus className="h-4 w-4" />
            Add Agent
          </Button>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="agents" data-testid="tab-agents">Agents ({mockAgents.length})</TabsTrigger>
              <TabsTrigger value="recent" data-testid="tab-recent">Recent Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agents" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockAgents.map((agent) => (
                  <AgentCard
                    key={agent.address}
                    agent={agent}
                    onQuickPay={() => handleQuickPay(agent.name)}
                    onViewDetails={() => console.log('View details:', agent.name)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-0">
              <div className="space-y-3">
                {mockTransactions.map((tx) => (
                  <TransactionCard
                    key={tx.id}
                    {...tx}
                    onClick={() => console.log('Transaction clicked:', tx.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
