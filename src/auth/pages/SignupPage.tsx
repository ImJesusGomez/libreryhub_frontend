import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {};

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:flex-1 flex-col justify-between p-12 bg-card border-r border-border">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Library Hub</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-foreground leading-tight text-balance">
            Únete a nuestro equipo
          </h1>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Crea tu cuenta de empleado para comenzar a gestionar la biblioteca de manera eficiente.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm font-medium">1</span>
              </div>
              <span className="text-foreground">Gestión de inventario</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm font-medium">2</span>
              </div>
              <span className="text-foreground">Control de préstamos</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm font-medium">3</span>
              </div>
              <span className="text-foreground">Administración de clientes</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; 2026 Library Hub. Todos los derechos reservados.
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-border bg-card">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-3 lg:hidden mb-4">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Library Hub</span>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Crear Cuenta</CardTitle>
            <CardDescription className="text-muted-foreground">
              Completa tus datos para registrarte como empleado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">
                    Nombre
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Juan"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">
                    Apellido
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Pérez"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="empleado@libreria.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-foreground">
                  Número telefónico
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="+52 555 123 4567"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">
                  Confirmar contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">¿Ya tienes una cuenta? </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                Inicia sesión
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
