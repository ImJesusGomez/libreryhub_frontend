import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  BookMarked,
  Users,
  HandCoins,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useAuthContext } from "@/store/auth.store";
import { useGetStats } from "../hooks/useGetStats";

export default function DashboardPage() {
  const employee = useAuthContext((state) => state.auth!.employee);
  const { data: stats } = useGetStats();

  if (!stats) return <p>Cargando...</p>;
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Bienvenido, {employee!.firstName}</h1>
        <p className="text-muted-foreground">
          Aquí tienes un resumen de la actividad de la biblioteca
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Libros
            </CardTitle>
            <BookMarked className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.books}</div>
            <p className="text-xs text-muted-foreground">libros disponibles</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Clientes Registrados
            </CardTitle>
            <Users className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.customers}</div>
            <p className="text-xs text-muted-foreground">Clientes activos</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Préstamos Activos
            </CardTitle>
            <HandCoins className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.loans}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="size-3" />
              En progreso
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Préstamos Vencidos
            </CardTitle>
            <AlertTriangle className="size-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.loansOverdue}</div>
            <p className="text-xs text-muted-foreground">Requieren atención</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6">
        {/* Quick Actions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Acciones Rápidas</CardTitle>
            <CardDescription>Accesos directos a las funciones más utilizadas</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Link to="/dashboard/books">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="size-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Registrar Libro</div>
                    <div className="text-sm text-muted-foreground">
                      Agregar un nuevo libro al inventario
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Button>
            </Link>

            <Link to="/dashboard/customers">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="size-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Registrar Cliente</div>
                    <div className="text-sm text-muted-foreground">
                      Agregar un nuevo cliente al sistema
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Button>
            </Link>

            <Link to="/dashboard/loans">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HandCoins className="size-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Nuevo Préstamo</div>
                    <div className="text-sm text-muted-foreground">
                      Crear un nuevo registro de préstamo
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
