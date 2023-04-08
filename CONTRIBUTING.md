# Constributing

## Development

### Frontend

Im frontend Ordner liegt ein Vue Projekt.

Zum Starten des Frontends kann man diese Befehle ausführen:

```bash
npm install
npm start
```

### Datebase

Die Datenbank kann durch das docker-compose file gestartet werden:

```bash
docker compose up -d database db-init
```

Die Datenbank wird durch das docker.ini file initialisiert. Damit das Singlenode Setup abgeschlossen wird müssen noch
die User Tabellen angelegt werden, dies wird durch den db-init container, welcher ein shell Script (couchdb-init.sh) zum Anlegen der
Tabellen ausführt, gemacht.

## Testing

Zum Testen des Projektes wird Cypress verwendet. Zum Starten von Cypress wird folgender Befehl ausgeführt:

```bash
npm run cypress:open
```

## Deployment

Das Deployment wird über das docker-compose File erledigt. Dieses wird in Verbindung mit benötigten *.env, *.ini und *.sh files auf den Server geladen.
