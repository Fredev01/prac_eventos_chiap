# Guía para Contribuir al Proyecto Eventos Chiapas

¡Gracias por tu interés en colaborar con este proyecto! Sigue estas instrucciones para mantener una colaboración ordenada y coherente.

---

## ✅ Cómo Colaborar

1. **Haz un fork del repositorio.**
2. **Clona tu fork:**
   ```bash
   git clone https://github.com/tu-usuario/prac_eventos_chiap.git
   ```
3. **Crea una nueva rama para tu cambio:**
   ```bash
   git checkout -b feat/nombre-cambio
   ```
4. **Realiza tus cambios y haz commits siguiendo las reglas (ver más abajo).**
5. **Sube tus cambios y crea un Pull Request a la rama main del repositorio original.**

## 🌿 Reglas para Nombrar Ramas

Usa el siguiente formato:

- tipo/nombre-cambio

  **Tipos comunes:**

- feat/ → Nueva funcionalidad
- fix/ → Corrección de errores
- docs/ → Cambios en la documentación
- style/ → Formato, espacios, estilos (sin cambios de lógica)
- refactor/ → Refactorización de código
- test/ → Agregado o actualización de pruebas

## ✍️ Reglas para Mensajes de Commit

- Sigue la convención Conventional Commits:

```bash
   <tipo>: <mensaje breve en minúsculas>
```

**Ejemplos válidos:**

- feat: agrega sección de eventos
- fix: corrige error en navegación
- docs: actualiza objetivos en readme
- style: mejora indentación en index.html
