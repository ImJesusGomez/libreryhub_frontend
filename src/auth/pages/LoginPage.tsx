import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { LoginInput } from "../actions/login.action";
import { FieldError } from "@/components/ui/field";
import { useLogin } from "../hooks/useLogin";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginInput>();

  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLogin();

  const onSubmit = async (input: LoginInput) => {
    try {
      loginMutation.mutateAsync(input);
    } catch (error) {
      console.error(error);
    }
  };

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
            Sistema de Gestión de Biblioteca
          </h1>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Administra libros, clientes y préstamos de manera eficiente con nuestra plataforma
            integral.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; 2026 Library Hub. Todos los derechos reservados.
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-border bg-card">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-3 lg:hidden mb-4">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Library Hub</span>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Iniciar Sesión</CardTitle>
            <CardDescription className="text-muted-foreground">
              Ingresa tus credenciales para acceder al sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="empleado@libreria.com"
                    className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    {...register("email", {
                      required: {
                        message: "Correo Electrónico es obligatorio.",
                        value: true,
                      },
                    })}
                  />
                </div>
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    {...register("password", {
                      required: {
                        message: "Contraseña es obligatoria.",
                        value: true,
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
                {errors.password && <FieldError>{errors.password.message}</FieldError>}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">¿No tienes una cuenta? </span>
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Regístrate
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
