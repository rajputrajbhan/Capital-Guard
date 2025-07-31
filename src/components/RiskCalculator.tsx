import React, { useState } from 'react';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, Shield, DollarSign, Target, AlertTriangle } from 'lucide-react';

interface CalculationResult {
  tradeCapital: number;
  backupCapital: number;
  dailyLoss: number;
  quantity: number;
  loss: number;
  profit: number;
}

const RiskCalculator = () => {
  const [totalCapital, setTotalCapital] = useState('');
  const [dailyLossPercent, setDailyLossPercent] = useState(2);
  const [stopLoss, setStopLoss] = useState('');
  const [targetRR, setTargetRR] = useState(3);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateRisk = () => {
    const total = parseFloat(totalCapital) || 0;
    const tradeCapital = total * 0.5;
    const backupCapital = total * 0.5;
    const dailyLoss = tradeCapital * (parseFloat(dailyLossPercent.toString()) / 100);
    const sl = parseFloat(stopLoss) || 0;
    const quantity = sl > 0 ? Math.floor(dailyLoss / sl) : 0;
    const profit = quantity * sl * parseFloat(targetRR.toString());
    const loss = quantity * sl;

    setResult({
      tradeCapital,
      backupCapital,
      dailyLoss,
      quantity,
      loss,
      profit,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-6 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Capital Guard</h1>
            </div>
            <p className="text-lg text-muted-foreground">Professional Risk Management Calculator</p>
          </div>

          {/* Input Card */}
          <Card className="bg-gradient-card shadow-elevated animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Risk Parameters
              </CardTitle>
              <CardDescription>
                Configure your trading parameters to calculate optimal position sizing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="totalCapital" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Total Capital (₹)
                  </Label>
                  <Input
                    id="totalCapital"
                    type="number"
                    value={totalCapital}
                    onChange={(e) => setTotalCapital(e.target.value)}
                    placeholder="Enter your total capital"
                    className="transition-all duration-200 focus:shadow-card"
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dailyLoss" className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Daily Loss %
                  </Label>
                  <Input
                    id="dailyLoss"
                    type="number"
                    value={dailyLossPercent}
                    onChange={(e) => setDailyLossPercent(parseFloat(e.target.value) || 0)}
                    className="transition-all duration-200 focus:shadow-card"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stopLoss" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Stop Loss (points)
                  </Label>
                  <Input
                    id="stopLoss"
                    type="number"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(e.target.value)}
                    placeholder="Enter stop loss points"
                    className="transition-all duration-200 focus:shadow-card"
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetRR" className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Risk-Reward Ratio (1:X)
                  </Label>
                  <Input
                    id="targetRR"
                    type="number"
                    value={targetRR}
                    onChange={(e) => setTargetRR(parseFloat(e.target.value) || 0)}
                    className="transition-all duration-200 focus:shadow-card"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>

              <Button
                onClick={calculateRisk}
                variant="primary"
                size="lg"
                className="w-full"
                disabled={!totalCapital || !stopLoss}
              >
                <Calculator className="h-4 w-4" />
                Calculate Risk Management
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          {result && (
            <Card className="bg-gradient-card shadow-elevated animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Risk Analysis Results
                </CardTitle>
                <CardDescription>
                  Your calculated position size and risk metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-sm text-primary">Trade Capital</h3>
                    </div>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(result.tradeCapital)}</p>
                    <p className="text-xs text-muted-foreground">50% of total capital</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-success" />
                      <h3 className="font-semibold text-sm text-success">Backup Capital</h3>
                    </div>
                    <p className="text-2xl font-bold text-success">{formatCurrency(result.backupCapital)}</p>
                    <p className="text-xs text-muted-foreground">Emergency reserve</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <h3 className="font-semibold text-sm text-warning">Daily Risk</h3>
                    </div>
                    <p className="text-2xl font-bold text-warning">{formatCurrency(result.dailyLoss)}</p>
                    <p className="text-xs text-muted-foreground">{dailyLossPercent}% of trade capital</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <h3 className="font-semibold text-sm text-purple-600">Position Size</h3>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{result.quantity}</p>
                    <p className="text-xs text-muted-foreground">Recommended quantity</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <h3 className="font-semibold text-sm text-destructive">Max Loss</h3>
                    </div>
                    <p className="text-2xl font-bold text-destructive">{formatCurrency(result.loss)}</p>
                    <p className="text-xs text-muted-foreground">If stop loss hits</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <h3 className="font-semibold text-sm text-emerald-600">Target Profit</h3>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">{formatCurrency(result.profit)}</p>
                    <p className="text-xs text-muted-foreground">At {targetRR}:1 R:R ratio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiskCalculator;