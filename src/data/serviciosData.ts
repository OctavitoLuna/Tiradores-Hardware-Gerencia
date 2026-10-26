export interface PriceRow {
  plan: string;
  bajada?: string;
  subida?: string;
  bajadaSubida?: string;
  uso?: string;
  datos?: string;
  tarifaBs: string;
  alcance?: string;
  observaciones?: string;
}

export interface PriceTableTab {
  id: string;
  name: string;
  columns: string[];
  rows: PriceRow[];
}

export const leyendaPreciosComun = "Precios referenciales en bolivianos (Bs.), sujetos a cambio y a factibilidad técnica. Confirmar con el proveedor antes de contratar.";

export const queSonServiciosExternos = {
  quote: "Los servicios externos (también conocidos como outsourcing tecnológico) son soluciones, infraestructura o soporte proporcionados por empresas especializadas ajenas a la organización.",
  ampliacion: "Abarcan áreas críticas como conectividad de alta disponibilidad, computación en la nube, ciberseguridad perimetral y mantenimiento de infraestructura de telecomunicaciones. A diferencia de un servicio interno gestionado íntegramente por personal propio, estos servicios se contratan para cubrir capacidades de alta complejidad técnica o requerimientos con costos de capital inicial muy elevados que no conviene operar de manera aislada, permitiendo a IATECH Co. acceder a infraestructura de nivel empresarial con Acuerdos de Nivel de Servicio (SLA) rigurosos."
};

export const paraQueSirven = {
  quote: "Su propósito fundamental es permitir que la empresa se enfoque en su 'Core Business' (en nuestro caso, la innovación y el desarrollo) delegando tareas técnicas complejas a expertos. En una empresa moderna, estos servicios sirven para:",
  pilares: [
    {
      id: "continuidad",
      title: "Garantizar la Continuidad",
      desc: "Proveen infraestructura robusta (como Internet Dedicado) que sería prohibitivamente costoso y complejo mantener de forma interna con redundancia propia."
    },
    {
      id: "seguridad",
      title: "Fortalecer la Seguridad",
      desc: "Permiten acceder a tecnologías de punta, como el bloqueo de telefonía móvil, para proteger la propiedad intelectual y los secretos industriales del desarrollo médico."
    },
    {
      id: "escalabilidad",
      title: "Escalabilidad",
      desc: "Facilitan el crecimiento rápido mediante servicios de Cloud y telecomunicaciones que se adaptan a la demanda elástica de los proyectos de prototipado."
    }
  ],
  ventajasAdicionales: [
    {
      title: "Reducción de Inversión Inicial (CAPEX)",
      desc: "Transforma fuertes inversiones en equipamiento propio en gastos operativos mensuales predecibles (OPEX)."
    },
    {
      title: "Acceso Inmediato a Especialistas",
      desc: "Soporte de ingenieros certificados en telecomunicaciones ópticas, satélites y radiofrecuencia sin costo de reclutamiento."
    },
    {
      title: "Soporte Técnico con SLA Definido",
      desc: "Tiempos de respuesta contractualmente garantizados con penalizaciones por incumplimiento y monitoreo 24/7."
    }
  ]
};

