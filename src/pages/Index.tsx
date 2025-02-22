import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-glass-white/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-display font-medium">Brand</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-text hover:text-text-muted transition-colors">Products</a>
              <a href="#" className="text-text hover:text-text-muted transition-colors">Solutions</a>
              <a href="#" className="text-text hover:text-text-muted transition-colors">About</a>
              <Button variant="outline" className="ml-4">Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-medium tracking-tight text-primary mb-8">
              Design that inspires.<br />
              Innovation that matters.
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-text-muted mb-12">
              Experience the perfect blend of form and function. Crafted with precision,
              designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Intuitive Design</h3>
              <p className="text-text-muted">Crafted with precision and care, every detail serves a purpose.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Built to Last</h3>
              <p className="text-text-muted">Quality that stands the test of time, guaranteed.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Seamless Experience</h3>
              <p className="text-text-muted">Everything works together in perfect harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-purple/20 via-transparent to-transparent" />
            <h2 className="relative text-4xl font-display font-medium text-white mb-6">
              Ready to get started?
            </h2>
            <p className="relative text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in creating something extraordinary. Experience design that makes a difference.
            </p>
            <Button size="lg" className="relative bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-alt py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-display font-medium">Brand</span>
              <p className="mt-4 text-text-muted">Making technology beautiful and accessible for everyone.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-muted hover:text-text">Features</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Solutions</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-muted hover:text-text">About</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Blog</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-muted hover:text-text">Privacy</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Terms</a></li>
                <li><a href="#" className="text-text-muted hover:text-text">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-text-muted">
            <p>&copy; 2024 Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;