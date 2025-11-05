import { WalletBalanceCard } from "@/components/WalletBalanceCard";
import { StatCard } from "@/components/StatCard";
import { TransactionCard } from "@/components/TransactionCard";
import { ActivityItem } from "@/components/ActivityItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, Users, Clock, CheckCircle2, UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DashboardHome() {
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
      agent: { address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" },
      amount: "100.50",
      currency: "USDC",
      status: "processing" as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
  ];

  //todo: remove mock functionality
  const mockActivities = [
    {
      icon: CheckCircle2,
      title: "Payment Confirmed",
      description: "Payment to Alice Agent confirmed on-chain",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      icon: ArrowUpRight,
      title: "Payment Sent",
      description: "Sent 100.50 USDC to Agent 0x1f98...F984",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      icon: UserPlus,
      title: "New Agent Connected",
      description: "Charlie Agent added to your network",
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-dashboard">
      <div>
        <h1 className="text-3xl font-display font-bold mb-1">Dashboard</h1>
        <p className="text-muted-foreground">Manage your agent payments and track transactions</p>
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
          title="Pending"
          value="3"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTransactions.map((tx) => (
                <TransactionCard
                  key={tx.id}
                  {...tx}
                  onClick={() => console.log('Transaction clicked:', tx.id)}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6 space-y-2">
              {mockActivities.map((activity, idx) => (
                <ActivityItem key={idx} {...activity} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