export const servicioAXS = {
  title: "Servicio de Internet Dedicado (AXS Bolivia)",
  badge: "Telecomunicaciones de Fibra Óptica Empresarial",
  description: "Para que proyectos de Inteligencia Artificial y Blockchain funcionen, se requiere una conexión que no falle. AXS Bolivia provee este enlace de nivel empresarial.",
  funcionalidad: "Un enlace de Internet dedicado ofrece ancho de banda exclusivo y garantizado que no se comparte con otros clientes, a diferencia de las conexiones residenciales convencionales. Su función en el proyecto es sostener el procesamiento distribuido, la transferencia masiva de datos clínicos para modelos de Inteligencia Artificial y Blockchain, la sincronización continua con la nube médica y el acceso remoto a servidores de prueba sin fluctuaciones ni caídas de rendimiento. AXS Bolivia opera una moderna red troncal de fibra óptica con tecnología DWDM y salida internacional con fibra propia.",
  caracteristicas: [
    "Red troncal de fibra óptica con tecnología GPON y enlaces corporativos ONLINE/Prime Fiber.",
    "Planes empresariales con IPs públicas fijas incluidas según el rango tarifario (1 IP en planes hasta Bs. 1.750; 5 IPs en planes desde Bs. 1.751).",
    "Opción de enlace simétrico garantizado (Prime Fiber: velocidad de subida exactamente igual a la de bajada) para cargas críticas.",
    "Posibilidad de contratar bloques de IPs públicas adicionales (4, 8, 16, 32 o 64) como servicio extra para arquitectura de servidores.",
    "Acuerdos de Nivel de Servicio (SLA) con alta disponibilidad y compromisos de permanencia mínima con tarifas descontadas.",
    "Cobertura metropolitana directa en las ciudades de La Paz, Cochabamba y Santa Cruz.",
    "Línea corporativa gratuita de atención y soporte técnico continuo: 800-11-1111."
  ],
  fuentePrecios: "Tarifario Semestral de Servicios AXS Bolivia S.A., Agosto 2026. Tarifas mensuales en Bs., con impuestos de ley incluidos. Instalación Bs. 199 en planes GPON (Bs. 350 en Prime Fiber).",
  tabs: [
    {
      id: "gpon-empresa",
      name: "Fibra Empresa (GPON)",
      columns: ["Plan", "Bajada (hasta)", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Fibra Empresa 200 Mbps", bajada: "200 Mbps", tarifaBs: "1.439,00" },
        { plan: "Fibra Empresa 300 Mbps", bajada: "300 Mbps", tarifaBs: "3.146,50" },
        { plan: "Fibra Empresa 400 Mbps", bajada: "400 Mbps", tarifaBs: "4.861,00" },
        { plan: "Fibra Empresa 500 Mbps", bajada: "500 Mbps", tarifaBs: "6.619,00" },
        { plan: "Fibra Empresa 700 Mbps", bajada: "700 Mbps", tarifaBs: "10.069,00" },
        { plan: "Fibra Empresa 1000 Mbps", bajada: "1000 Mbps", tarifaBs: "15.259,00" },
      ]
    },
    {
      id: "gpon-negocio",
      name: "Fibra Negocio (GPON)",
      columns: ["Plan", "Bajada", "Subida", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Fibra Negocio 100 Mbps", bajada: "100 Mbps", subida: "50 Mbps", tarifaBs: "669,00" },
        { plan: "Fibra Negocio 150 Mbps", bajada: "150 Mbps", subida: "75 Mbps", tarifaBs: "999,00" },
        { plan: "Fibra Negocio 200 Mbps", bajada: "200 Mbps", subida: "100 Mbps", tarifaBs: "1.329,00" },
        { plan: "Fibra Negocio 300 Mbps", bajada: "300 Mbps", subida: "150 Mbps", tarifaBs: "1.989,00" },
        { plan: "Fibra Negocio 400 Mbps", bajada: "400 Mbps", subida: "200 Mbps", tarifaBs: "2.639,00" },
        { plan: "Fibra Negocio 500 Mbps", bajada: "500 Mbps", subida: "250 Mbps", tarifaBs: "3.269,00" },
      ]
    },
    {
      id: "gpon-corporativo",
      name: "Fibra Corporativa (GPON)",
      columns: ["Plan", "Bajada", "Subida", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Fibra Corporativa 250 Mbps", bajada: "250 Mbps", subida: "166,7 Mbps", tarifaBs: "2.539,00" },
        { plan: "Fibra Corporativa 500 Mbps", bajada: "500 Mbps", subida: "333,3 Mbps", tarifaBs: "4.989,00" },
        { plan: "Fibra Corporativa 750 Mbps", bajada: "750 Mbps", subida: "500 Mbps", tarifaBs: "7.349,00" },
        { plan: "Fibra Corporativa 1000 Mbps", bajada: "1000 Mbps", subida: "666,7 Mbps", tarifaBs: "9.619,00" },
      ]
    },
    {
      id: "prime-fiber",
      name: "Online Prime Fiber (Simétrico)",
      columns: ["Plan", "Bajada y subida", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Prime Fiber 20 Mbps", bajadaSubida: "20 Mbps simétrico", tarifaBs: "2.510,00" },
        { plan: "Prime Fiber 50 Mbps", bajadaSubida: "50 Mbps simétrico", tarifaBs: "5.990,00" },
        { plan: "Prime Fiber 100 Mbps", bajadaSubida: "100 Mbps simétrico", tarifaBs: "11.630,00" },
        { plan: "Prime Fiber 200 Mbps", bajadaSubida: "200 Mbps simétrico", tarifaBs: "23.030,00" },
        { plan: "Prime Fiber 500 Mbps", bajadaSubida: "500 Mbps simétrico", tarifaBs: "57.350,00" },
        { plan: "Prime Fiber 1000 Mbps", bajadaSubida: "1000 Mbps simétrico", tarifaBs: "114.286,00" },
      ]
    }
  ],
  recomendacion: "¿Cuál nos conviene? Fibra Negocio o Empresa para uso general del equipo; Prime Fiber si se requiere un enlace dedicado simétrico para cargas críticas de IA. Nota: la elección final depende del presupuesto OPEX definido por el área de Dirección de Tecnología y Presupuesto.",
  condiciones: [
    "IPs públicas adicionales (mensual): 4 IPs Bs. 30 · 8 IPs Bs. 120 · 16 IPs Bs. 275 · 32 IPs Bs. 570 · 64 IPs Bs. 1.110.",
    "Fibra óptica excedente (desde 250 m en GPON): Bs. 4 por metro (Bs. 12 por metro en planes ONLINE desde 200 m).",
    "Traslado externo en planes GPON: Bs. 199.",
    "Visita técnica con solución puntual (problemas atribuibles al usuario): Bs. 77.",
    "Planes autorizados para uso corporativo y cafés Internet; no autorizados para reventa del servicio.",
    "Instalaciones y cambios de plan siempre sujetos a factibilidad técnica y a contrato de adhesión formal."
  ]
};

