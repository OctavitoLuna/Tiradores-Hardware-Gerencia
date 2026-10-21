# Documentación Completa y Estructura del Sitio Web: Tiradores Hardware (IA MediTech)

> **Documento Oficial de Arquitectura de Información, Contenido y Procesos**  
> **Proyecto:** IA MediTech — Hardware e Infraestructura Tecnológica  
> **Equipo:** Tiradores (Pisadores)  
> **Ubicación:** Raíz del Proyecto (`/ESTRUCTURA_Y_CONTENIDO_WEB.md`)  
> **Última actualización:** 2026

---

## Índice General

1. [Visión General del Sistema y Arquitectura Tecnológica](#1-visión-general-del-sistema-y-arquitectura-tecnológica)
2. [Estructura Global de Navegación y Rutas (Layout)](#2-estructura-global-de-navegación-y-rutas-layout)
3. [Pestaña 1: Inicio (`/`)](#3-pestaña-1-inicio-)
4. [Pestaña 2: Gestión de Tecnología (`/gestion-tecnologia`)](#4-pestaña-2-gestión-de-tecnología-gestion-tecnologia)
5. [Pestaña 3: Ciencia, Tecnología e Innovación (`/ciencia-tecnologia-innovacion`)](#5-pestaña-3-ciencia-tecnología-e-innovación-ciencia-tecnologia-innovacion)
6. [Pestaña 4: Misión y Visión (`/mision-vision`)](#6-pestaña-4-misión-y-visión-mision-vision)
7. [Pestaña 5: Organigrama (`/organigrama`)](#7-pestaña-5-organigrama-organigrama)
8. [Pestaña 6: MBTI — Myers-Briggs Type Indicator (`/mbti`)](#8-pestaña-6-mbti--myers-briggs-type-indicator-mbti)
9. [Pestaña 7: Metodología SCRUM (`/scrum`)](#9-pestaña-7-metodología-scrum-scrum)
10. [Pestaña 8: IDEF0 — Modelado Funcional del Proceso (`/idef0`)](#10-pestaña-8-idef0--modelado-funcional-del-proceso-idef0)
11. [Pestaña 9: BPMN — Modelado de Procesos de Negocio (`/bpmn`)](#11-pestaña-9-bpmn--modelado-de-procesos-de-negocio-bpmn)
12. [Plataformas Externas y Diagramas Vectoriales Vinculados](#12-plataformas-externas-y-diagramas-vectoriales-vinculados)
13. [Resumen del Equipo de Trabajo y Asignaciones](#13-resumen-del-equipo-de-trabajo-y-asignaciones)

---

## 1. Visión General del Sistema y Arquitectura Tecnológica

El presente sitio web constituye el portal centralizado de documentación, gobernanza, estructura organizativa y modelado de procesos del **Equipo de Hardware e Infraestructura de Tiradores**, que opera dentro de la empresa **IATECH Co.** para el soporte del proyecto hospitalario **IA MediTech** en Bolivia.

### Stack Tecnológico del Sitio Web:
- **Framework Front-End:** React 18+ (SPA - Single Page Application)
- **Enrutamiento:** React Router DOM v6 con navegación sin recarga y persistencia de scroll.
- **Herramienta de Construcción:** Vite + TypeScript.
- **Estilos y Diseño:** Tailwind CSS con tipografías *Oswald* (títulos/display) e *Inter* (cuerpo/sans), con paleta de color institucional:
  - Primario Terracota/Naranja: `#C1522A`
  - Superficie Oscura / Grafito: `#1F1E1D` / `#161514`
  - Fondo Crema / Hueso: `#F5F2EB` / `#FAF8F5`
- **Iconografía:** Lucide React.
- **Recursos Gráficos Vectoriales:** Diagramas nativos SVG con visualizador dinámico y zoom interactivo.

---

## 2. Estructura Global de Navegación y Rutas (Layout)

El componente principal de diseño (`src/components/Layout.tsx`) envuelve todas las páginas asegurando coherencia visual, navegación fluida y pie de página en toda la aplicación.

### Menú de Navegación (Header)
El encabezado cuenta con un logotipo interactivo con ícono de procesador (`Cpu`) que enlaza al Inicio, navegación para pantallas de escritorio con indicador de pestaña activa subrayada en terracota, y menú desplegable para dispositivos móviles (`hamburger menu`).

| Etiqueta en Menú | Ruta URL | Componente de Página | Descripción Rápida |
| :--- | :--- | :--- | :--- |
| **Inicio** | `/` | `Home.tsx` | Portada, visión general, objetivos, accesos rápidos e inventario. |
| **Gestión de Tecnología** | `/gestion-tecnologia` | `GestionTecnologia.tsx` | Estrategia digital, 4 pilares, ciclo de vida y KPIs de TI. |
| **Ciencia, Tecnología e Innovación** | `/ciencia-tecnologia-innovacion` | `CienciaTecnologia.tsx` | Triángulo del progreso, tendencias globales y aplicación en salud. |
| **Misión y Visión** | `/mision-vision` | `MisionVision.tsx` | Propósito institucional, declaraciones oficiales, valores y horizontes. |
| **Organigrama** | `/organigrama` | `Organigrama.tsx` | Jerarquía, fichas por rol, matriz RACI y acuerdos SLA. |
| **MBTI** | `/mbti` | `MBTI.tsx` | Psicología del equipo, análisis por perfil y sinergia colaborativa. |
| **Scrum** | `/scrum` | `Scrum.tsx` | Metodología ágil, artefactos, ceremonias, Kanban y roles UCB. |
| **IDEF0** | `/idef0` | `IDEF0.tsx` | Modelo funcional FIPS PUB 183 a nivel A-0 y análisis ICOM. |
| **BPMN** | `/bpmn` | `BPMN.tsx` | Flujo de negocio OMG 2.0 para gestión de solicitudes en 6 carriles. |

### Pie de Página (Footer)
- **Marca:** Tiradores Hardware.
- **Lema Institucional:** *"Construimos la base física que sostiene la salud digital. Equipo de Hardware e Infraestructura, IA MediTech."*
- **Enlaces de Navegación:** Acceso directo a las 9 pestañas del sitio.
- **Créditos:** © Año actual Tiradores Hardware. Todos los derechos reservados.
- **Enlaces de Redes:** LinkedIn, Twitter, GitHub.

---

## 3. Pestaña 1: Inicio (`/`)

### 3.1 Encabezado Hero
- **Badge superior:** `IA MediTech` (con barra decorativa terracota).
- **Título principal:** *"Construimos la base física que sostiene la salud digital."*
- **Texto descriptivo:** *"Hola. Hablamos desde el equipo de Hardware e Infraestructura de Tiradores. Diseñamos, implementamos y garantizamos que el software médico crítico funcione sin interrupciones."*
- **Llamadas a la acción (CTAs):**
  - Botón Principal: `Conoce al equipo` (redirige a `/organigrama`).
  - Botón Secundario: `Nuestra metodología` (redirige a `/scrum`).
- **Elemento gráfico visual:** Contenedor orbital interactivo con anillos concéntricos rotatorios, badge flotante de servidor y fotografía de racks de centro de datos procesada con modos de mezcla luminosa.

### 3.2 Barra de Estadísticas Clave (Stats Bar)
Franja de alto contraste que presenta 4 métricas fundamentales:
1. **5** — Integrantes del equipo.
2. **4** — Áreas de gestión técnica.
3. **99.9%** — Disponibilidad objetivo del sistema hospitalario.
4. **1** — Proyecto estratégico: IA MediTech.

### 3.3 Sección: ¿Quiénes somos?
- **Texto presentado:**  
  *"Somos el equipo de Ingeniería de Hardware y Soporte de Infraestructura de Tiradores, una empresa especializada en el desarrollo de soluciones de software para el sector médico. Diseñamos, implementamos y mantenemos la base física y los entornos de alta disponibilidad que garantizan la ejecución segura, rápida y continua de nuestras aplicaciones de salud. Combinamos conocimiento en arquitectura de servidores, redes seguras, dispositivos IoT médicos y sistemas embebidos para proteger la información sensible de los pacientes."*
- **Botón:** `Leer más` (redirige a `/gestion-tecnologia`).

### 3.4 Sección: ¿Qué queremos realizar? (Metas y Propósito)
Explicación de que el objetivo del equipo es construir y sostener la base física que permite que la inteligencia artificial y los sistemas clínicos de IATECH Co. operen sin interrupciones, desglosado en 4 metas específicas:
1. **Infraestructura de alta disponibilidad:** Diseñar y mantener una arquitectura híbrida (local + nube) capaz de garantizar 99.9% de disponibilidad para los sistemas clínicos críticos.
2. **Estructura de equipo clara:** Definir un organigrama funcional con roles y responsables bien establecidos, alineado a la metodología ágil Scrum.
3. **Cumplimiento y calidad:** Asegurar que todo el hardware desplegado cumpla normativas de salud (ISO, CE, FDA) y proteja la información sensible de los pacientes.
4. **Documentación y mejora continua:** Modelar y documentar nuestros procesos (misión, visión, IDEF0, BPMN) para facilitar la toma de decisiones y la mejora constante del área.
- **Frase de cierre:** *"Todo esto lo llevamos adelante como equipo Tiradores, aplicando ciencia, tecnología e innovación al servicio de la salud digital en Bolivia."*

### 3.5 Áreas de Gestión y Cultura (Acceso Rápido)
Cuadrícula de 8 tarjetas interactivas que enlazan a las restantes secciones del sitio:
- Gestión de Tecnología
- Ciencia, Tecnología e Innovación
- Misión y Visión
- Organigrama
- MBTI
- Scrum
- IDEF0
- BPMN

### 3.6 Acceso al Sistema de Inventario de Hardware
Bloque destacado que vincula la plataforma operativa en producción:
- **Título:** Sistema de Inventario de Hardware.
- **Descripción:** Acceso a la plataforma web para control de inventario, activos y equipamiento de infraestructura en tiempo real.
- **Enlace Externo:** `https://iatech-co-frontend.vercel.app/`

---

## 4. Pestaña 2: Gestión de Tecnología (`/gestion-tecnologia`)

Esta pestaña aborda los fundamentos de la dirección técnica, alineación con el negocio y los pilares de la infraestructura hospitalaria.

### 4.1 Sección 1: Gestión y Dirección Tecnológica
- **Concepto:** Conectar las metas del negocio con las herramientas digitales adecuadas. A través de planificación rigurosa y correcta asignación de recursos, se busca maximizar el valor de la inversión y reducir riesgos operativos.
- **Video de apoyo:** *Gestión tecnológica en las organizaciones* (Canal Udearroba).

### 4.2 Sección 2: Estrategia y Hoja de Ruta Digital
Define hacia dónde va la organización y cómo la tecnología la llevará allí:
- **Alineación con el Negocio:** Definición de prioridades técnicas que responden directamente a lo que la empresa quiere lograr.
- **Metas e Indicadores Claves:** Establecimiento de objetivos medibles para conocer los resultados de cada proyecto.
- **Adopción de Innovación:** Evaluación continua de tecnologías emergentes (IA, automatización) para integrarlas en el momento oportuno.
- **Roadmap por Horizontes:**
  - *Corto plazo (0-6 meses):* Estabilización y mantenimiento preventivo.
  - *Mediano plazo (6-18 meses):* Migración a arquitectura híbrida.
  - *Largo plazo (18+ meses):* Automatización total del monitoreo con IA.
- **Gestión de Riesgos Tecnológicos:** Identificación de puntos únicos de falla (SPOF), planes de contingencia (DRP) y matrices de riesgo por criticidad.
- **Cumplimiento Normativo:** Alineación con estándares de salud digital y protección de datos.
- **Videos de apoyo:**
  - *7. Transformación Digital. Hoja de Ruta...* (Antonio Serrano Acitores).
  - *Qué es un roadmap tecnológico y cómo construirlo*.

### 4.3 Sección 3: Los Cuatro Pilares de la Infraestructura y Sistemas
Tarjetas estructuradas con los cimientos técnicos:
- **Pilar 01 — Infraestructura y Redes:** Diseño y mantenimiento de hardware, centros de datos y redes robustas, garantizando alta disponibilidad, seguridad y consumo eficiente.
- **Pilar 02 — Desarrollo y Gestión de Aplicaciones:** Creación, actualización e integración de software adaptado a los procesos, garantizando interoperabilidad sin fricción.
- **Pilar 03 — Gobernanza y Analítica de Datos:** Recolección, análisis y protección de datos cumpliendo normativas de privacidad clínica.
- **Pilar 04 — Seguridad y Continuidad Operativa:** Ciberseguridad física, respaldo (backups) redundante, planes de recuperación ante desastres (DRP) y protocolos de continuidad del negocio (BCP).

### 4.4 Sección 4: ¿Qué es Infraestructura TI?
- **Definición oficial:** *"La infraestructura TI es el conjunto de componentes físicos y lógicos —hardware, software, redes, centros de datos y personas— que permiten operar, almacenar y proteger la información de una organización."*
- **Componentes:** Hardware (servidores, IoT médico, redes), software de gestión, sistemas de almacenamiento, personal técnico.
- **Modelos de despliegue:** On-premise (control total, mayor costo), Nube pública (escalabilidad elástica), Híbrido (balance entre soberanía física y elasticidad — el modelo adoptado por Tiradores).
- **Importancia en salud digital:** Cero tolerancia a caídas por dependencia de información clínica crítica.
- **Videos de apoyo:**
  - *¿Qué es Infraestructura TI?* (INFRA FACIL).
  - *Infraestructura híbrida on-premise vs. cloud explicada*.

### 4.5 Sección 5: El Factor Humano: La Clave del Éxito
- **Capacitación Continua:** Actualización en las últimas herramientas y estándares de la industria.
- **Atracción de Talento:** Incorporación y retención de especialistas en áreas técnicas clave.
- **Cultura de Innovación:** Ambiente colaborativo donde se prueban nuevas soluciones de forma controlada.
- **Liderazgo y Bienestar del Equipo:** Comunicación abierta, equilibrio de cargas y reconocimiento del esfuerzo técnico.
- **Videos de apoyo:**
  - *El factor humano es la clave del éxito* (MarketingDirecto).
  - *El Recurso Humano capacitado es factor clave del éxito* (TEDx Talks).
  - *Cómo retener talento técnico en equipos de TI*.

### 4.6 Sección 6: Beneficios de Implementar Gestión Tecnológica
- **Mayor Eficiencia:** Procesos más veloces, menor tasa de fallos y ahorro en costos.
- **Decisiones Inteligentes:** Estrategias respaldadas por datos reales.
- **Ventaja Competitiva:** Agilidad ante el mercado y mejor experiencia de usuario médico.
- **Escalabilidad:** Crecimiento sostenido sin rediseñar la arquitectura desde cero.
- **Reducción de Downtime:** Menor tiempo de inactividad mediante monitoreo proactivo.
- **Video:** *¿Qué es la Gestión Tecnológica?* (Instituto Artek).

### 4.7 Sección 7: Ciclo de Vida de la Gestión Tecnológica
Flujo iterativo en 5 etapas secuenciales:
1. **Planificación:** Definición de objetivos y diseño arquitectónico.
2. **Implementación:** Despliegue y configuración de hardware y redes.
3. **Monitoreo:** Vigilancia activa 24/7 de disponibilidad y métricas.
4. **Optimización:** Ajustes basados en telemetría y retroalimentación.
5. **Renovación:** Reemplazo y actualización de hardware obsoleto.

### 4.8 Sección 8: Indicadores Clave de Desempeño (KPIs)
Tabla formal de acuerdos de nivel operativo:
| Indicador | Meta Comprometida |
| :--- | :--- |
| **Disponibilidad del sistema** | **99.9%** |
| **Tiempo medio de reparación (MTTR)** | **< 2 horas** |
| **Tiempo de respuesta de soporte (Helpdesk)** | **< 30 minutos** |
| **Incidentes críticos por trimestre** | **0** |

---

## 5. Pestaña 3: Ciencia, Tecnología e Innovación (`/ciencia-tecnologia-innovacion`)

Explora el "Triángulo del Progreso" y su concreción en el área de salud en Bolivia.

### 5.1 Introducción
El progreso humano no ocurre por azar: se sostiene en un ecosistema donde el conocimiento puro (ciencia), las herramientas prácticas (tecnología) y la creatividad (innovación) se articulan. Cuando la ciencia explica, la tecnología construye y la innovación cuestiona el propósito, se genera un motor sostenible para elevar la calidad de vida.
- **Video:** *Innovation (An animated short)* (chickenbreadd).

### 5.2 Sección 1: Las Bases del Conocimiento y la Creación
- **Investigación y Método Científico:** Observación, formulación de hipótesis, experimentación y conclusiones empíricas.
- **Herramientas e Ingeniería:** Transformación del conocimiento científico en hardware físico, software lógico y metodologías.
- **El Acto de Innovar:** Crear valor real mediante innovaciones incrementales, disruptivas o radicales.
- **Pensamiento Crítico y Experimentación:** Validación constante en entornos de prueba (*sandboxes*) previo al despliegue productivo.
- **Interdisciplinariedad:** Cruce armónico entre ingeniería de hardware, ciencia de datos y diseño centrado en el paciente.
- **Video:** *El método científico explicado*.

### 5.3 Sección 2: Impacto Económico y Desarrollo de Mercados
- **Competitividad y Productividad:** Optimización de costos e incremento del valor agregado industrial.
- **Nuevas Oportunidades:** Creación de empleos altamente tecnificados.
- **Atracción de Capital:** Inversión en ecosistemas de salud digital.
- **Impacto en Salud Digital en Bolivia:** La infraestructura médica moderna reduce costos hospitalarios y expande el alcance de la telemedicina a regiones remotas.
- **Video:** *Cómo la tecnología impulsa el crecimiento económico*.

### 5.4 Sección 3: Tendencias Globales y Futuro Próximo
- **Inteligencia Artificial:** Aprendizaje automático y análisis predictivo en salud.
- **Biotecnología y Nanotecnología:** Medicina de precisión y sensores biocompatibles.
- **Computación Cuántica:** Potencial analítico sin precedentes para modelado molecular.
- **Internet de las Cosas (IoT) en Salud:** Dispositivos médicos monitoreando signos vitales en tiempo real.
- **Edge Computing:** Cómputo al borde para reducir la latencia en decisiones clínicas críticas.
- **Green IT / Sostenibilidad Tecnológica:** Disminución de la huella de carbono y economía circular de activos físicos.
- **Videos:**
  - *Tendencias tecnológicas 2026: IA, IoT y computación cuántica*.
  - *Qué es el Edge Computing y por qué importa en salud*.

### 5.5 Sección 4 y 5: Ecosistema y Aplicación en IA MediTech
- **¿Por qué apoyar el ecosistema?:** La cooperación entre ciencia, industria y sociedad asegura beneficios colectivos duraderos.
- **Aplicado a IA MediTech:** La ciencia de datos define requerimientos computacionales, la ingeniería de hardware monta los clusters físicos, y la innovación en mantenimiento garantiza operaciones ininterrumpidas en Bolivia.

### 5.6 Sección 6: Línea de Tiempo de Evolución
Hitos tecnológicos adoptados:
1. **Computación en la nube**
2. **IoT médico**
3. **Analítica en tiempo real**
4. **IA aplicada a diagnóstico**
5. **Infraestructura híbrida autoescalable**

---

## 6. Pestaña 4: Misión y Visión (`/mision-vision`)

Establece el marco de gobernanza estratégica y los principios éticos y operativos del área.

### 6.1 Marco Teórico y El Círculo Dorado
- **Misión (El Presente Operativo):** Razón de ser actual. Responde:
  1. *¿Qué hacemos?* Diseñar, desplegar y mantener la base física y de red.
  2. *¿Para quién?* Para el personal médico, pacientes y sistemas clínicos.
  3. *¿Cuál es nuestro diferencial?* Uptime del 99.9%, latencia ultra-baja y tolerancia a fallos.
- **Visión (El Futuro Aspiracional):** Estado futuro deseado. Inspira, establece el estándar de calidad y anticipa la evolución tecnológica de la salud.
- **El Círculo Dorado de Simon Sinek (Start With Why):**
  - **¿Por qué? (Why):** Porque cada segundo sin conexión en un hospital puede costar vidas humanas.
  - **¿Cómo? (How):** Mediante arquitectura híbrida redundante (N+1), Scrum ágil y observancia de normas internacionales.
  - **¿Qué? (What):** Servidores de alta disponibilidad, racks certificados, gateways IoT y soporte técnico en tiempo real.
- **Video:** *Misión y Visión* (Canal de apoyo metodológico).

### 6.2 Declaraciones Oficiales de Tiradores — Hardware

#### Declaración de Misión:
> *"Diseñar, desplegar y mantener una arquitectura física de alto rendimiento, latencia baja y máxima disponibilidad, que garantice la continuidad operativa de los sistemas clínicos críticos en el hospital; colaborando de manera estratégica con el equipo de Infraestructura Cloud para articular un ecosistema híbrido balanceado, seguro y eficiente, que cumpla con las normativas locales de salud y optimice los recursos operacionales y financieros del proyecto IA MediTech."*

- **Dimensiones Clave:** Alcance operativo ininterrumpido, articulación con Cloud, racionalización financiera CAPEX/OPEX.

#### Declaración de Visión:
> *"Ser el pilar físico e inquebrantable de la infraestructura de IA MediTech, reconocido por la excelencia técnica en procesamiento local, soberanía de datos y tolerancia a fallos, consolidándose como un modelo de referencia en la integración armónica entre la infraestructura local y la elasticidad de la nube, para soportar sin interrupciones la evolución de la medicina inteligente en Bolivia."*

- **Aspiraciones de Impacto:** Referencia nacional en salud inteligente, soberanía física de datos en Bolivia, preparación para medicina asistida por IA.

### 6.3 Matriz de Desglose Analítico
- **Continuidad Crítica:** Uptime del 99.9% para quirófanos y expedientes clínicos electrónicos.
- **Ecosistema Híbrido:** Inferencia local de baja latencia con escalabilidad en la nube.
- **Normativa & Soberanía:** Estándares ISO y legislación boliviana de privacidad médica.
- **Excelencia Scrum:** Agilidad orientada a entregas funcionales en cada sprint.

### 6.4 Valores Fundamentales del Equipo
1. **Excelencia Técnica y Tolerancia a Fallos:** Redundancia N+1, pruebas de estrés periódicas y simulacros de failover.
2. **Soberanía y Seguridad de Datos Clínicos:** Aislamiento de red, cifrado de hardware en reposo y tránsito, control biométrico de acceso.
3. **Colaboración Multidisciplinaria Ágil:** Sinergia transparente entre ingenieros de hardware, desarrolladores cloud y médicos.
4. **Innovación Responsable y Eficiencia Financiera:** Balance entre inversión de capital (CAPEX) y costos de operación (OPEX), con dimensionamiento energético eficiente.

### 6.5 Horizontes de Ejecución Estratégica (Roadmap)
- **Horizonte 1 (Corto Plazo — 2026): Estabilización y Despliegue de Base Clínica:**
  - Disponibilidad 99.9% en el hospital primario.
  - Trazabilidad del 100% de activos físicos en el sistema de inventario.
  - Protocolos DRP con RPO < 15 min y RTO < 30 min.
  - Homologación inicial de equipamiento con protección eléctrica grado hospitalario.
- **Horizonte 2 (Mediano Plazo — 2027): Integración Híbrida y Expansión Edge Computing:**
  - Despliegue de micro datacenters (Edge Nodes) en 3 hospitales estratégicos de Bolivia.
  - Sincronización on-premise con cluster de IA elástico en la nube.
  - Optimización energética mediante refrigeración inteligente y UPS redundantes.
  - Certificaciones ISO 13485 e ISO/IEC 27001.
- **Horizonte 3 (Largo Plazo — 2028-2030): Soberanía Tecnológica y Red Nacional Inteligente:**
  - Referente boliviano en telemedicina y cirugía asistida por IA.
  - Arquitectura autónoma con autoreparación de fallos en milisegundos.
  - Soporte a la red de salud pública y privada nacional.
  - Centros de cómputo con huella de carbono neta cero mediante energías limpias.

### 6.6 Buenas Prácticas Metodológicas y Videos
- **Criterios de calidad:** Usar verbos de acción concretos, definir límites claros de responsabilidad y asociar declaraciones a KPIs medibles.
- **Errores a evitar:** Ambigüedad abstracta, desconexión de recursos reales y olvido documental.
- **Videos:**
  - *¿Cómo redactar la Visión y Misión de tu empresa?*
  - *Aprende a hacer la visión, misión y valores en menos de 5 minutos*.
  - *Misión, visión y valores: diferencias y ejemplos reales*.

---

## 7. Pestaña 5: Organigrama (`/organigrama`)

Estructura organizativa, líneas de mando, perfiles técnicos, acuerdos de nivel de servicio y matriz de responsabilidades.

### 7.1 Fundamentos de Organización en Infraestructura
Presentados en paneles interactivos desplegables (Acordeones):
- **¿Qué es un organigrama de infraestructura?:** Mapa formal de autoridad y custodia de activos físicos. Base de la gestión de cambios (ITIL Change Management) y respuesta a incidentes.
- **Estructura Horizontal vs. Vertical:** Eliminación de mandos medios burocráticos; las 4 áreas técnicas poseen autonomía operativa y contacto directo con el Líder de Área.
- **Ley de Conway:** Los sistemas reflejan las vías de comunicación del equipo: la modularidad del hardware es espejo de la estructura organizacional.
- **Cultura Blameless Post-Mortem:** Enfoque en causa raíz sistémica sin culpar a personas ante incidentes.

### 7.2 Diagrama Jerárquico y Funcional Oficial
Estructura en 3 niveles con tarjetas interactivas que despliegan Objetivo, Funciones, Misión, Visión y enlace al perfil Scrum:

```
                  [ CEO / Dirección General ]
                      (Ing. Cárdenas)
                            │
                            ▼
      [ Líder de Hardware e Infraestructura Tecnológica ]
                       (Octavio Luna)
                            │
       ┌────────────────────┼────────────────────┬────────────────────┐
       ▼                    ▼                    ▼                    ▼
[ Dirección de       [ Gestión de         [ Aseguramiento      [ Operaciones de
  Tecnología y         Infraestructura      de Calidad y         Soporte y Entorno
  Presupuesto ]        Global ]             Recursos ]           de Trabajo ]
 (Leandro Colque)     (Einar Guillén)      (Huascar Duran)      (Leonardo Ibarra)
```

#### Desglose de Cada Nodo:
1. **CEO / Dirección General — Ing. Cárdenas:** Nivel ejecutivo superior de supervisión estratégica.
2. **Líder de Hardware e Infraestructura — Octavio Luna:**
   - *Objetivo:* Coordinar las 4 áreas, asegurar la ejecución de la estrategia y desbloquear dependencias.
   - *Funciones:* Supervisión general, articulación con Infraestructura Cloud, reporte a CEO.
   - *Misión:* Coordinar de forma transversal las 4 áreas de hardware, articulando la estrategia técnica con la dirección general.
   - *Visión:* Consolidar un área de hardware autogestionada, ágil y alineada, referente interno bajo Scrum.
3. **Dirección de Tecnología y Presupuesto — Leandro Colque:**
   - *Objetivo:* Definir el stack de hardware, compatibilidad con la nube y gestión del presupuesto operativo/capital (OPEX/CAPEX).
   - *Funciones:* Coordinar selección de servidores, Edge computing e IoT médico; planificar compras y evaluar factibilidad financiera.
   - *Misión:* Definir el stack óptimo y administrar el presupuesto del área asegurando compatibilidad con la nube.
   - *Visión:* Referente en planificación tecnológica y financiera anticipando necesidades del ecosistema IA MediTech.
4. **Gestión de Infraestructura Global — Einar Guillén:**
   - *Objetivo:* Adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico.
   - *Funciones:* Compras y control de inventario (proveedores, aduanas), mantenimiento preventivo y correctivo.
   - *Misión:* Administrar adquisición, logística, almacenamiento y ciclo de vida del equipamiento físico.
   - *Visión:* Consolidar una infraestructura global resiliente y escalable para el ecosistema de salud digital.
5. **Aseguramiento de Calidad y Recursos — Huascar Duran:**
   - *Objetivo:* Cumplimiento de estándares de salud, seguridad física de datos y eficiencia operativa.
   - *Funciones:* Validación de calidad (normas ISO, CE, FDA), monitoreo de consumo energético y capacidad.
   - *Misión:* Certificar el cumplimiento de estándares de salud y seguridad física de datos en el hardware.
   - *Visión:* Ser garantes de la confiabilidad técnica que permite operar sin interrupciones sistemas críticos.
6. **Operaciones de Soporte y Entorno de Trabajo — Leonardo Ibarra:**
   - *Objetivo:* Mantener la continuidad operativa diaria de usuarios finales y administrar accesos.
   - *Funciones:* Mesa de ayuda técnica (Helpdesk), administración de identidades (Active Directory/Entra ID) y capacitación.
   - *Misión:* Mantener la continuidad operativa diaria mediante helpdesk, capacitación y gestión de accesos.
   - *Visión:* Primer punto de contacto confiable que resuelve incidencias con rapidez y empodera a los usuarios.

### 7.3 Matriz RACI de Responsabilidades
Código: **R** = Responsable de ejecución, **A** = Aprobador final, **C** = Consultado, **I** = Informado.

| Flujo de Trabajo / Tarea Clave | Octavio | Leandro | Einar | Huascar | Leonardo |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Definición del Stack de HW y Planificación Presupuestaria (CAPEX/OPEX)** | **A** | **R** | C | C | I |
| **Adquisición, Despacho Logístico e Inventario de Equipos** | I | **A** | **R** | C | C |
| **Instalación Física, Cableado y Puesta en Marcha en Hospital** | **A** | I | **R** | C | C |
| **Auditoría de Normativas Médicas (ISO 13485, CE, FDA) y Capacidad** | **A** | I | C | **R** | I |
| **Activación del Plan de Recuperación ante Desastres (DRP / Failover)** | **A** | I | **R** | C | **R** |
| **Gestión de Identidades, Accesos Clínicos (Active Directory) y Soporte** | I | I | C | C | **R** |

### 7.4 Fichas Técnicas por Rol, Stack y KPIs
- **Octavio Luna (Liderazgo y Estrategia):**
  - *Herramientas:* Jira / Smartsheet, Métricas Ágiles (Velocity, Burndown), Arquitectura de Sistemas, Gestión P1.
  - *KPIs:* Disponibilidad 99.9%, MTTR < 30 min, Velocidad de Sprint cumplida.
- **Leandro Colque (Estrategia & FinOps):**
  - *Herramientas:* Modelos FinOps, TCO / ROI, Benchmarking de Servidores, Google Cloud / AWS Cost Explorer.
  - *KPIs:* Variación presupuestaria < 5%, Costo por transacción clínica, Optimización de TCO a 3 años.
- **Einar Guillén (Operaciones & Logística):**
  - *Herramientas:* Plataforma de Inventario IATECH, Gestión de Cadena de Suministro, Racks & PDU inteligentes, Certificación Fluke Networks.
  - *KPIs:* 100% de equipos auditados en inventario, Cumplimiento de Lead Time, Cumplimiento de mantenimiento preventivo.
- **Huascar Duran (Normativas & Auditoría):**
  - *Herramientas:* Normativas ISO 13485 / ISO 27001, Monitoreo Energético IoT, Zabbix / Prometheus, Auditoría Física.
  - *KPIs:* 0 No-conformidades en auditorías, PUE (Power Usage Effectiveness) < 1.3, Detección inmediata de anomalías térmicas.
- **Leonardo Ibarra (Soporte & Identidad):**
  - *Herramientas:* Microsoft Entra ID / Active Directory, Helpdesk Ticketing (SLA), SSH / Remote Desktop Seguro, MDM.
  - *KPIs:* Resolución al primer contacto (FCR) > 85%, Satisfacción del usuario médico (CSAT) > 92%, Respuesta < 15 min.

### 7.5 Acuerdos de Nivel de Servicio (SLA) y Tiempos de Respuesta
- **Prioridad 1 — Crítica (Caída de Quirófano / Base de Datos Clínica):**
  - Tiempo de Respuesta: **< 15 minutos**
  - Tiempo de Solución: **< 1 hora**
  - Responsables de Escalamiento: Octavio Luna / Einar Guillén
- **Prioridad 2 — Mayor (Degradación de Rendimiento / Saturación):**
  - Tiempo de Respuesta: **< 1 hora**
  - Tiempo de Solución: **< 4 horas**
  - Responsables de Escalamiento: Leandro Colque / Huascar Duran
- **Prioridad 3 — Menor (Solicitudes de Soporte, Accesos, Periféricos):**
  - Tiempo de Respuesta: **< 4 horas**
  - Tiempo de Solución: **< 24 horas**
  - Responsable de Atención: Leonardo Ibarra (Soporte)

---

## 8. Pestaña 6: MBTI — Myers-Briggs Type Indicator (`/mbti`)

Analiza la configuración de personalidades del equipo, estilos cognitivos y complementariedad funcional.

### 8.1 Fundamentos del MBTI
Desarrollado por Katharine Cook Briggs e Isabel Briggs Myers, a partir de la teoría de tipos psicológicos de Carl Jung. Clasifica las preferencias humanas en 4 dicotomías fundamentales:
1. **E (Extroversión) vs. I (Introversión):** Orientación y fuente de energía (mundo exterior vs. mundo interior).
2. **S (Sensación) vs. N (Intuición):** Procesamiento de información (datos empíricos y detalles vs. patrones abstractos y posibilidades).
3. **T (Pensamiento) vs. F (Sentimiento):** Criterio de toma de decisiones (lógica objetiva vs. valores y armonía humana).
4. **J (Juicio) vs. P (Percepción):** Estructura ante el entorno (planificación y cierre vs. flexibilidad y apertura a la adaptación).

### 8.2 ¿Por qué se utiliza en el equipo?
- Asignación natural y orgánica de roles en Scrum.
- Anticipación y mitigación proactiva de fricciones de comunicación (ej. feedback T vs F).
- Fomento de la empatía: reconocer que metodologías de trabajo distintas enriquecen el resultado final.
- **Video:** *MBTI explicado: los 16 tipos de personalidad*.

### 8.3 Perfiles Psicológicos Individuales del Equipo

| Integrante | Perfil MBTI | Descripción Sintética | Fortalezas | Puntos de Mejora | Aporte Clave al Rol |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **Octavio Luna** | **ENFP** *(El Activista)* | Entusiasta, creativo, motivado por conexiones profundas y visión de futuro. | Energía contagiosa, pensamiento innovador, comunicación fluida. | Seguimiento de tareas repetitivas o rutinarias. | **Líder y Scrum Master:** Facilita la resolución creativa de bloqueos y motiva al equipo. |
| **Leandro Colque** | **ENTJ** *(El Comandante)* | Líder estratégico y lógico; organiza recursos con determinación para alcanzar metas ambiciosas. | Visión estratégica, toma de decisiones firme y rápida. | Paciencia ante ritmos de trabajo más lentos. | **Product Owner y Finanzas:** Priorización del backlog orientada a rentabilidad e impacto. |
| **Leonardo Ibarra** | **ENFP** *(El Activista)* | Mente ágil e impredecible; resuelve situaciones complejas con ideas innovadoras fuera de la norma. | Alta adaptabilidad, creatividad técnica ante problemas. | Estructuración estricta de procesos repetibles. | **Soporte Técnico:** Respuestas ingeniosas y rápidas ante incidencias del usuario médico. |
| **Einar Guillén** | **ESFP** *(El Animador)* | Espontáneo, pragmático y lleno de energía; disfruta el trabajo práctico y el contacto directo. | Energía positiva, disposición al trabajo colaborativo en campo. | Planificación abstracta a largo plazo. | **Infraestructura Global:** Cohesión del equipo y despliegue logístico ágil en sitio. |
| **Huascar Duran** | **INFJ** *(El Abogado)* | Idealista y analítico con profunda visión sobre la calidad y el impacto humano del trabajo. | Empatía, perspectiva de largo plazo, rigor meticuloso en detalles. | Requiere espacios de trabajo concentrado sin interrupciones. | **Calidad y Normativas:** Garantiza que el hardware cumpla estándares médicos con máxima minuciosidad. |

### 8.4 Videos Formativos y Conclusión
- **Videos:**
  - *Teorías de la Personalidad* (Astraway).
  - *Cómo usar el MBTI para formar mejores equipos*.
- **Conclusión Institucional:** La mezcla de personalidades (1 ENTJ, 2 ENFP, 1 ESFP, 1 INFJ) fue conformada estratégicamente para equilibrar visión comercial, entusiasmo, empatía en auditoría y agilidad en soporte técnico, erradicando sesgos de homogeneidad.

---

## 9. Pestaña 7: Metodología SCRUM (`/scrum`)

Presenta la aplicación rigurosa del marco ágil Scrum adaptado a proyectos de infraestructura y hardware hospitalario.

### 9.1 ¿Qué es Scrum?
Marco de trabajo ágil iterativo e incremental basado en el **Manifiesto Ágil (2001)**. Sus 3 pilares empíricos son:
1. **Transparencia:** Visibilidad absoluta de los procesos y acuerdos del equipo.
2. **Inspección:** Monitoreo frecuente de los avances hacia los objetivos del Sprint.
3. **Adaptación:** Ajustes inmediatos ante desvíos o nuevos requerimientos médicos.

**Los 5 Valores de Scrum:** Compromiso, Coraje, Foco, Apertura y Respeto.
- **Videos:**
  - *¿Qué es Scrum?* (EDteam).
  - *Manifiesto Ágil explicado*.
  - *Scrum vs Kanban vs Waterfall*.

### 9.2 Adopción en el Equipo Pisadores / Tiradores
El equipo adoptó Scrum para estructurar sus labores en iteraciones fijas (*sprints*), evaluando avances de forma continua y optimizando el flujo de trabajo mediante un tablero Kanban gestionado en **Smartsheet**.

### 9.3 Roles del Equipo Scrum (Estudiantes UCB)
Todos los integrantes cursan la carrera de **Ingeniería de Sistemas** en la **Universidad Católica Boliviana "San Pablo"**:

1. **Scrum Master / Líder de Hardware — Octavio Luna Vargas:**  
   Facilitador del proceso ágil, moderador de ceremonias (Planning, Daily, Review, Retrospective), eliminador de impedimentos operativos y puente entre el área técnica y la dirección general. *(Enlace bidireccional a `#lider-hardware` en Organigrama)*.
2. **Product Owner — Leandro Colque:**  
   Guardián de la visión del producto de infraestructura, priorizador del Product Backlog y evaluador de la factibilidad técnico-financiera. *(Enlace a `#direccion-tecnologia`)*.
3. **Developer (Infraestructura) — Einar Andrés Guillén Boero:**  
   Especialista en adquisición logística de servidores, ciclo de vida de hardware, almacenamiento en datacenter y topología de red. *(Enlace a `#gestion-infraestructura`)*.
4. **Developer (Calidad) — Huáscar Camilo Durán Avendaño:**  
   Responsable del cumplimiento de normativas médicas internacionales (ISO, CE, FDA), pruebas de estrés electromagnético/térmico y seguridad física de datos. *(Enlace a `#aseguramiento-calidad`)*.
5. **Developer (Soporte) — Leonardo Ibarra López:**  
   Responsable de la mesa de ayuda (Helpdesk), gestión de identidades y accesos, acuerdos de servicio (SLA) y capacitación al personal de salud. *(Enlace a `#operaciones-soporte`)*.

### 9.4 Artefactos de Scrum
- **Product Backlog:** Inventario ordenado de todos los requerimientos, compras, despliegues y optimizaciones de infraestructura, administrado por el Product Owner.
- **Sprint Backlog:** Conjunto de tareas seleccionadas para el sprint en curso, vinculadas a un *Sprint Goal* concreto.
- **Incremento:** Entrega física o lógica verificable al cierre del sprint que cumple estrictamente la *Definition of Done (DoD)* (ej. servidor montado, configurado, testeado y auditado).

### 9.5 Ceremonias de Scrum
- **Sprint Planning:** Definición del objetivo del sprint, estimación de esfuerzo y asignación de compromisos.
- **Daily Scrum:** Sincronización diaria de 15 minutos para responder: ¿Qué hice ayer? ¿Qué haré hoy? ¿Qué bloqueos tengo?
- **Sprint Review:** Demostración del incremento ante el Product Owner y stakeholders hospitalarios.
- **Sprint Retrospective:** Análisis interno del equipo sobre dinámicas de trabajo, identificando qué mantener, qué detener y qué mejorar.

### 9.6 Tablero Kanban
- **Flujo de Columnas:** `Backlog` → `To Do / Not Started` → `In Progress` → `Review / Testing` → `Done / Complete`.
- **Anatomía de las Tarjetas:** Título descriptivo, responsable asignado, fechas límite, estimación de Story Points, criterios de aceptación y enlaces de trazabilidad en Smartsheet.

### 9.7 Misión y Visión Técnica por Área
Bloque comparativo que expone la misión y visión particular de las 5 posiciones del equipo, garantizando alineación de propósitos.

---

## 10. Pestaña 8: IDEF0 — Modelado Funcional del Proceso (`/idef0`)

Modelado funcional de nivel de contexto para el Área de Hardware e Infraestructura, bajo el estándar internacional **FIPS PUB 183**.

### 10.1 Fundamentos de IDEF0
- **Origen:** *ICAM DEFinition for Function Modeling*, creado por la Fuerza Aérea de EE.UU. en los años 70 como parte del programa ICAM, basado en la técnica SADT de Douglas T. Ross.
- **Propósito:** Describir **qué hace** un sistema sin confundirlo con *cómo* o *cuándo* se ejecuta en el tiempo, a diferencia de los diagramas de flujo.

### 10.2 Estructura ICOM
Cada bloque funcional se compone de una caja central con verbo de acción y 4 vectores directrices:
- **I — Inputs (Entradas - Lado Izquierdo):** Elementos que la actividad consume o transforma.
- **C — Controls (Controles - Lado Superior):** Normas, políticas o presupuestos que gobiernan o restringen la actividad.
- **O — Outputs (Salidas - Lado Derecho):** Resultados o entregables tangibles generados.
- **M — Mechanisms (Mecanismos - Lado Inferior):** Recursos humanos, sistemas o hardware que ejecutan la actividad sin ser consumidos.

### 10.3 Jerarquía y Descomposición
- **Nivel A-0:** Diagrama de contexto general (una única caja que sintetiza todo el sistema). **(El diagrama oficial implementado por Tiradores)**.
- **Nivel A0:** Descomposición de A-0 en las sub-actividades principales.
- **Niveles A1, A2...:** Descomposiciones sucesivas en mayor profundidad técnica bajo el principio de *cascada cognitiva*.

### 10.4 Diagrama IDEF0 Oficial de Tiradores (Nivel A-0)
Cuenta con un visor gráfico interactivo en alta resolución con controles de zoom dinámico, pantalla completa y descarga en formato SVG (`/public/idef0-diagram.svg`).

#### Desglose Estructurado de los Componentes ICOM:
1. **Caja Central (A-0) — Proceso Central:**
   - **Nombre:** Área de Hardware e Infraestructura.
   - **Función / Verbo de Acción:** *"Diseñar, desplegar y mantener la infraestructura física que garantiza la continuidad operativa de los sistemas clínicos críticos."*
2. **Controles (C) — Entrada Superior:**
   - Políticas de gobernanza y seguridad de datos de salud.
   - Normativas de salud internacionales (ISO, CE, FDA).
   - Presupuesto OPEX / CAPEX asignado.
   - Estrategia corporativa y objetivos de IATECH Co.
3. **Entradas (I) — Entrada Izquierda:**
   - Requerimientos de infraestructura clínica y asistencial.
   - Solicitudes de soporte técnico de personal médico.
   - Datos actualizados de inventario de equipos y activos.
   - Especificaciones técnicas de proveedores y hardware.
4. **Salidas (O) — Salida Derecha:**
   - Infraestructura de alta disponibilidad (disponibilidad garantizada del 99.9%).
   - Sistemas clínicos operativos y en producción sin interrupciones.
   - Reportes periódicos de mantenimiento preventivo/correctivo y KPIs.
   - Incidencias resueltas de manera oportuna (mesa de ayuda técnica).
5. **Mecanismos (M) — Entrada Inferior:**
   - Equipo técnico especializado (Equipo Tiradores).
   - Infraestructura cloud e híbrida de alta resiliencia.
   - Herramientas de monitoreo y gestión de proyectos (Smartsheet).
   - Equipos y hardware físico (servidores de misión crítica, switches de red, dispositivos IoT médicos).

- **Proyección Futura:** Posibilidad de descomponer el nodo A-0 en un diagrama A0 compuesto por las 4 sub-funciones correspondientes a las áreas del organigrama.

---

## 11. Pestaña 9: BPMN — Modelado de Procesos de Negocio (`/bpmn`)

Representación procedimental y temporal del flujo de trabajo estandarizado bajo **BPMN 2.0 (OMG)**.

### 11.1 Fundamentos de BPMN
- **Definición:** *Business Process Model and Notation*. Lenguaje gráfico estandarizado por el Object Management Group (OMG) para modelar flujos de trabajo de principio a fin.
- **Diferencia con IDEF0:** Mientras IDEF0 describe qué hace el sistema y sus relaciones con el entorno (ICOM), BPMN describe la secuencia paso a paso, los responsables por carril, las decisiones condicionales y los bucles de reproceso.

### 11.2 Categorías de Elementos en BPMN
1. **Objetos de Flujo:**
   - *Eventos (Círculos):* Inicio, fin, mensajes, temporizadores y errores.
   - *Actividades (Rectángulos redondeados):* Tareas operativas o subprocesos.
   - *Compuertas (Rombos / Gateways):* Puntos de decisión y bifurcación (Exclusiva XOR, Paralela AND, Inclusiva OR, Basada en eventos).
2. **Objetos de Conexión:**
   - *Flujo de Secuencia:* Flecha sólida continua.
   - *Flujo de Mensajes:* Flecha discontinua entre participantes/pools.
   - *Asociación:* Línea punteada que enlaza artefactos o datos.
3. **Carriles (Pools y Lanes):** Delimitación de fronteras organizacionales (Pool) y roles específicos (Lanes).
4. **Artefactos:** Datos, anotaciones y grupos.

### 11.3 Diagrama BPMN Oficial: "Gestión de Solicitud de Infraestructura Tecnológica"
Cuenta con visor SVG interactivo con zoom, pantalla completa y descarga de archivo vectorial (`/public/bpmn-diagram.svg`).

#### Desglose de los 6 Carriles (Lanes) y su Secuencia Operativa:

```
[ Cliente Interno ] ──(Solicitud)──► [ Líder de Hardware ] ──(¿Es viable?)
                                                                  │
                    ┌───────────────── SÍ ────────────────────────┘
                    ▼
[ Dirección de Tecnología y Presupuesto ] ──► (Evalúa presupuesto y asigna prioridad)
                    │
                    ▼
[ Gestión de Infraestructura Global ] ◄───────┐ (Ciclo de reproceso si falla calidad)
                    │                         │
                    ▼                         │
[ Aseguramiento de Calidad y Recursos ] ──► (¿Cumple estándares?) ── NO ──┘
                    │
                   SÍ
                    ▼
[ Operaciones de Soporte y Entorno de Trabajo ] ──► (Configura accesos y capacita)
                    │
                    ▼
[ Líder de Hardware ] ──► (Auditoría final y ¿Aprobado?) ── SÍ ──► [ Cliente Interno ] (Entrega validada)
```

1. **Carril 1 — Cliente Interno (Hospital / Equipo Médico):**
   - *Actividad de inicio:* Enviar solicitud formal de infraestructura o soporte técnico (dispara el evento inicial del proceso).
   - *Actividad de cierre:* Recepción final e infraestructura entregada y validada en operación clínica (evento de fin).
2. **Carril 2 — Líder de Hardware (Octavio Luna):**
   - Evaluar viabilidad técnica y operativa de la solicitud inicial.
   - *Compuerta Exclusiva:* ¿Es viable?
     - Si es **No viable**: Retorna notificación de rechazo al cliente interno y finaliza.
     - Si es **Sí viable**: Deriva el flujo a la Dirección de Tecnología.
   - En la fase final del proceso: Recibe el paquete consolidado de soporte, revisa y audita los resultados técnicos.
   - *Compuerta Exclusiva:* ¿Aprobado?
     - Si es **No aprobado**: Retorna a Gestión de Infraestructura para subsanación.
     - Si es **Aprobado**: Entrega formalmente al Cliente Interno.
3. **Carril 3 — Dirección de Tecnología y Presupuesto (Leandro Colque):**
   - Evaluar presupuesto financiero (OPEX/CAPEX) y compatibilidad del stack tecnológico.
   - Asignar recursos económicos, herramientas y prioridad en la cola del sprint.
4. **Carril 4 — Gestión de Infraestructura Global (Einar Guillén):**
   - Adquirir nuevo equipamiento o asignar componentes existentes desde el inventario.
   - Instalar físicamente y configurar servidores, cableado de red y dispositivos biomédicos.
   - Receptor de ciclos de reproceso ante observaciones de calidad o rechazo en auditoría final.
5. **Carril 5 — Aseguramiento de Calidad y Recursos (Huascar Duran):**
   - Validar estricto cumplimiento de normativas médicas y de seguridad (ISO 13485, CE, FDA).
   - Medir capacidad de carga, disipación térmica y consumo energético bajo pruebas de estrés.
   - *Compuerta Exclusiva:* ¿Cumple estándares?
     - Si es **No válido**: Retorna el flujo al carril de Infraestructura Global para reconfiguración.
     - Si es **Válido**: Pasa la estafeta al carril de Soporte.
6. **Carril 6 — Operaciones de Soporte y Entorno de Trabajo (Leonardo Ibarra):**
   - Configurar perfiles de usuario, credenciales seguras y políticas de acceso en Active Directory/Entra ID.
   - Capacitar técnicamente al personal médico y asistencial en el uso del hardware instalado.
   - Transferir el paquete operativo completo al Líder de Hardware para la revisión de cierre.

### 11.4 Sinergia Metodológica IDEF0 vs. BPMN
El sitio resalta explícitamente la complementariedad entre ambos modelos:
- **IDEF0** otorga la **visión estructural y contextual externa** (qué necesita el área del hospital, qué normas la limitan, qué recursos usa y qué entrega al mundo exterior).
- **BPMN** otorga la **visión procedimental e interna** (quién hace qué, en qué orden temporal, qué compuertas condicionan el flujo y cómo se gestionan los reprocesos).

---

## 12. Plataformas Externas y Diagramas Vectoriales Vinculados

| Recurso | Tipo | Ubicación / Enlace | Propósito |
| :--- | :--- | :--- | :--- |
| **Sistema de Inventario IATECH** | Aplicación Web (Producción) | `https://iatech-co-frontend.vercel.app/` | Gestión de stock, activos de infraestructura y control de almacén en tiempo real. |
| **Diagrama Vectorial IDEF0** | Archivo SVG | `/public/idef0-diagram.svg` | Diagrama oficial Nivel A-0 para descarga y renderizado con zoom de alta fidelidad. |
| **Diagrama Vectorial BPMN** | Archivo SVG | `/public/bpmn-diagram.svg` | Diagrama oficial de proceso en 6 carriles para descarga y visualización vectorial. |

---

## 13. Resumen del Equipo de Trabajo y Asignaciones

Todos los integrantes pertenecen a la carrera de **Ingeniería de Sistemas** de la **Universidad Católica Boliviana "San Pablo"**:

| Nombre Completo | Rol Funcional (Organigrama) | Rol Ágil (Scrum) | Personalidad MBTI | Enfoque Técnico Principal |
| :--- | :--- | :--- | :---: | :--- |
| **Octavio Luna Vargas** | Líder de Hardware e Infraestructura | Scrum Master | **ENFP** | Liderazgo transversal, facilitación ágil, mitigación de fallas críticas P1. |
| **Leandro Colque** | Dirección de Tecnología y Presupuesto | Product Owner | **ENTJ** | Stack tecnológico, arquitectura nube/on-premise, modelos FinOps (CAPEX/OPEX). |
| **Einar Andrés Guillén Boero** | Gestión de Infraestructura Global | Developer | **ESFP** | Adquisición, logística, racks, cableado estructurado, centros de datos. |
| **Huáscar Camilo Durán Avendaño** | Aseguramiento de Calidad y Recursos | Developer | **INFJ** | Normativas ISO 13485 / CE / FDA, auditoría de seguridad física y eficiencia energética. |
| **Leonardo Ibarra López** | Operaciones de Soporte y Entorno | Developer | **ENFP** | Helpdesk, acuerdos de servicio (SLA), Active Directory / Entra ID, capacitación clínica. |

---

*Fin del Documento de Estructura y Contenidos — Equipo Tiradores Hardware / IA MediTech.*
