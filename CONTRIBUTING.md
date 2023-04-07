# Constributing

## Development

Im frontend Ordner liegt ein Vue Projekt.

Zum Starten des Frontends kann man diese Befehle ausführen:

```bash
npm install
npm start
```

Die Datenbank wird durch das docker.ini file initialisiert. Damit das Singlenode Setup abgeschlossen wird müssen noch
die User Tabellen angelegt werden, dies wird durch den db-init container, welcher ein shell Script (couchdb-init.sh) zum Anlegen der
Tabellen ausführt.

## Testing

Zum Testen des Projektes wird Cypress verwendet. Zum Starten von Cypress wird folgender Befehl ausgeführt:

```bash
npm run cypress:open
```