export const servicioStarlink = {
  title: "Servicio de Internet Satelital (Starlink)",
  badge: "Constelación de Órbita Baja (LEO) • Respaldo Crítico",
  description: "Starlink, de SpaceX, ofrece internet por satélites de órbita baja y ya opera en Bolivia. Para IATECH Co. funciona como enlace de respaldo del Internet Dedicado: si la fibra falla, la conexión satelital mantiene operativos los sistemas críticos.",
  datoContexto: "Starlink inició operaciones oficiales en Bolivia en 2026, bajo el Decreto Supremo 5509 y el reglamento de la Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes (ATT) para constelaciones satelitales de órbita baja. AXS Bolivia también comercializa Starlink con planes propios integrados a su red.",
  funcionalidad: "Starlink conecta mediante una constelación de miles de satélites pequeños desplegados en órbita terrestre baja (LEO, aproximadamente a 550 km de altura). Esta corta distancia reduce drásticamente la latencia (25-45 ms frente a los más de 600 ms de los satélites geoestacionarios tradicionales) y permite cobertura en cualquier rincón del país. En el proyecto de IATECH Co. cumple dos roles estratégicos: (1) Respaldo de alta disponibilidad (failover automático) ante eventuales caídas del enlace de fibra óptica principal y (2) Conectividad para sedes hospitalarias, centros médicos periféricos o brigadas móviles donde no llega la red de fibra.",
  caracteristicas: [
    "Cobertura integral en zonas urbanas, suburbanas y rurales de difícil acceso geográfico.",
    "Equipo propio: kit con antena orientable electrónica (phased array) y router Wi-Fi de alta gama.",
    "Vida útil estimada del equipo de hasta 10 años y garantía formal del fabricante de 3 años.",
    "Segmentación de planes: residenciales, itinerantes (Roam) y corporativos (Priority).",
    "Planes Priority (local o global) priorizan el tráfico en horas pico y requieren la antena Starlink High Performance.",
    "Requiere línea de visión despejada del cielo hacia el satélite; eventos meteorológicos de lluvia extrema pueden atenuar temporalmente la señal.",
    "Como respaldo empresarial: la combinación de kit estándar + plan Lite es una alternativa altamente costo-efectiva para asegurar continuidad operativa 24/7."
  ],
  fuentePrecios: "Starlink Bolivia según cobertura de prensa local (Red Uno, abril 2026); verificar en la página oficial de Starlink porque los precios han presentado ajustes periódicos.",
  tabs: [
    {
      id: "starlink-residencial",
      name: "Residencial y Roam",
      columns: ["Plan", "Uso / Modalidad", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Residencial Lite", uso: "Fijo, datos ilimitados", tarifaBs: "400" },
        { plan: "Residencial Estándar", uso: "Fijo, datos ilimitados", tarifaBs: "531" },
        { plan: "Roam 100 GB", uso: "Movilidad / Itinerante", tarifaBs: "361" },
        { plan: "Roam Ilimitado", uso: "Movilidad / Itinerante", tarifaBs: "957" },
      ]
    },
    {
      id: "starlink-priority-local",
      name: "Priority (Local)",
      columns: ["Plan / Capacidad", "Datos prioritarios", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Priority 50 GB", datos: "50 GB prioritarios", tarifaBs: "425" },
        { plan: "Priority 500 GB", datos: "500 GB prioritarios", tarifaBs: "1.085" },
        { plan: "Priority 1 TB", datos: "1 TB prioritario (1.000 GB)", tarifaBs: "1.910" },
        { plan: "Priority 2 TB", datos: "2 TB prioritarios (2.000 GB)", tarifaBs: "3.560" },
      ]
    },
    {
      id: "starlink-priority-global",
      name: "Priority (Global)",
      columns: ["Plan / Capacidad", "Datos prioritarios", "Tarifa mensual (Bs.)"],
      rows: [
        { plan: "Global Priority 50 GB", datos: "50 GB globales", tarifaBs: "3.200" },
        { plan: "Global Priority 500 GB", datos: "500 GB globales", tarifaBs: "8.400" },
        { plan: "Global Priority 1 TB", datos: "1 TB global", tarifaBs: "14.900" },
        { plan: "Global Priority 2 TB", datos: "2 TB globales", tarifaBs: "27.900" },
      ]
    },
    {
      id: "starlink-kits",
      name: "Equipos (Kits - Pago Único)",
      columns: ["Kit de Hardware", "Perfil de uso", "Precio (Bs.)"],
      rows: [
        { plan: "Starlink Mini", uso: "Ultraportátil / Mochila", tarifaBs: "2.200" },
        { plan: "Kit Estándar (Residencial)", uso: "Antena orientable para techo o suelo", tarifaBs: "2.800" },
        { plan: "Starlink Performance (Empresarial)", uso: "Alta ganancia, entornos industriales", tarifaBs: "25.000" },
      ]
    }
  ],
  notaKits: "Precios de kits reportados en el lanzamiento (febrero 2026); pueden variar. El envío y los accesorios se cobran aparte.",
  starlinkAXS: {
    fuente: "Tarifario AXS Bolivia, Agosto 2026. AXS ofrece planes prioritarios locales con velocidades de bajada de 135 a 310 Mbps y de subida de 20 a 44 Mbps:",
    columns: ["Plan AXS", "Datos prioritarios", "Tarifa mensual (Bs.)"],
    rows: [
      { plan: "AXS Prioridad Local by Starlink 50 GB", datos: "50 GB", tarifaBs: "193" },
      { plan: "AXS Prioridad Local by Starlink 500 GB", datos: "500 GB", tarifaBs: "545" },
      { plan: "AXS Prioridad Local by Starlink 1 TB", datos: "1.000 GB", tarifaBs: "985" },
      { plan: "AXS Prioridad Local by Starlink 2 TB", datos: "2.000 GB", tarifaBs: "1.865" },
    ],
    bloquesAdicionales: "AXS Bloque de datos Local by Starlink+: 50 GB por Bs. 88 · 500 GB por Bs. 440.",
    nota: "Las tarifas de AXS y las de Starlink directo son de fuentes y fechas distintas; la diferencia debe validarse con cotización formal antes de decidir."
  }
};

