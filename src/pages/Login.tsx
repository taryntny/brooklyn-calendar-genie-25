
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const { ref, isVisible } = useAnimation({ triggerOnce: true });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would authenticate the user here
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          "w-full max-w-md transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <Link to="/" className="flex items-center justify-center mb-8">
          <span className="text-2xl font-bold text-brooklyn-800">Brooklyn</span>
        </Link>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{isLogin ? 'Log in' : 'Sign up'}</CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Enter your email and password to access your account' 
                : 'Create a new account to get started with Brooklyn'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" required />
                </div>
              )}
              {isLogin && (
                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-brooklyn-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}
              <Button type="submit" className="w-full bg-brooklyn-600 hover:bg-brooklyn-700">
                {isLogin ? 'Log in' : 'Sign up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="text-center w-full">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  className="ml-1 text-brooklyn-600 hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </CardFooter>
        </Card>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          By continuing, you agree to Brooklyn's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
