# language: es
# encoding: utf-8

Característica: Recuperar las claves de la lista de forma ordenada

@wip
Escenario: Lista con elementos
    Dado una lista con los siguientes elementos
    | "clave_B" | "valor"|
    | "clave_C" | "valor2"|
    | "clave_A" | "valor3"|
    Cuando se recupera la lista de claves
    Entonces la lista esta ordenada
    