export const servicioInhibicion = {
  title: "Servicio de Inhibición de Señales Móviles",
  badge: "Seguridad Electromagnética y Confidencialidad",
  description: "Para garantizar que las investigaciones en Inteligencia Artificial y los nuevos prototipos se mantengan bajo estricta confidencialidad, se requiere un entorno blindado. Este servicio proporciona una barrera electromagnética contra filtraciones no autorizadas.",
  funcionalidad: "Un inhibidor de señales emite ruido e interferencia controlada en las frecuencias exactas de telefonía móvil celular (2G, 3G, 4G LTE y 5G), así como en bandas complementarias como Wi-Fi (2.4 GHz y 5 GHz), Bluetooth y posicionamiento satelital GPS/GLONASS. Su objetivo es bloquear la comunicación de terminales y sensores no autorizados dentro de un perímetro definido, impidiendo la captura y transmisión de fotografías, transmisiones de voz, espionaje o exfiltración de telemetría médica en laboratorios de desarrollo.",
  caracteristicas: [
    "Cobertura multibanda simultánea y configurable de manera independiente por canal.",
    "Potencia y radio de alcance regulables mediante atenuadores según las dimensiones del ambiente.",
    "Antenas omnidireccionales de alta ganancia (sistema multicanal de 4 a 12 dipolos independientes).",
    "Instalación fija en áreas cerradas o unidades tácticas portátiles con batería de respaldo.",
    "Operación continua con alimentación eléctrica estabilizada y sistema de ventilación activa de bajo ruido."
  ],
  preciosTabla: {
    columns: ["Equipo / Servicio", "Alcance", "Costo (Bs.)", "Observaciones"],
    rows: [
      {
        plan: "Inhibidor Táctico Portátil (4 Antenas)",
        alcance: "Radio de 5 a 15 metros",
        tarifaBs: "Por cotizar",
        observaciones: "Batería recargable, bloqueo 2G/3G/4G para salas de reuniones confidenciales."
      },
      {
        plan: "Inhibidor Estacionario Multibanda (8 Antenas)",
        alcance: "Radio de 20 a 50 metros",
        tarifaBs: "Por cotizar",
        observaciones: "Cobertura 2G/3G/4G/5G, Wi-Fi 2.4/5GHz y GPS para laboratorio de prototipos."
      },
      {
        plan: "Blindaje de Sala RF / Jaula de Faraday Modular",
        alcance: "Ambiente completo (hasta 80 m²)",
        tarifaBs: "Por cotizar",
        observaciones: "Atenuación electromagnética pasiva y activa con certificación de seguridad."
      },
      {
        plan: "Servicio de Calibración y Auditoría Espectral",
        alcance: "Por inspección / Anual",
        tarifaBs: "Por cotizar",
        observaciones: "Verificación técnica de no interferencia externa con analizador de espectro."
      }
    ]
  },
  cumplimientoNormativo: "El uso de inhibidores de señal está sujeto a la regulación de telecomunicaciones vigente. Antes de contratar o instalar este servicio se debe verificar la autorización de la autoridad competente y definir los ambientes y condiciones donde su uso es permitido."
};

export const comparativaServicios = [
  {
    servicio: "Internet Dedicado AXS",
    problema: "Caídas de conexión y baja velocidad en procesamiento de IA",
    pilar: "Continuidad",
    rangoCosto: "Desde Bs. 669 (Fibra Negocio 100M) hasta planes simétricos Prime Fiber",
    areaResponsable: "Gestión de Infraestructura Global"
  },
  {
    servicio: "Internet Satelital Starlink",
    problema: "Corte de fibra óptica troncal o centros de salud en zonas remotas",
    pilar: "Continuidad (Failover) y Cobertura",
    rangoCosto: "Desde Bs. 400 (Residencial Lite) hasta planes Priority",
    areaResponsable: "Operaciones de Soporte y Redes"
  },
  {
    servicio: "Inhibición de Señales Móviles",
    problema: "Filtraciones no autorizadas y espionaje en salas de prototipos",
    pilar: "Seguridad y Confidencialidad",
    rangoCosto: "Por cotizar según alcance y certificación regulatoria",
    areaResponsable: "Aseguramiento de Calidad y Ciberseguridad"
  }
];
