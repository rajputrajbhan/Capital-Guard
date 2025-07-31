import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
          </div>
        </div>

        <Card className="bg-gradient-card shadow-elevated">
          <CardHeader>
            <CardTitle>Capital Guard Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">1. Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Information You Provide</h3>
                  <p className="text-muted-foreground">
                    Capital Guard operates as a client-side calculator. All calculations are performed locally in your browser, and we do not collect, store, or transmit any of the financial data you enter into the calculator.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Technical Information</h3>
                  <p className="text-muted-foreground">
                    We may collect basic technical information such as your IP address, browser type, and usage patterns for analytics and security purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">2. How We Use Your Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>• To provide and maintain the calculator service</p>
                <p>• To improve user experience and functionality</p>
                <p>• To analyze usage patterns and optimize performance</p>
                <p>• To ensure security and prevent abuse</p>
                <p>• To comply with legal obligations</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">3. Data Security</h2>
              <p className="text-muted-foreground">
                Your financial calculations remain private and secure. Since all calculations are performed locally in your browser, your sensitive financial data never leaves your device. We implement appropriate security measures to protect any technical information we may collect.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">4. Cookies and Local Storage</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>We may use cookies and local storage to:</p>
                <p>• Remember your calculator preferences</p>
                <p>• Improve website functionality</p>
                <p>• Analyze website usage</p>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services for analytics, hosting, or other technical services. These services may have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">6. Data Retention</h2>
              <p className="text-muted-foreground">
                Since we don't store your calculation data, there is no personal financial information to retain. Any technical data collected is retained only as long as necessary for the purposes outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">7. Your Rights</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>You have the right to:</p>
                <p>• Access information about data collection practices</p>
                <p>• Request deletion of any personal data we may have</p>
                <p>• Opt-out of non-essential data collection</p>
                <p>• Update your preferences at any time</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Capital Guard is not intended for use by children under 18. We do not knowingly collect personal information from children under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify users of any material changes by posting the new privacy policy on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us through the appropriate channels.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;