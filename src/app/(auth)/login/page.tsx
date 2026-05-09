"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  BarChart3,
  Users,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (email && password) {
      // Store auth state
      sessionStorage.setItem("erp_authenticated", "true");
      sessionStorage.setItem("erp_user_email", email);
      router.push("/");
    } else {
      setError("Please enter your email and password.");
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: BarChart3,
      label: "Real-time Analytics",
      desc: "Live financial & operational insights",
    },
    {
      icon: Users,
      label: "Role-Based Access",
      desc: "Granular permission management",
    },
    {
      icon: Package,
      label: "Inventory Control",
      desc: "End-to-end stock management",
    },
  ];

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* ── LEFT PANEL (brand / feature highlights) ── */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #0F172A 0%, #1e3a5f 50%, #003ea8 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent)",
          }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #b4c5ff, transparent)",
          }}
        />

        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white">
            <Image
              src="/Fnot_Logo-Icon.png"
              alt="Finot Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">
              Fnot ERP
            </p>
            <p className="text-blue-300 text-xs">
              Finot Engineering & Trading PLC
            </p>
          </div>
        </div>

        {/* Main copy */}
        <div className="z-10 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-white leading-tight mb-3">
              Enterprise
              <br />
              <span style={{ color: "#b4c5ff" }}>Resource Planning</span>
            </h1>
            <p className="text-blue-200 text-base leading-relaxed max-w-md">
              A unified platform engineered for precision, speed, and complete
              operational visibility across your entire organization.
            </p>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {features.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,99,235,0.35)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#93b4ff" }} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-blue-300 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-blue-400 text-xs z-10">
          © 2024 Finot Engineering & Trading PLC. All rights reserved.
        </p>
      </div>

      {/* ── RIGHT PANEL (login form) ── */}
      <div
        className="flex-1 flex items-center justify-center p-6 sm:p-12"
        style={{ background: "#f7f9fb" }}
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-blue-600 flex items-center justify-center">
              <Image
                src="/Fnot_Logo-Icon.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-[#191c1e] text-base">Fnot ERP</p>
              <p className="text-xs" style={{ color: "#57657a" }}>
                Finot Engineering & Trading PLC
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-[30px] font-semibold leading-[38px] text-[#191c1e] tracking-tight mb-1">
              Welcome back
            </h2>
            <p className="text-sm" style={{ color: "#57657a" }}>
              Sign in to access your enterprise workspace.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "#191c1e", letterSpacing: "0.01em" }}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "#737686" }}
                />
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@finot.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{
                    border: "1px solid #c3c6d7",
                    background: "#ffffff",
                    color: "#191c1e",
                    fontSize: "14px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#c3c6d7";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block text-sm font-semibold"
                  style={{ color: "#191c1e", letterSpacing: "0.01em" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold transition-colors"
                  style={{ color: "#2563EB" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#004ac6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#2563EB")
                  }
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "#737686" }}
                />
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{
                    border: "1px solid #c3c6d7",
                    background: "#ffffff",
                    color: "#191c1e",
                    fontSize: "14px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#c3c6d7";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "#737686" }}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                id="remember-me"
                onClick={() => setRememberMe(!rememberMe)}
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  border: rememberMe
                    ? "2px solid #2563EB"
                    : "2px solid #c3c6d7",
                  background: rememberMe ? "#2563EB" : "#ffffff",
                }}
              >
                {rememberMe && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <label
                className="text-sm cursor-pointer select-none"
                style={{ color: "#434655" }}
                onClick={() => setRememberMe(!rememberMe)}
              >
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Error */}
            {error && (
              <div
                className="flex items-center gap-2 p-3 rounded-lg text-sm"
                style={{ background: "#ffdad6", color: "#93000a" }}
              >
                <Shield className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Submit button */}
            <Button
              id="login-submit"
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                background: isLoading ? "#738ecc" : "#2563EB",
                cursor: isLoading ? "not-allowed" : "pointer",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.background = "#004ac6";
              }}
              onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.background = "#2563EB";
              }}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeOpacity="0.3"
                    />
                    <path
                      d="M12 2a10 10 0 0110 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Authenticating…
                </>
              ) : (
                "Sign In to Workspace"
              )}
            </Button>
          </form>

          {/* Security notice */}
          <div
            className="mt-8 flex items-start gap-2 p-3 rounded-lg"
            style={{ background: "#eceef0" }}
          >
            <Shield
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: "#737686" }}
            />
            <p className="text-xs leading-relaxed" style={{ color: "#57657a" }}>
              This system is for authorized personnel only. All access is logged
              and monitored for compliance.
            </p>
          </div>

          {/* Bottom links */}
          <div className="mt-6 flex justify-center gap-5 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#737686" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#737686")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
