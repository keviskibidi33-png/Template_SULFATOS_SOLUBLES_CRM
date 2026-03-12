export type SulfatosSolublesPayload = {
    muestra: string
    numero_ot: string
    fecha_ensayo: string
    realizado_por?: string
    cliente?: string
    condicion_secado_aire?: string
    condicion_secado_horno?: string
    capsula_numero?: string
    volumen_agua_ml?: number | null
    peso_suelo_seco_g?: number | null
    alicuota_tomada_ml?: number | null
    titulacion_suelo_g?: number | null
    solucion_cloruro_bario?: string
    peso_crisol_g?: number | null
    peso_crisol_residuos_g?: number | null
    residuo_sulfatos_g?: number | null
    contenido_sulfatos_ppm?: number | null
    observaciones?: string
    equipo_horno_codigo?: string
    equipo_mufla_codigo?: string
    equipo_balanza_001_codigo?: string
    equipo_balanza_codigo?: string
    revisado_por?: string
    revisado_fecha?: string
    aprobado_por?: string
    aprobado_fecha?: string
    [key: string]: unknown
}

export type ModuloPayload = SulfatosSolublesPayload

export type EnsayoDetail = {
    id: number
    numero_ensayo?: string | null
    numero_ot?: string | null
    cliente?: string | null
    muestra?: string | null
    fecha_documento?: string | null
    estado?: string | null
    payload?: SulfatosSolublesPayload | null
}

export type SaveResponse = {
    id: number
    numero_ensayo: string
    numero_ot: string
    estado: string
}
