# Industrial Metalicas Vilema

Sistema Interno Modular de Gestión Operativa
**Desarrollado en Flutter (Web y Móvil) + Firebase**

---

## 📌 Descripción General

Este sistema interno está diseñado para gestionar eficientemente la operación de la empresa industrial, permitiendo control total desde la generación de contratos, órdenes de producción, solicitudes de materiales, hasta la supervisión en tiempo real de la producción y la auditoría de procesos.

---

## 🧩 Arquitectura Modular

El sistema se desarrolla de forma **modular**, lo que permite avanzar por partes e implementar funcionalidades por secciones independientes:

- **Contratos**
- **Órdenes de Producción**
- **Producción (por áreas)**
- **Bodega**
- **Reportes**
- **Notificaciones**
- **Auditoría**
- **Usuarios y Roles**

---

## 🔐 Roles Internos Definidos

Se han definido **5 roles internos principales**, cada uno con responsabilidades y accesos bien delimitados:

### 1. 👤 Gerente Operativo / Supervisor Administrativo
- Control total del sistema
- Aprobación de contratos y solicitudes
- Supervisión inter-áreas
- Acceso a reportes y métricas

### 2. 🧾 Secretaria Administrativa
- Generación y gestión de contratos
- Recepción de pedidos de producción
- Coordinación administrativa

### 3. 🏭 Jefe de Área de Producción
- Organización del personal operativo
- Asignación de tareas
- Solicitud de materiales
- Reporte de avance

### 4. 🔧 Operario de Producción
- Ejecución de tareas asignadas
- Reporte de avances
- Cumplimiento de tiempos y calidad

### 5. 🏗️ Encargado de Bodega
- Gestión de materiales
- Registro de inventarios
- Entrega y recepción de solicitudes

---

## 🗂️ Tabla de Permisos por Rol

| Funcionalidad                          | Gerente Operativo | Secretaria Adm. | Jefe de Área | Operario | Encargado de Bodega |
|---------------------------------------|-------------------|-----------------|--------------|----------|----------------------|
| Crear contratos                       | ❌                | ✅              | ❌           | ❌       | ❌                   |
| Aprobar contratos                     | ✅                | ❌              | ❌           | ❌       | ❌                   |
| Visualizar contratos                  | ✅                | ✅              | ✅           | ❌       | ❌                   |
| Asignar trabajos                      | ✅                | ❌              | ✅ (su área) | ❌       | ❌                   |
| Reportar avance de producción         | ❌                | ❌              | ✅           | ✅       | ❌                   |
| Ver avance general                    | ✅                | ✅              | ✅           | ❌       | ❌                   |
| Solicitar materiales a bodega        | ❌                | ❌              | ✅           | ❌       | ❌                   |
| Aprobar solicitudes de materiales     | ✅                | ❌              | ❌           | ❌       | ❌                   |
| Entregar materiales                   | ❌                | ❌              | ❌           | ❌       | ✅                   |
| Registrar entrada/salida de materiales| ❌                | ❌              | ❌           | ❌       | ✅                   |
| Acceso a reportes                     | ✅                | ✅              | ✅ (su área) | ❌       | ✅ (inventario)      |
| Crear usuarios / roles                | ✅                | ❌              | ❌           | ❌       | ❌                   |

---

## 🔔 Notificaciones

- Las notificaciones son **visuales**.
- Se mostrarán en una **bandeja de alertas** accesible desde la vista del administrador.
- No se usará email en esta etapa.

---

## 🕒 Cierre Mensual

- El cierre mensual será **automático**.
- Se ejecutará con un **cron job** al inicio de cada mes.

---

## 📊 Métricas

- Se calcularán **en tiempo real**, siempre que no afecte significativamente el rendimiento del sistema.
- Métricas disponibles: avance de producción, inventario, cumplimiento de contratos, eficiencia por área.

---

## 💻 Compatibilidad

- El sistema es una **aplicación web responsiva**, adaptable a:
  - Escritorio
  - Tablets
  - Dispositivos móviles

---

## ⚙️ Tecnologías Utilizadas

- **Frontend:** Flutter (Web & Mobile)
- **Backend:** Firebase Auth + Firestore + Firebase Storage
- **Base de Datos en Tiempo Real:** Firestore
- **Control de Versiones:** GitHub

---

## 🚀 Configuración Inicial del Proyecto

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/industriasvilema/industrialilemaRepo.git
git push -u origin main
