import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Calculator, FileText, Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Capital Guard</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional risk management calculator for traders and investors. 
              Make informed decisions with proper position sizing and risk analysis.
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <Link 
                to="/terms" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FileText className="h-3 w-3" />
                Terms of Use
              </Link>
              <Link 
                to="/privacy" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Shield className="h-3 w-3" />
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Important Notice</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>
                <strong className="text-warning">Risk Warning:</strong> Trading involves substantial risk and may not be suitable for all investors.
              </p>
              <p>
                This calculator is for educational purposes only and should not be considered as financial advice.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Capital Guard. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Made with ❤️ for traders</span>
            <span>•</span>
            <span>Client-side calculations for privacy</span>
          </div>
        </div>

        {/* Additional Disclaimer */}
        <div className="mt-6 p-4 rounded-lg bg-warning/10 border border-warning/20">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong className="text-warning">Disclaimer:</strong> Past performance is not indicative of future results. 
            Always conduct your own research and consider consulting with qualified financial advisors before making trading decisions. 
            The creators of Capital Guard are not responsible for any trading losses incurred.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;