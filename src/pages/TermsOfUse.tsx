import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Back to Calculator
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Terms of Use</h1>
          </div>
        </div>

        <Card className="bg-gradient-card shadow-elevated">
          <CardHeader>
            <CardTitle>Capital Guard Terms of Use</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Capital Guard risk management calculator, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">2. Educational Purpose</h2>
              <p className="text-muted-foreground">
                Capital Guard is provided for educational and informational purposes only. The calculations and results provided should not be considered as financial advice, investment recommendations, or trading signals.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">3. Risk Disclaimer</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>• Trading in financial markets involves substantial risk and may not be suitable for all investors.</p>
                <p>• Past performance is not indicative of future results.</p>
                <p>• You should carefully consider your financial situation and consult with financial advisors before making any trading decisions.</p>
                <p>• The use of this calculator does not guarantee profitable trading or prevent losses.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">4. Accuracy of Information</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate calculations, we make no representations or warranties about the accuracy, reliability, completeness, or timeliness of the information provided by this calculator.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Capital Guard and its creators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of this calculator or any trading decisions made based on its output.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">6. User Responsibilities</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>• You are responsible for verifying all calculations independently.</p>
                <p>• You should not rely solely on this calculator for trading decisions.</p>
                <p>• You must comply with all applicable laws and regulations in your jurisdiction.</p>
                <p>• You acknowledge that trading involves risk of substantial losses.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">7. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the calculator after modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">8. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Use, please contact us through the appropriate channels.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfUse;