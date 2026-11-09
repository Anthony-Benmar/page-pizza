# Amici event-site demo

Static Spanish-language event-catering site. The navigation on the homepage opens local page views instead of sending visitors to the reference website.

## Files
- `index.html` — homepage
- `paginas.html` — shared template for the local destination pages
- `paginas.js` — page content, responsive menu, and contact form behavior
- `paginas.css` — styles for the destination pages
- `styles.css` and `main.js` — homepage styling and behavior

Destination views use query parameters, for example `paginas.html?pagina=pizza`. Available views: `pizza`, `pasta`, `inspiracion`, `historias`, `nosotros`, `contacto`, `festivales`, and `empresas`.

The destination-page copy is original demo content, not copied from the reference site. The contact form opens the visitor's email application and does not send or store information on a server.
